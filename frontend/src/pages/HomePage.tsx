import { 
  Container, 
  Text, 
  Button, 
  Group, 
  Card, 
  Title, 
  SimpleGrid, 
  ThemeIcon, 
  ActionIcon, 
  useMantineColorScheme, 
  Box,
  Overlay,
  Stack,
  Divider,
  Anchor
} from '@mantine/core';
import { 
  IconSun, 
  IconMoonStars, 
  IconCertificate, 
  IconCheck, 
  IconFileDescription, 
  IconClock, 
  IconSchool, 
  IconUser, 
  IconUsers, 
  IconBuildingCommunity,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
  IconMail,
  IconShieldCheck
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const navigate = useNavigate();

  const primaryBlue = '#1e3a8a';
  const lightBlue = '#2563eb';

  return (
    <Box className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
      {/* 1. Navbar */}
      <Box 
        component="nav" 
        className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
      >
        <Container size="lg" className="h-16 flex items-center justify-between">
          <Group gap="xs">
            <ThemeIcon size="xl" radius="md" color="blue" variant="gradient" gradient={{ from: primaryBlue, to: lightBlue }}>
              <IconCertificate size={24} />
            </ThemeIcon>
            <Box>
              <Text fw={700} size="lg" className="leading-tight text-slate-900 dark:text-white">
                Adhiyamaan College of Engineering
              </Text>
              <Text size="xs" c="dimmed" className="tracking-widest uppercase">
                Bonafide Certificate Portal
              </Text>
            </Box>
          </Group>

          <Group gap="xl" visibleFrom="sm">
            <Anchor href="#" fw={500} c="slate.7 hover:blue.6" className="no-underline transition-colors">Home</Anchor>
            <Anchor href="#" fw={500} c="slate.7 hover:blue.6" className="no-underline transition-colors">About</Anchor>
            <Anchor href="#" fw={500} c="slate.7 hover:blue.6" className="no-underline transition-colors">Contact</Anchor>
          </Group>

          <Group>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="default"
              size="lg"
              radius="md"
              aria-label="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
            <Button 
              variant="filled" 
              color="blue" 
              radius="md" 
              bg={primaryBlue}
              onClick={() => navigate('/login')}
              visibleFrom="xs"
            >
              Login to Portal
            </Button>
          </Group>
        </Container>
      </Box>

      {/* 2. Hero Section */}
      <Box className="relative h-[600px] flex items-center">
        <Box 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-campus.png')" }}
        />
        <Overlay 
          gradient={`linear-gradient(135deg, ${primaryBlue}cc 0%, ${lightBlue}88 100%)`}
          opacity={0.8}
          zIndex={1}
        />
        
        <Container size="lg" className="relative z-10 text-white">
          <Stack gap="lg" maw={600}>
            <Box>
              <Title size={48} fw={800} className="tracking-tight leading-tight">
                Welcome to Bonafide <br /> 
                <span className="text-blue-200">Certificate Portal</span>
              </Title>
              <Text size="xl" mt="md" fw={400} className="text-slate-100/90">
                Request and track your bonafide certificates easily through our digital portal. A streamlined process for students and faculty.
              </Text>
            </Box>
            
            <Group mt="xl">
              <Button 
                size="lg" 
                radius="md" 
                bg="white" 
                c={primaryBlue} 
                onClick={() => navigate('/login')}
                className="hover:bg-slate-100"
              >
                Login Now
              </Button>
              <Button 
                size="lg" 
                radius="md" 
                variant="outline" 
                color="white" 
                className="border-white/40 hover:bg-white/10"
              >
                Learn More
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* 3. Information Section */}
      <Container size="lg" py={80}>
        <Box className="text-center mb-16">
          <Title order={2} size={36} fw={800} c="slate.9">
            Simple, Digital & Transparent
          </Title>
          <Text c="dimmed" size="lg" mt="sm">
            Everything you need to know about the certificate process
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          <Card padding="xl" radius="lg" withBorder className="shadow-sm hover:shadow-md transition-shadow">
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconCertificate size={28} />
            </ThemeIcon>
            <Text fw={700} size="xl" mt="md">What is a Bonafide Certificate?</Text>
            <Text c="dimmed" mt="sm" size="sm" className="leading-relaxed">
              A Bonafide Certificate is an official document issued by the college certifying that a student is a genuine student of the institution, studying in a particular course and year.
            </Text>
          </Card>

          <Card padding="xl" radius="lg" withBorder className="shadow-sm hover:shadow-md transition-shadow">
            <ThemeIcon size={50} radius="md" variant="light" color="cyan">
              <IconShieldCheck size={28} />
            </ThemeIcon>
            <Text fw={700} size="xl" mt="md">Purpose and Uses</Text>
            <Text c="dimmed" mt="sm" size="sm" className="leading-relaxed">
              Essential for educational loans, internship applications, visa verification, opening bank accounts, and participating in external competitions or conferences.
            </Text>
          </Card>

          <Card padding="xl" radius="lg" withBorder className="shadow-sm hover:shadow-md transition-shadow">
            <ThemeIcon size={50} radius="md" variant="light" color="violet">
              <IconFileDescription size={28} />
            </ThemeIcon>
            <Text fw={700} size="xl" mt="md">How to Apply</Text>
            <Text c="dimmed" mt="sm" size="sm" className="leading-relaxed">
              Simply login to the portal, navigate to 'New Request', fill in the details (purpose & type), and submit. Your request will be automatically routed to your Tutor.
            </Text>
          </Card>

          <Card padding="xl" radius="lg" withBorder className="shadow-sm hover:shadow-md transition-shadow">
            <ThemeIcon size={50} radius="md" variant="light" color="orange">
              <IconUsers size={28} />
            </ThemeIcon>
            <Text fw={700} size="xl" mt="md">Required Documents</Text>
            <Text c="dimmed" mt="sm" size="sm" className="leading-relaxed">
              Keep your digital Student ID card and current semester fee receipt ready. Some certificate types may require additional uploads like internship offer letters.
            </Text>
          </Card>

          <Card padding="xl" radius="lg" withBorder className="shadow-sm hover:shadow-md transition-shadow">
            <ThemeIcon size={50} radius="md" variant="light" color="teal">
              <IconClock size={28} />
            </ThemeIcon>
            <Text fw={700} size="xl" mt="md">Processing Time</Text>
            <Text c="dimmed" mt="sm" size="sm" className="leading-relaxed">
              Our digital workflow significantly reduces delays. Standard requests are typically processed and issued within 3 to 5 working days.
            </Text>
          </Card>
          
          <Card padding="xl" radius="lg" bg={primaryBlue} c="white">
             <Stack justify="center" h="100%" gap="xs">
                <Text fw={700} size="xl">Ready to get started?</Text>
                <Text size="sm" className="text-white/80">Login to your student account and submit your request in less than 2 minutes.</Text>
                <Button variant="white" c={primaryBlue} mt="md" radius="md" component="a" href="/login">
                  Student Login
                </Button>
             </Stack>
          </Card>
        </SimpleGrid>
      </Container>

      {/* 4. Workflow Section */}
      <Box className="bg-slate-100 dark:bg-slate-800/50 py-24">
        <Container size="lg">
          <Box className="text-center mb-20">
            <Title order={2} size={36} fw={800}>Approval Workflow</Title>
            <Text c="dimmed" size="lg" mt="sm">Transparent multi-level verification process</Text>
          </Box>

          <Box className="overflow-x-auto pb-8">
            <Group justify="center" gap={0} wrap="nowrap" className="min-w-[800px]">
              {[
                { label: 'Student', desc: 'Request Submission', icon: IconUser, color: 'blue' },
                { label: 'Tutor', desc: 'Initial Review', icon: IconSchool, color: 'blue' },
                { label: 'HOD', desc: 'Department Approval', icon: IconBuildingCommunity, color: 'blue' },
                { label: 'Principal', desc: 'Final Verification', icon: IconShieldCheck, color: 'blue' },
                { label: 'Office', desc: 'Seal & Issuance', icon: IconCertificate, color: 'blue' },
                { label: 'Issued', desc: 'Ready for Download', icon: IconCheck, color: 'green' },
              ].map((step, index, arr) => (
                <Group key={step.label} gap={0} wrap="nowrap">
                  <Stack align="center" gap="xs" maw={140} className="relative">
                    <ThemeIcon size={64} radius="xl" variant="filled" color={step.color} className="shadow-lg transform transition-transform hover:scale-110">
                      <step.icon size={32} />
                    </ThemeIcon>
                    <Text fw={700} mt="xs">{step.label}</Text>
                    <Text size="xs" c="dimmed" ta="center">{step.desc}</Text>
                  </Stack>
                  {index < arr.length - 1 && (
                    <Box className="w-16 h-[2px] bg-slate-300 dark:bg-slate-700 mx-2 mb-20" />
                  )}
                </Group>
              ))}
            </Group>
          </Box>
        </Container>
      </Box>



      {/* 6. Footer */}
      <Box component="footer" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={40}>
            <Stack gap="md">
              <Group gap="xs">
                <ThemeIcon size="lg" radius="md" color="blue">
                  <IconCertificate size={20} />
                </ThemeIcon>
                <Text fw={700} size="xl" c="white">BCP v2</Text>
              </Group>
              <Text size="sm" className="leading-relaxed">
                Empowering Adhiyamaan students with a digital, transparent, and efficient certificate management system.
              </Text>
              <Group gap="xs">
                <ActionIcon variant="subtle" color="gray" size="lg"><IconBrandFacebook size={20} /></ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="lg"><IconBrandTwitter size={20} /></ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="lg"><IconBrandLinkedin size={20} /></ActionIcon>
              </Group>
            </Stack>

            <Stack gap="md">
              <Text fw={700} c="white">Quick Links</Text>
              <Stack gap="xs">
                <Anchor href="#" size="sm" c="inherit">About ACE</Anchor>
                <Anchor href="#" size="sm" c="inherit">Departments</Anchor>
                <Anchor href="#" size="sm" c="inherit">Admissions</Anchor>
                <Anchor href="#" size="sm" c="inherit">Contact Us</Anchor>
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={700} c="white">Contact Info</Text>
              <Stack gap="sm">
                <Group gap="xs" wrap="nowrap">
                  <IconMapPin size={18} className="shrink-0" />
                  <Text size="sm">Dr.MGR Nagar, Hosur, Krishnagiri District, Tamil Nadu - 635109</Text>
                </Group>
                <Group gap="xs">
                  <IconPhone size={18} />
                  <Text size="sm">+91-4344-260570</Text>
                </Group>
                <Group gap="xs">
                  <IconMail size={18} />
                  <Text size="sm">contact@adhiyamaan.ac.in</Text>
                </Group>
              </Stack>
            </Stack>

          </SimpleGrid>

          <Divider mt={60} mb={30} color="slate.8" />
          
          <Group justify="space-between">
            <Text size="xs">&copy; 2026 Adhiyamaan College of Engineering. All rights reserved.</Text>
            <Group gap="xl">
              <Text size="xs">Privacy Policy</Text>
              <Text size="xs">Terms of Service</Text>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
