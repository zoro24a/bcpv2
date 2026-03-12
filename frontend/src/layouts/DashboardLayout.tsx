import { AppShell, Burger, NavLink, Group, Text, Avatar, Menu, UnstyledButton, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconDashboard, 
  IconCertificate, 
  IconUsers, 
  IconSettings, 
  IconLogout, 
  IconBuildingCommunity,
  IconUsersGroup
} from '@tabler/icons-react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const navData = {
  admin: [
    { label: 'Dashboard', icon: IconDashboard, link: '/admin' },
    { label: 'Departments', icon: IconBuildingCommunity, link: '/admin/departments' },
    { label: 'Batches', icon: IconUsersGroup, link: '/admin/batches' },
    { label: 'Users', icon: IconUsers, link: '/admin/users' },
    { label: 'Templates', icon: IconSettings, link: '/admin/templates' },
  ],
  student: [
    { label: 'My Requests', icon: IconDashboard, link: '/student' },
    { label: 'New Request', icon: IconCertificate, link: '/student/new' },
  ],
  tutor: [
    { label: 'Dashboard', icon: IconDashboard, link: '/tutor' },
    { label: 'Requests', icon: IconCertificate, link: '/tutor/requests' },
    { label: 'My Batches', icon: IconUsersGroup, link: '/tutor/batches' },
  ],
  hod: [
    { label: 'Dashboard', icon: IconDashboard, link: '/hod' },
    { label: 'Requests', icon: IconCertificate, link: '/hod/requests' },
  ],
  principal: [
    { label: 'Dashboard', icon: IconDashboard, link: '/principal' },
    { label: 'Final Approvals', icon: IconCertificate, link: '/principal/requests' },
  ],
  office: [
    { label: 'Dashboard', icon: IconDashboard, link: '/office' },
    { label: 'Issue Certificates', icon: IconCertificate, link: '/office/issue' },
    { label: 'Issued History', icon: IconSettings, link: '/office/history' },
  ],
};

export function DashboardLayout({ role }: { role: keyof typeof navData }) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const links = navData[role].map((item) => (
    <NavLink
      key={item.label}
      active={location.pathname === item.link}
      label={item.label}
      leftSection={<item.icon size="1.2rem" stroke={1.5} />}
      onClick={() => {
        navigate(item.link);
        if (opened) toggle();
      }}
      className="rounded-md mb-1 transition-colors hover:bg-white/10"
      styles={{
        label: { color: 'white' },
        section: { color: 'white' }
      }}
    />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
      styles={{
        main: { backgroundColor: '#f8fafc' },
        navbar: { backgroundColor: '#0f172a', borderRight: 'none' }
      }}
    >
      <AppShell.Header className="shadow-sm border-none bg-white">
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text fw={700} size="lg" className="text-blue-600">
              BCP v2
            </Text>
          </Group>
          
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <UnstyledButton>
                <Group gap="xs">
                  <Avatar radius="xl" size="sm" color="blue">JD</Avatar>
                  <div className="hidden sm:block">
                    <Text size="sm" fw={500}>John Doe</Text>
                    <Text size="xs" c="dimmed">{role.toUpperCase()}</Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                Profile
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item 
                color="red" 
                leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                onClick={() => navigate('/login')}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <Text size="xs" fw={700} c="dimmed" mb="md" className="uppercase tracking-widest pl-3">
              Menu
            </Text>
            {links}
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
