import { Card, Text, Title, Group, SimpleGrid, Paper, Badge, Table } from '@mantine/core';

export function DashboardContent({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <Title order={2}>{title}</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700} className="uppercase">Total Requests</Text>
          <Group justify="space-between" mt="md">
            <Text size="xl" fw={700}>124</Text>
            <Badge color="blue" variant="light">+12%</Badge>
          </Group>
        </Card>
        
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700} className="uppercase">Pending Approval</Text>
          <Group justify="space-between" mt="md">
            <Text size="xl" fw={700}>18</Text>
            <Badge color="yellow" variant="light">Action Needed</Badge>
          </Group>
        </Card>

        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700} className="uppercase">Approved Today</Text>
          <Group justify="space-between" mt="md">
            <Text size="xl" fw={700}>7</Text>
            <Badge color="green" variant="light">Completed</Badge>
          </Group>
        </Card>

        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700} className="uppercase">Returned</Text>
          <Group justify="space-between" mt="md">
            <Text size="xl" fw={700}>3</Text>
            <Badge color="red" variant="light">Alert</Badge>
          </Group>
        </Card>
      </SimpleGrid>

      <Paper shadow="sm" radius="md" p="md" withBorder>
        <Text fw={700} mb="md">Recent Activity</Text>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Student</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Arun Kumar</Table.Td>
              <Table.Td>Bonafide (Scholarship)</Table.Td>
              <Table.Td>2026-03-12</Table.Td>
              <Table.Td><Badge color="yellow">Pending Tutor</Badge></Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Priya S</Table.Td>
              <Table.Td>Bonafide (General)</Table.Td>
              <Table.Td>2026-03-11</Table.Td>
              <Table.Td><Badge color="green">Approved</Badge></Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Paper>
    </div>
  );
}
