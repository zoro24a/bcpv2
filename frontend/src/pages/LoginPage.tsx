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
    
    // Mock login for now
    setTimeout(() => {
      setLoading(false);
      notifications.show({
        title: 'Login Successful',
        message: 'Welcome back to BCP v2',
        color: 'green',
      });
      // Mock navigation based on email (just for scaffolding)
      if (email.includes('admin')) navigate('/admin');
      else if (email.includes('student')) navigate('/student');
      else if (email.includes('tutor')) navigate('/tutor');
      else if (email.includes('hod')) navigate('/hod');
      else if (email.includes('principal')) navigate('/principal');
      else if (email.includes('office')) navigate('/office');
      else navigate('/admin');
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
