import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (credentials: any) => api.post('/auth/login', credentials),
  register: (data: any) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
};

export const requestService = {
  submit: (data: any) => api.post('/requests', data),
  getAll: (role: string) => api.get(`/requests?role=${role}`),
  approve: (id: string, comments: string) => api.put(`/requests/${id}/approve`, { comments }),
  return: (id: string, comments: string) => api.put(`/requests/${id}/return`, { comments }),
};

export const studentService = {
  bulkUpload: (formData: FormData) => api.post('/students/bulk', formData),
};

export default api;
