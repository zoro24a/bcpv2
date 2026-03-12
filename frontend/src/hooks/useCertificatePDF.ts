import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const useCertificatePDF = () => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async (fileName: string = 'certificate.pdf') => {
    const element = certificateRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(fileName);
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  return { certificateRef, downloadPDF };
};
