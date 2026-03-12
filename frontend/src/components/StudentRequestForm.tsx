import { 
  Textarea, 
  Select, 
  Button, 
  Title, 
  Paper, 
  Stack,
  Text
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconSend } from '@tabler/icons-react';

export function StudentRequestForm() {
  const form = useForm({
    initialValues: {
      type: '',
      reason: '',
    },
    validate: {
      type: (value: string) => (value ? null : 'Select certificate type'),
      reason: (value: string) => (value.length < 10 ? 'Reason must be at least 10 characters' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log('Submitting:', values);
    notifications.show({
      title: 'Request Submitted',
      message: 'Your certificate request has been sent to your Tutor for approval.',
      color: 'blue',
    });
    form.reset();
  };

  return (
    <Paper withBorder p="xl" radius="md" className="max-w-2xl mx-auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Title order={3}>Apply for Bonafide Certificate</Title>
          <Text size="sm" c="dimmed">
            Fill in the details below to request a bonafide certificate. 
            Once submitted, you can track the approval status on your dashboard.
          </Text>

          <Select
            label="Certificate Type"
            placeholder="Choose type"
            data={[
              { value: 'scholarship', label: 'For Scholarship' },
              { value: 'general', label: 'For General Purpose' },
              { value: 'internship', label: 'For Internship/In-plant Training' },
              { value: 'passport', label: 'For Passport/Visa' },
            ]}
            {...form.getInputProps('type')}
            required
          />

          <Textarea
            label="Reason for Request"
            placeholder="Briefly explain why you need this certificate"
            minRows={4}
            {...form.getInputProps('reason')}
            required
          />

          <Button 
            type="submit" 
            fullWidth 
            size="md" 
            mt="md"
            leftSection={<IconSend size={18} />}
          >
            Submit Request
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
