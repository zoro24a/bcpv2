import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8001',
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

export const adminService = {
  getStats: () => api.get('/admin/dashboard/stats'),
};

export const departmentService = {
  getAll: () => api.get('/departments'),
  create: (data: any) => api.post('/departments', data),
};

export const hodService = {
  getAll: () => api.get('/hods'),
  create: (data: any) => api.post('/hods', data),
};

export const tutorService = {
  getAll: () => api.get('/tutors'),
  create: (data: any) => api.post('/tutors', data),
};

export const batchService = {
  getAll: () => api.get('/batches'),
  assignTutor: (batchId: number, data: any) => api.post(`/batches/${batchId}/assign-tutor`, data),
};

export const studentService = {
  getAll: () => api.get('/students'),
  enroll: (data: any) => api.post('/students/enroll', data),
  bulkUpload: (formData: FormData) => api.post('/students/bulk', formData),
};

export default api;
