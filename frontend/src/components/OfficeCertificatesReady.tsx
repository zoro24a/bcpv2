import { useState } from 'react';
import { 
  Search, 
  Download, 
  CheckCircle,
  Eye,
  FileText,
  Clock,
  Building2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  RotateCcw,
  ShieldCheck,
  Globe
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
import { notifications } from '@mantine/notifications';

export function OfficeCertificatesReady() {
  const [certificates, setCertificates] = useState([
    { id: 'CERT101', regNo: 'REG1001', name: 'Alice Thompson', dept: 'CSE', date: '2024-03-10', type: 'Standard Bonafide' },
    { id: 'CERT102', regNo: 'REG1002', name: 'Bob Smith', dept: 'ECE', date: '2024-03-11', type: 'Industrial Visit' },
    { id: 'CERT103', regNo: 'REG1005', name: 'Emily White', dept: 'MECH', date: '2024-03-12', type: 'Standard Bonafide' },
  ]);

  const handleMarkAsIssued = (id: string) => {
    setCertificates(prev => prev.filter(c => c.id !== id));
    notifications.show({
      title: 'Success',
      message: 'Certificate marked as issued and archived.',
      color: 'green',
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center rounded-2xl shadow-xl shadow-emerald-100 dark:shadow-none">
              <CheckCircle size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Ready Core</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic uppercase tracking-wider opacity-70">Generated Protocol Queue</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-11 px-5 rounded-xl border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
              Bulk Export (PDF)
           </Button>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search generated credentials..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-none font-bold text-sm shadow-sm rounded-2xl focus:ring-emerald-600" />
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-emerald-50 dark:bg-emerald-900/10 px-4 py-2 rounded-xl flex items-center gap-2 border border-emerald-100 dark:border-emerald-900/30">
                  <TrendingUp size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">High Priority Sync</span>
               </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Identifier</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Identity Matrix</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Unit</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Gen Date</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Schema</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Protocols</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.map((cert) => (
                  <TableRow key={cert.id} className="group hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-all border-slate-100 dark:border-slate-800 h-24">
                    <TableCell className="pl-10">
                       <span className="text-xs font-black text-cyan-600 dark:text-cyan-400 tabular-nums uppercase tracking-widest">{cert.id}</span>
                    </TableCell>
                    <TableCell>
                       <div>
                         <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm leading-none mb-1">{cert.name}</p>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest tabular-nums">{cert.regNo}</span>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2">
                          <Building2 size={13} className="text-slate-400" />
                          <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-tighter">{cert.dept}</span>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest tabular-nums">
                          <Clock size={12} /> {cert.date}
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2">
                          <FileText size={14} className="text-emerald-500" />
                          <span className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-tight">{cert.type}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-cyan-600 transition-all">
                             <Eye size={18} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-emerald-600 transition-all">
                             <Download size={18} />
                          </Button>
                          <Button 
                            onClick={() => handleMarkAsIssued(cert.id)}
                            className="h-10 px-5 ml-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
                          >
                             Mark Issued
                          </Button>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                   <RotateCcw size={18} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">Security Registry</p>
                   <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 opacity-70">Last Sync: 2 mins ago</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Registry Stable</span>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
                <div className="flex items-center gap-3">
                   <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400">
                     <ChevronLeft size={18} />
                   </Button>
                   <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400">
                     <ChevronRight size={18} />
                   </Button>
                </div>
             </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
         {[
            { label: 'Integrity Check', value: '100%', icon: ShieldCheck },
            { label: 'Blockchain Sync', value: 'Active', icon: Globe },
            { label: 'Batch Latency', value: '0.2s', icon: Clock },
         ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/20">
               <item.icon size={20} className="text-slate-400" />
               <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{item.label}</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white uppercase tabular-nums">{item.value}</p>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
}
