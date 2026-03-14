import { 
  Paper, 
  TextInput, 
  PasswordInput, 
  Checkbox, 
  Button, 
  Title, 
  Text, 
  Container, 
  Group,
  Stack
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { authService } from '@/services/api';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await authService.login({ email, password });
      const { access_token } = response.data;
      
      // Save token
      localStorage.setItem('token', access_token);
      
      // Get user info and role
      const userResponse = await authService.getMe();
      const user = userResponse.data;
      localStorage.setItem('role', user.role);
      
      notifications.show({
        title: 'Login Successful',
        message: `Welcome back, ${user.first_name || 'User'}!`,
        color: 'green',
      });
      
      // Redirect based on role
      switch (user.role) {
        case 'student': navigate('/student/dashboard'); break;
        case 'tutor': navigate('/tutor/dashboard'); break;
        case 'hod': navigate('/hod/dashboard'); break;
        case 'principal': navigate('/principal/dashboard'); break;
        case 'office': navigate('/office/dashboard'); break;
        case 'admin': navigate('/admin/dashboard'); break;
        default: navigate('/');
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      notifications.show({
        title: 'Login Failed',
        message: error.response?.data?.detail || 'Invalid email or password',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Container size={420} my={40}>
        <Title ta="center" className="font-extrabold text-slate-900 mb-2">
          BCP v2
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Bonafide Certificate Portal v2
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleLogin}>
            <Stack>
              <TextInput 
                label="Email" 
                placeholder="you@college.edu" 
                required 
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <PasswordInput 
                label="Password" 
                placeholder="Your password" 
                required 
                mt="md" 
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <Group justify="space-between" mt="lg">
                <Checkbox label="Remember me" />
                <Text size="sm" className="text-blue-600 hover:underline cursor-pointer">
                  Forgot password?
                </Text>
              </Group>
              <Button fullWidth mt="xl" size="md" type="submit" loading={loading}>
                Sign in
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
