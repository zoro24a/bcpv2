import { Timeline, Text, Paper, Title, Badge, Group, Card, Stack, Button } from '@mantine/core';
import { IconUser, IconSchool, IconCertificate, IconCheck, IconClock } from '@tabler/icons-react';

export function RequestStatusTimeline() {
  return (
    <Timeline active={1} bulletSize={32} lineWidth={2}>
      <Timeline.Item bullet={<IconUser size={16} />} title="Student Submission">
        <Text c="dimmed" size="sm">Submitted on March 12, 2026</Text>
        <Text size="xs" mt={4}>Request created by Arun Kumar</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCheck size={16} />} title="Tutor Approval">
        <Text c="dimmed" size="sm">Approved by Dr. Rajesh (Tutor)</Text>
        <Text size="xs" mt={4}>March 12, 2026 • 2:30 PM</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconClock size={16} />} title="HOD Approval" lineVariant="dashed">
        <Text c="dimmed" size="sm">Pending at HOD Desk</Text>
        <Text size="xs" mt={4}>CSE Department</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconSchool size={16} />} title="Principal Approval">
        <Text c="dimmed" size="sm">Waiting for HOD approval</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCertificate size={16} />} title="Certificate Issuance">
        <Text c="dimmed" size="sm">Office Desk</Text>
      </Timeline.Item>
    </Timeline>
  );
}

export function StudentOverview() {
  return (
    <Stack gap="xl">
      <Title order={2}>My Requests</Title>
      
      <Group grow align="start">
        <Paper withBorder p="md" radius="md">
          <Text fw={700} mb="lg">Active Request Status</Text>
          <RequestStatusTimeline />
        </Paper>

        <Stack>
          <Card withBorder radius="md">
            <Group justify="space-between">
              <Text fw={700}>Request #BCP-2026-0045</Text>
              <Badge color="yellow">Pending HOD</Badge>
            </Group>
            <Text size="sm" mt="sm">Type: Bonafide (Scholarship)</Text>
            <Text size="sm">Submitted: 2026-03-12</Text>
          </Card>

          <Paper withBorder p="md" radius="md" bg="blue.0">
            <Text size="sm" fw={500} c="blue.9">Need another certificate?</Text>
            <Text size="xs" c="blue.7" mb="md">You can submit a new request if your previous one is completed or if you need a different type.</Text>
            <Button size="compact-sm" variant="filled" color="blue">New Request</Button>
          </Paper>
        </Stack>
      </Group>
    </Stack>
  );
}
