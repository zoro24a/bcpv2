import { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Layout,
  Code,
  Info,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  AlertCircle
} from 'lucide-react';
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
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AdminTemplateManagement() {
  const [templates] = useState([
    { id: 'T1', name: 'Standard Bonafide', type: 'Academic', status: 'Active', updated: '2024-03-10' },
    { id: 'T2', name: 'Sports Bonafide', type: 'Extracurricular', status: 'Active', updated: '2024-03-12' },
    { id: 'T3', name: 'Project Completion', type: 'Academic', status: 'Draft', updated: '2024-03-05' },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const placeholders = [
    { tag: '{studentName}', desc: 'Full name of the student' },
    { tag: '{studentId}', desc: 'Unique Registration Number' },
    { tag: '{department}', desc: 'Academic department' },
    { tag: '{batch}', desc: 'Academic batch year' },
    { tag: '{purpose}', desc: 'Reason for request' },
    { tag: '{date}', desc: 'Current issue date' },
    { tag: '{currentSemester}', desc: 'Current active semester' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-xl">
              <Layout size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Template Schema</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic uppercase tracking-wider opacity-70">Certificate Metadata Controller</p>
           </div>
        </div>
        
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
               <Plus size={16} className="mr-2" /> Design New Schema
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 shadow-3xl p-0 overflow-hidden bg-white dark:bg-slate-950">
            <DialogHeader className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                  <Code size={24} />
                </div>
                <div>
                  <DialogTitle className="text-xl font-black uppercase tracking-tighter">Initialize Template</DialogTitle>
                  <DialogDescription className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Define structural HTML and dynamic logic</DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <div className="p-8 space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Template Denomination</label>
                <Input placeholder="e.g., Undergraduate Bonafide v2.1" className="h-14 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl font-bold px-6 focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between pl-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">HTML Schema Content</label>
                  <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-blue-200 text-blue-600 py-1 px-2 rounded-lg">Rich Text Logic</Badge>
                </div>
                <Textarea 
                  placeholder="<div style='text-align: center'><h1>Certificate of Bonafide</h1><p>This is to certify that {studentName}...</p></div>" 
                  className="min-h-[300px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl font-mono text-sm p-6 focus:ring-2 focus:ring-blue-600 resize-none transition-all" 
                />
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <Info size={16} className="text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Dynamic Variable Matrix</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {placeholders.map((p, i) => (
                    <div key={i} className="group cursor-help relative">
                      <code className="text-[11px] font-black text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded-md block text-center truncate group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {p.tag}
                      </code>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 rounded-xl bg-slate-900 text-white text-[9px] font-bold uppercase tracking-wider leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl z-50">
                        {p.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[9px] font-bold text-slate-400 mt-4 italic">
                  * Note: Student data will replace placeholders automatically during certificate generation protocols.
                </p>
              </div>
            </div>
            <DialogFooter className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
              <Button variant="ghost" onClick={() => setIsAddOpen(false)} className="h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                Terminate Sync
              </Button>
              <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                Validate and Deploy
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative w-full lg:w-[450px] group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <Input placeholder="Search local schema index..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-sm tracking-tight shadow-sm rounded-2xl focus:ring-blue-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Template Descriptor</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Class Type</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Last Modified</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">System Ops</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.map((template) => (
                  <TableRow key={template.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all border-slate-100 dark:border-slate-800 h-24">
                    <TableCell className="pl-10">
                       <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center font-black text-lg text-blue-600 shadow-md group-hover:scale-105 transition-transform">
                             <FileText size={20} />
                          </div>
                          <div>
                             <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm leading-none mb-2">{template.name}</p>
                             <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest tabular-nums">{template.id}</span>
                                <div className="h-3 w-px bg-slate-200 dark:bg-slate-800 mx-1" />
                                <Badge className={template.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-200 font-black text-[8px] uppercase px-2 h-5' : 'bg-slate-100 text-slate-500 border-slate-200 font-black text-[8px] uppercase px-2 h-5'} variant="outline">
                                   {template.status}
                                </Badge>
                             </div>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight italic">{template.type}</span>
                    </TableCell>
                    <TableCell>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{template.updated}</span>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-3">
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm text-slate-600 dark:text-slate-400">
                             <Edit3 size={16} />
                          </Button>
                          <DropdownMenu>
                             <DropdownMenuTrigger asChild>
                               <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                                 <MoreVertical size={18} className="text-slate-400" />
                               </Button>
                             </DropdownMenuTrigger>
                             <DropdownMenuContent align="end" className="w-60 p-2 rounded-2xl border-slate-200 dark:border-slate-800 shadow-3xl bg-white dark:bg-slate-950 backdrop-blur-xl">
                                <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator className="mx-2 bg-slate-100 dark:bg-slate-800" />
                                <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-blue-50 dark:focus:bg-blue-900/20 group cursor-pointer">
                                   <Plus size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                   <span className="text-xs font-bold">Clone Matrix</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="mx-2 bg-slate-100 dark:bg-slate-800" />
                                <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-red-50 dark:focus:bg-red-900/20 text-red-600 dark:text-red-400 group cursor-pointer">
                                   <Trash2 size={16} className="group-hover:translate-x-1 transition-transform" />
                                   <span className="text-xs font-black uppercase tracking-tight">Erase Schema</span>
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
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Showing 1–{templates.length} of {templates.length} Logical Units</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 disabled:opacity-30">
                  <ChevronLeft size={18} />
                </Button>
                <div className="flex items-center gap-1">
                  <Button className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black text-xs shadow-lg">1</Button>
                </div>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 disabled:opacity-30" disabled>
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="p-10 rounded-[2.5rem] bg-slate-900 text-slate-400 border border-slate-800 shadow-3xl flex flex-col sm:flex-row items-center gap-10 group overflow-hidden relative">
         <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-all" />
         <div className="p-6 rounded-2xl bg-amber-500 text-white shadow-2xl relative z-10 transition-transform group-hover:-rotate-12">
            <AlertCircle size={32} />
         </div>
         <div className="flex-1 text-center sm:text-left relative z-10">
            <h6 className="text-white font-black uppercase text-base tracking-[0.2em] mb-2 leading-none">Security Override Warning</h6>
            <p className="text-[11px] font-bold leading-relaxed opacity-70 italic max-w-xl">
               Modifying existing template schemas may affect pending generation requests. Ensure all structural changes are validated against University branding guidelines before deployment.
            </p>
         </div>
         <Button variant="outline" className="h-12 px-8 border-slate-700 text-white hover:bg-white hover:text-slate-900 font-black text-[10px] uppercase tracking-widest relative z-10 rounded-xl transition-all shadow-xl active:scale-95">
            Validation Protocol
         </Button>
      </div>
    </div>
  );
}
