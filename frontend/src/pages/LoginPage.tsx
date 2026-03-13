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

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Demo Student Login Logic
    setTimeout(() => {
      setLoading(false);
      
      if (email === 'csestudent@gmail.com' && password === '4567890') {
        localStorage.setItem('role', 'student');
        notifications.show({
          title: 'Login Successful',
          message: 'Welcome back, Student!',
          color: 'green',
        });
        navigate('/student/dashboard'); // Redirecting to Student Dashboard
      } else if (email === 'csetutor@gmail.com' && password === '4567890') {
        localStorage.setItem('role', 'tutor');
        notifications.show({
          title: 'Login Successful',
          message: 'Welcome back, Tutor!',
          color: 'green',
        });
        navigate('/tutor/dashboard');
      } else if (email === 'csehod@gmail.com' && password === '4567890') {
        localStorage.setItem('role', 'hod');
        notifications.show({
          title: 'Login Successful',
          message: 'Welcome, Professor Winston!',
          color: 'blue',
        });
        navigate('/hod/dashboard');
      } else if (email === 'Principal@gmail.com' && password === '4567890') {
        localStorage.setItem('role', 'principal');
        notifications.show({
          title: 'Login Successful',
          message: 'Welcome, Principal Henderson!',
          color: 'indigo',
        });
        navigate('/principal/dashboard');
      } else if (email === 'office@gmail.com' && password === '4567890') {
        localStorage.setItem('role', 'office');
        notifications.show({
          title: 'Login Successful',
          message: 'Welcome back, Office Admin!',
          color: 'cyan',
        });
        navigate('/office/dashboard');
      } else if (email.includes('admin')) {
        // Fallback for previous scaffolding
        navigate('/admin');
      } else {
        notifications.show({
          title: 'Login Failed',
          message: 'Invalid email or password',
          color: 'red',
        });
      }
    }, 1000);
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
