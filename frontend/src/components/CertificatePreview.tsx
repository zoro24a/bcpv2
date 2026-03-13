import React from 'react';
import type { StudentData } from '@/lib/certificateGenerator';

interface CertificatePreviewProps {
  data: StudentData;
  templateHtml: string;
  certNumber: string;
}

export const CertificatePreview = React.forwardRef<HTMLDivElement, CertificatePreviewProps>(
  ({ data, templateHtml, certNumber }, ref) => {
    return (
      <div 
        ref={ref}
        className="certificate-container bg-white"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '20mm',
          margin: '0 auto',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          fontFamily: "'Times New Roman', Times, serif",
          color: '#1a1a1a',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Certificate Border */}
        <div className="absolute inset-4 border-[8px] border-double border-slate-300 pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-12 w-full">
            <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 mb-1">
              Adhiyamaan College of Engineering
            </h1>
            <p className="text-sm font-semibold text-slate-600 italic">
              (Autonomous)
            </p>
            <p className="text-sm font-bold text-slate-800">
              Dr. M.G.R Nagar, Hosur – 635 130, Tamil Nadu
            </p>
            <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto my-6 flex items-center justify-center border-2 border-slate-200">
               <span className="text-[10px] font-black text-slate-300 uppercase">College Logo</span>
            </div>
            <div className="border-b-2 border-slate-900 w-full mb-2" />
            <div className="border-b-4 border-slate-900 w-full" />
          </div>

          {/* Certificate Title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black underline decoration-2 underline-offset-8 uppercase tracking-[0.2em] text-slate-950">
              Bonafide Certificate
            </h2>
          </div>

          {/* Certificate Body */}
          <div className="text-xl leading-[2.5] text-justify px-12 space-y-8">
            <div dangerouslySetInnerHTML={{ __html: templateHtml }} />
          </div>

          {/* Footer Information */}
          <div className="mt-auto w-full pt-16 px-12">
            <div className="flex justify-between items-end">
              <div className="space-y-4">
                <p className="text-lg font-bold">
                  Date: <span className="font-normal underline decoration-dotted">{data.date}</span>
                </p>
                <div className="pt-8">
                  <p className="text-sm font-black uppercase tracking-tighter">Registry ID:</p>
                  <p className="text-lg font-black font-mono text-cyan-800">{certNumber}</p>
                </div>
              </div>
              
              <div className="text-center space-y-0">
                <div className="w-48 border-b-2 border-slate-900 mb-3 mx-auto" />
                <p className="text-xl font-black uppercase tracking-tight">Principal</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">(Authorized Signature)</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 text-center w-full">
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
               Valid across all central government & academic institutions
             </p>
          </div>
        </div>
      </div>
    );
  }
);

CertificatePreview.displayName = 'CertificatePreview';
