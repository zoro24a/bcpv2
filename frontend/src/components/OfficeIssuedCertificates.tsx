import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Calendar, 
  History, 
  FileCheck,
  Building2,
  ExternalLink,
  ShieldCheck,
  ArrowUpDown
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OfficeIssuedCertificates() {
  const [issued] = useState([
    { certNo: 'BCP/2024/0001', name: 'John Doe', regNo: 'REG2001', dept: 'CSE', date: '2024-03-01', type: 'Standard Bonafide' },
    { certNo: 'BCP/2024/0002', name: 'Sarah Miller', regNo: 'REG2002', dept: 'ECE', date: '2024-03-02', type: 'Industrial Visit' },
    { certNo: 'BCP/2024/0003', name: 'Michael Chen', regNo: 'REG2003', dept: 'MECH', date: '2024-03-05', type: 'Standard Bonafide' },
    { certNo: 'BCP/2024/0004', name: 'Jessica Davis', regNo: 'REG2004', dept: 'CSE', date: '2024-03-08', type: 'Bonafide' },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center rounded-2xl shadow-xl">
              <History size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Issue Archive</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic uppercase tracking-wider opacity-70">Authenticated Transaction History</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-11 px-5 rounded-xl border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
              Download Full Registry
           </Button>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            <div className="relative w-full xl:w-[400px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search certificate # or student ID..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-none font-bold text-sm shadow-sm rounded-2xl focus:ring-slate-400" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
               <Select>
                  <SelectTrigger className="h-14 w-48 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-xs uppercase tracking-tight">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="all">Global Units</SelectItem>
                    <SelectItem value="cse">CSE Division</SelectItem>
                    <SelectItem value="ece">ECE Division</SelectItem>
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
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Cert # Matrix</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Recipient Registry</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Academic Unit</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2 mt-6">Issue Timeline <ArrowUpDown size={12} /></TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Auth Status</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Operations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {issued.map((cert) => (
                  <TableRow key={cert.certNo} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/80 transition-all border-slate-100 dark:border-slate-800 h-24">
                    <TableCell className="pl-10">
                       <div className="flex items-center gap-3">
                          <FileCheck size={16} className="text-cyan-600" />
                          <span className="text-xs font-black text-slate-900 dark:text-white tabular-nums uppercase tracking-tight">{cert.certNo}</span>
                       </div>
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
                       <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest tabular-nums">{cert.date}</span>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2">
                          <ShieldCheck size={14} className="text-emerald-500" />
                          <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Authenticated</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
                             <Eye size={18} />
                          </Button>
                          <Button 
                            variant="outline"
                            className="h-10 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-black text-[10px] uppercase tracking-widest shadow-sm active:scale-95 transition-all text-slate-600 dark:text-slate-300"
                          >
                             <Download size={14} className="mr-2" /> Download Again
                          </Button>
                          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-cyan-600 transition-all">
                             <ExternalLink size={18} />
                          </Button>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
             <div className="flex items-center justify-between">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Displaying {issued.length} of 1,420 Archive Transactions</p>
                <div className="flex items-center gap-3">
                   <Button variant="outline" className="h-11 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-black text-[10px] uppercase tracking-widest text-slate-400">
                      Previous
                   </Button>
                   <Button variant="outline" className="h-11 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-black text-[10px] uppercase tracking-widest text-slate-400">
                      Next Matrix
                   </Button>
                </div>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
