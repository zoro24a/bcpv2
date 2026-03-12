import { Button, Modal, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDownload, IconEye } from '@tabler/icons-react';
import { CertificatePreview } from '../components/CertificatePreview';
import { useCertificatePDF } from '../hooks/useCertificatePDF';

interface CertificateIssueModalProps {
  data: any;
  onIssue: () => void;
}

export function CertificateIssueModal({ data, onIssue }: CertificateIssueModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const { certificateRef, downloadPDF } = useCertificatePDF();

  const handleIssue = () => {
    onIssue();
    close();
  };

  return (
    <>
      <Button variant="light" leftSection={<IconEye size={16} />} onClick={open}>
        Preview & Issue
      </Button>

      <Modal opened={opened} onClose={close} title="Certificate Preview" size="xl">
        <Stack align="center">
          <div className="overflow-auto max-h-[600px] border border-slate-200 rounded">
            <CertificatePreview 
              ref={certificateRef}
              studentName={data.studentName}
              rollNumber={data.rollNumber}
              department={data.department}
              batch={data.batch}
              certNumber="ACE/BC/2026/XXXX"
              issueDate={new Date().toLocaleDateString()}
              reason={data.reason}
            />
          </div>
          
          <Group justify="flex-end" className="w-full mt-4">
            <Button variant="outline" onClick={close}>Cancel</Button>
            <Button 
              leftSection={<IconDownload size={16} />} 
              onClick={() => downloadPDF(`Certificate_${data.rollNumber}.pdf`)}
            >
              Download PDF
            </Button>
            <Button color="blue" onClick={handleIssue}>Confirm Issue</Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
