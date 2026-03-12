import { Title, Text, Group, Divider, Stack } from '@mantine/core';
import { forwardRef } from 'react';

interface CertificatePreviewProps {
  studentName: string;
  rollNumber: string;
  department: string;
  batch: string;
  certNumber: string;
  issueDate: string;
  reason: string;
}

export const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>((props, ref) => {
  return (
    <div ref={ref} className="p-8 bg-white border-8 border-double border-blue-900" style={{ width: '800px', height: '1100px' }}>
      <Stack align="center" gap="xl">
        <Title order={1} className="text-blue-900 uppercase tracking-widest text-4xl text-center">
          Bonafide Certificate
        </Title>
        
        <Divider size="sm" color="blue.9" className="w-full" />
        
        <Stack align="center" gap="xs" mt="xl">
          <Text size="xl" fw={500}>CERTIFICATE NO: <span className="text-blue-700">{props.certNumber}</span></Text>
          <Text size="md" c="dimmed">Date: {props.issueDate}</Text>
        </Stack>

        <Text mt={50} size="lg" ta="justify" className="leading-relaxed">
          This is to certify that <b>{props.studentName}</b> (Roll No: <b>{props.rollNumber}</b>) 
          is a bonafide student of <b>{props.department}</b> department in the 
          batch <b>{props.batch}</b>. 
          <br /><br />
          This certificate is issued for the purpose of: <b>{props.reason}</b>.
        </Text>

        <Group justify="space-between" mt={150} className="w-full px-10">
          <Stack align="center" gap={0}>
            <Divider size="sm" className="w-40" />
            <Text size="sm" fw={700}>Office Assistant</Text>
          </Stack>
          
          <Stack align="center" gap={0}>
            <Divider size="sm" className="w-40" />
            <Text size="sm" fw={700}>Principal</Text>
          </Stack>
        </Group>

        <Text mt="auto" size="xs" c="dimmed" ta="center">
          ACE College of Engineering © 2026. All rights reserved.
        </Text>
      </Stack>
    </div>
  );
});
