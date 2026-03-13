export interface StudentData {
  studentName: string;
  studentId: string;
  department: string;
  batch: string;
  purpose: string;
  date: string;
  currentSemester: string;
}

export const generateCertificateNumber = (index: number): string => {
  const year = new Date().getFullYear();
  const sequence = String(index).padStart(4, '0');
  return `ACE/BCP/${year}/${sequence}`;
};

export const renderTemplate = (template: string, data: StudentData): string => {
  let rendered = template;
  const placeholders: (keyof StudentData)[] = [
    'studentName',
    'studentId',
    'department',
    'batch',
    'purpose',
    'date',
    'currentSemester'
  ];

  placeholders.forEach((key) => {
    const regex = new RegExp(`{${key}}`, 'g');
    rendered = rendered.replace(regex, data[key]);
  });

  return rendered;
};
