import { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { notifications } from '@mantine/notifications';
import { 
  Search, 
  Filter, 
  Eye, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  FileText,
  Building2,
  GraduationCap,
  History,
  MoreVertical,
  ChevronLeft,
  Layout,
  Code,
  Info,
  ShieldCheck,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CertificatePreview } from './CertificatePreview';
import type { 
  renderTemplate, 
  generateCertificateNumber 
} from '@/lib/certificateGenerator';

export function OfficeAllRequests() {
  const [requests, setRequests] = useState([
    { id: 'REQ001', name: "Alice Thompson", regNo: "REG1001", dept: "CSE", course: "B.E Computer Science", date: "2024-03-10", status: "Approved", batch: "2020-2024", purpose: "Internship Protocol", semester: "7th" },
    { id: 'REQ002', name: "Bob Smith", regNo: "REG1002", dept: "ECE", course: "B.E Electronics", date: "2024-03-12", status: "Approved", batch: "2021-2025", purpose: "Industrial Visit", semester: "5th" },
    { id: 'REQ003', name: "Charlie Davis", regNo: "REG1003", dept: "MECH", course: "B.E Mechanical", date: "2024-03-13", status: "Approved", batch: "2020-2024", purpose: "Passport Application", semester: "8th" },
  ]);

  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isGenerateOpen, setIsGenerateOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('T1');
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const templates = {
    T1: { 
      name: 'Standard Bonafide v2.1', 
      html: `This is to certify that <strong>{studentName}</strong>, Register Number <strong>{studentId}</strong>, is a bonafide student of the <strong>{department}</strong> during the academic year <strong>{batch}</strong>. This certificate is issued for <strong>{purpose}</strong>.`
    },
    T2: { 
      name: 'Industrial Visit Protocol', 
      html: `This certificate confirms that <strong>{studentName}</strong> ({studentId}) of <strong>{department}</strong>, currently in <strong>{currentSemester}</strong> semester, is permitted to attend the Industrial Visit as requested for <strong>{purpose}</strong>.`
    },
    T3: { 
      name: 'Academic Achievement Card', 
      html: `Recognition of academic excellence for <strong>{studentName}</strong> belonging to the <strong>{department}</strong> department, batch <strong>{batch}</strong>.`
    }
  };

  const timelineSteps = [
    { label: 'Student Request', date: '2024-03-05 10:30 AM', status: 'completed' },
    { label: 'Tutor Approved', date: '2024-03-06 02:15 PM', status: 'completed' },
    { label: 'HOD Approved', date: '2024-03-08 11:00 AM', status: 'completed' },
    { label: 'Principal Approved', date: '2024-03-10 03:45 PM', status: 'completed' },
    { label: 'Certificate Issued', date: 'Awaiting Action', status: 'pending' },
  ];

  const handleViewDetails = (request: any) => {
    setSelectedRequest(request);
    setIsDetailsOpen(true);
  };

  const handleGenerateAndArchive = async () => {
    if (!selectedRequest) return;
    setIsGenerating(true);

    try {
      // Simulate unique certificate number generation
      const certNo = generateCertificateNumber(Math.floor(Math.random() * 1000) + 1);
      
      // Wait for DOM to render the hidden preview
      await new Promise(resolve => setTimeout(resolve, 500));

      if (!certificateRef.current) throw new Error('Preview element not found');

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      
      const fileName = `bonafide_${selectedRequest.regNo}.pdf`;
      pdf.save(fileName);

      // Move to issued (update local state)
      setRequests(prev => prev.filter(r => r.id !== selectedRequest.id));
      
      notifications.show({
        title: 'Document Generated',
        message: `Certificate ${certNo} has been issued for ${selectedRequest.name}.`,
        color: 'cyan',
      });

      setIsGenerateOpen(false);
      setSelectedRequest(null);
    } catch (error) {
      console.error('Generation failed:', error);
      notifications.show({
        title: 'Generation Failed',
        message: 'A system error occurred during PDF synthesis.',
        color: 'red',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateCertificate = () => {
    setIsDetailsOpen(false);
    setIsGenerateOpen(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-cyan-600 text-white flex items-center justify-center rounded-2xl shadow-xl shadow-cyan-100 dark:shadow-none">
              <History size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Aproved Queue</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic uppercase tracking-wider opacity-70">Requests Awaiting Generation</p>
           </div>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            <div className="relative w-full xl:w-[400px] group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
              <Input placeholder="Filter by Name, ID, or Protocol..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-sm tracking-tight shadow-sm rounded-2xl focus:ring-cyan-600" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
               <Select>
                  <SelectTrigger className="h-14 w-48 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-xs uppercase tracking-tight">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="all">All Units</SelectItem>
                    <SelectItem value="cse">CSE Unit</SelectItem>
                    <SelectItem value="ece">ECE Unit</SelectItem>
                  </SelectContent>
               </Select>
               <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input type="date" className="h-14 pl-12 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-xs uppercase tracking-tight w-48" />
               </div>
               <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 font-black text-[10px] uppercase tracking-widest shadow-md">
                  <Filter size={16} className="mr-3" /> Advanced
               </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10 cursor-pointer hover:text-cyan-500 transition-colors">Identity Registry &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-6">Academic Unit</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Validated Date</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Sync Status</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Operations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id} className="group hover:bg-cyan-50/30 dark:hover:bg-cyan-900/10 transition-all border-slate-100 dark:border-slate-800 h-24">
                    <TableCell className="pl-10">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-xs text-slate-600 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                             {request.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm leading-none mb-1">{request.name}</p>
                            <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest tabular-nums">{request.regNo}</span>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell className="pl-6">
                       <div className="flex items-center gap-2">
                          <Building2 size={14} className="text-cyan-500" />
                          <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-tighter">{request.dept}</span>
                          <span className="text-[9px] text-slate-400 font-bold ml-1 opacity-50">({request.course})</span>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] tabular-nums">
                          <Clock size={12} /> {request.date}
                       </div>
                    </TableCell>
                    <TableCell>
                       <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-100 font-black text-[8px] uppercase px-2 h-5 tracking-widest" variant="outline">
                          Principal Approved
                       </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-3 group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button 
                            onClick={() => handleViewDetails(request)}
                            className="h-10 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
                          >
                             Audit Details
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-slate-100 rounded-xl transition-colors">
                                <MoreVertical size={18} className="text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl border-slate-200 dark:border-slate-800 shadow-3xl bg-white dark:bg-slate-950">
                               <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Protocol Actions</DropdownMenuLabel>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-cyan-50 group cursor-pointer">
                                  <FileText size={16} className="text-slate-400 group-hover:text-cyan-600" />
                                  <span className="text-xs font-bold">Initiate Generation</span>
                               </DropdownMenuItem>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-red-50 text-red-600 group cursor-pointer transition-colors">
                                  <ChevronLeft size={16} className="rotate-180" />
                                  <span className="text-xs font-black uppercase">Rollback Audit</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Showing 1–{requests.length} of 142 Pending Synchronizations</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400">
                  <ChevronLeft size={18} />
                </Button>
                <div className="flex items-center gap-1">
                  <Button className="h-10 w-10 rounded-xl bg-cyan-600 text-white font-black text-xs shadow-lg">1</Button>
                  <Button variant="ghost" className="h-10 w-10 rounded-xl font-bold text-xs text-slate-400">2</Button>
                </div>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400">
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Details Modal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-3xl p-0 overflow-hidden bg-white dark:bg-slate-950">
          <DialogHeader className="p-10 bg-slate-900 text-white relative">
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <ShieldCheck size={120} />
            </div>
            <div className="flex items-center gap-6 relative z-10">
               <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-2xl">
                  <Eye size={32} />
               </div>
               <div>
                  <DialogTitle className="text-2xl font-black uppercase tracking-tighter mb-1">Identity Audit Console</DialogTitle>
                  <DialogDescription className="text-cyan-400 font-bold uppercase text-[10px] tracking-[0.2em] leading-none opacity-80">Full administrative verification of request protocol</DialogDescription>
               </div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-10 space-y-12 bg-white dark:bg-slate-950">
            {/* Student Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
               {[
                  { label: "Formal Name", value: selectedRequest?.name, icon: User },
                  { label: "Register Unit", value: selectedRequest?.regNo, icon: GraduationCap },
                  { label: "Academic Dept", value: selectedRequest?.dept, icon: Building2 },
                  { label: "Batch Cycle", value: "2020-2024", icon: Clock },
                  { label: "Purpose", value: "Internship Protocol", icon: FileText },
                  { label: "Registry Date", value: selectedRequest?.date, icon: Calendar },
               ].map((item, i) => (
                  <div key={i} className="space-y-2 group">
                     <div className="flex items-center gap-2 text-slate-400 group-hover:text-cyan-500 transition-colors">
                        <item.icon size={12} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                     </div>
                     <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.value}</p>
                  </div>
               ))}
            </div>

            {/* Timeline UI */}
            <div className="space-y-10">
               <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <Layout size={18} className="text-cyan-600" />
                  <h4 className="text-sm font-black uppercase tracking-tighter">Chain of Custody Timeline</h4>
               </div>
               <div className="relative pl-8 space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-1 before:bg-slate-100 dark:before:bg-slate-800 before:rounded-full">
                  {timelineSteps.map((step, i) => (
                     <div key={i} className="relative">
                        <div className={cn(
                           "absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 z-10 flex items-center justify-center transition-all shadow-md",
                           step.status === 'completed' ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-800 scale-75"
                        )}>
                           {step.status === 'completed' && <CheckCircle2 size={10} className="text-white" />}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                           <div>
                              <p className={cn("text-xs font-black uppercase tracking-tight", step.status === 'completed' ? "text-slate-900 dark:text-white" : "text-slate-400 italic")}>
                                 {step.label}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-70">Audit Result: VALID</p>
                           </div>
                           <span className="text-[9px] font-black text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800 tabular-nums uppercase">{step.date}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </div>

          <DialogFooter className="p-10 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
             <Button variant="ghost" onClick={() => setIsDetailsOpen(false)} className="h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-200">
                Terminate Audit
             </Button>
             <Button onClick={handleGenerateCertificate} className="h-12 px-10 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                Initiate Generation Protocol
             </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Generation Modal */}
      <Dialog open={isGenerateOpen} onOpenChange={setIsGenerateOpen}>
        <DialogContent className="sm:max-w-[700px] rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-3xl p-0 overflow-hidden bg-white dark:bg-slate-950">
           <DialogHeader className="p-10 bg-cyan-600 text-white relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                 <Code size={120} />
              </div>
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xl">
                    <FileText size={32} />
                 </div>
                 <div>
                    <DialogTitle className="text-2xl font-black uppercase tracking-tighter mb-1 font-mono tracking-[-0.05em]">Certificate_Generator.exe</DialogTitle>
                    <DialogDescription className="text-white font-bold uppercase text-[10px] tracking-[0.2em] leading-none opacity-80">Synthesize dynamic document based on approved schema</DialogDescription>
                 </div>
              </div>
           </DialogHeader>

           <div className="p-10 space-y-10">
              <div className="space-y-4">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Master Template Selection</label>
                 <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger className="h-16 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-black text-slate-700 dark:text-slate-200 px-6 focus:ring-cyan-600 transition-all">
                       <SelectValue placeholder="Select Validated Schema" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800 shadow-2xl p-2">
                       <SelectItem value="T1" className="rounded-xl py-3 focus:bg-cyan-50">Standard Bonafide v2.1</SelectItem>
                       <SelectItem value="T2" className="rounded-xl py-3 focus:bg-cyan-50">Industrial Visit Protocol</SelectItem>
                       <SelectItem value="T3" className="rounded-xl py-3 focus:bg-cyan-50">Academic Achievement Card</SelectItem>
                    </SelectContent>
                 </Select>
              </div>

              {selectedTemplate && (
                 <div className="animate-in slide-in-from-bottom-5 duration-500 overflow-hidden border-2 border-slate-100 dark:border-slate-800 rounded-3xl group relative">
                    <div className="p-10 bg-slate-50/50 dark:bg-slate-900/50 text-center min-h-[200px] flex flex-col items-center justify-center gap-4">
                       <Layout size={40} className="text-slate-300 group-hover:text-cyan-500 transition-colors" />
                       <div className="space-y-1">
                          <p className="text-xs font-black uppercase tracking-tighter text-slate-900 dark:text-white">Live Schema Preview</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Selected: {selectedTemplate}</p>
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Button variant="outline" className="h-10 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest bg-white dark:bg-slate-900 shadow-xl border-cyan-500 text-cyan-600">
                          Inspect Template Code
                       </Button>
                    </div>
                 </div>
              )}

              <div className="p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-100 dark:border-cyan-900/50 flex items-start gap-4">
                 <Info size={18} className="text-cyan-600 mt-1 shrink-0" />
                 <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    Generation protocol will automatically inject student identity matrix into the selected HTML schema. Certificates are immutable once generated.
                 </p>
              </div>
           </div>

           <DialogFooter className="p-10 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
               <Button variant="ghost" onClick={() => setIsGenerateOpen(false)} className="h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500">
                  Abort Sync
               </Button>
               <div className="flex items-center gap-3">
                  <Button 
                    disabled={isGenerating || !selectedTemplate}
                    className="h-12 px-10 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all disabled:opacity-50"
                    onClick={handleGenerateAndArchive}
                  >
                    {isGenerating ? 'Synthesizing...' : 'Generate and Archive'}
                  </Button>
               </div>
            </DialogFooter>
         </DialogContent>
      </Dialog>

      {/* Hidden container for PDF generation */}
      {selectedRequest && isGenerateOpen && (
        <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <CertificatePreview
            ref={certificateRef}
            certNumber={generateCertificateNumber(1)}
            templateHtml={renderTemplate(templates[selectedTemplate as keyof typeof templates].html, {
              studentName: selectedRequest.name,
              studentId: selectedRequest.regNo,
              department: selectedRequest.dept,
              batch: selectedRequest.batch,
              purpose: selectedRequest.purpose,
              date: new Date().toLocaleDateString(),
              currentSemester: selectedRequest.semester || 'N/A'
            })}
            data={{
              studentName: selectedRequest.name,
              studentId: selectedRequest.regNo,
              department: selectedRequest.dept,
              batch: selectedRequest.batch,
              purpose: selectedRequest.purpose,
              date: new Date().toLocaleDateString(),
              currentSemester: selectedRequest.semester || 'N/A'
            }}
          />
        </div>
      )}
    </div>
  );
}
