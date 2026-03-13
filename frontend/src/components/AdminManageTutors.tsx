import { useState } from 'react';
import { 
  Users2, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Mail, 
  Phone,
  Building2,
  MoreVertical,
  Download,
  Upload,
  FileSpreadsheet, 
  History, 
  GraduationCap, 
  Filter, 
  CheckCircle2,
  ChevronRight
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function AdminManageTutors() {
  const [tutors] = useState([
    { id: 1, name: "Dr. Robert Fox", department: "CSE", batch: "2020-2024", semester: "8", year: "2024", email: "robert.f@univ.edu", phone: "+91 99887 76601" },
    { id: 2, name: "Prof. Jane Cooper", department: "ECE", batch: "2021-2025", semester: "6", year: "2024", email: "jane.c@univ.edu", phone: "+91 88776 65502" },
    { id: 3, name: "Dr. Albert Flores", department: "MECH", batch: "2022-2026", semester: "4", year: "2024", email: "albert.f@univ.edu", phone: "+91 77665 54403" },
    { id: 4, name: "Prof. Bessie Humphrey", department: "CIVIL", batch: "2023-2027", semester: "2", year: "2024", email: "bessie.h@univ.edu", phone: "+91 66554 43304" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-xl">
              <Users2 size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Faculty Registry</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm italic uppercase tracking-wider opacity-70">Tutor Management & Onboarding Hub</p>
           </div>
        </div>

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 font-black text-[10px] uppercase tracking-widest gap-3 shadow-md active:scale-95 transition-all">
                <Upload size={16} /> Bulk Registry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-[2.5rem] border-slate-200 dark:border-slate-800 p-0 overflow-hidden shadow-3xl">
              <div className="bg-slate-900 p-10 text-white relative">
                 <div className="absolute top-0 right-0 p-10 opacity-10">
                    <FileSpreadsheet size={100} />
                 </div>
                 <DialogTitle className="text-2xl font-black uppercase tracking-tighter mb-2">Data Synchronizer</DialogTitle>
                 <DialogDescription className="text-slate-400 font-bold uppercase text-[10px] tracking-widest leading-none">Mass faculty deployment via Excel/CSV</DialogDescription>
              </div>
              <div className="p-10 space-y-8 bg-white dark:bg-slate-900">
                 <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-900/20 flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-all">
                    <div className="flex items-center gap-4">
                       <Download className="text-blue-600 h-6 w-6" />
                       <div className="text-left">
                          <p className="text-sm font-black text-blue-900 dark:text-blue-300 uppercase tracking-tight">Standard Template</p>
                          <p className="text-[10px] font-bold text-blue-600/70 uppercase">Download necessary schema</p>
                       </div>
                    </div>
                    <ChevronRight size={18} className="text-blue-300 group-hover:text-blue-600 transition-colors" />
                 </div>
                 
                 <div className="space-y-4">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Upload Data Stream</Label>
                    <div className="border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl p-10 text-center group hover:border-blue-200 dark:hover:border-blue-900/30 transition-all cursor-pointer">
                       <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-300 group-hover:text-blue-500 transition-colors">
                          <Upload size={32} />
                       </div>
                       <p className="text-sm font-extrabold text-slate-400 uppercase tracking-tighter">Drag & drop source file</p>
                       <p className="text-[10px] font-bold text-slate-300 mt-2">XLSX, CSV, OR ODS (Max 10MB)</p>
                       <Input type="file" className="hidden" />
                    </div>
                 </div>
                 <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-sm tracking-widest shadow-2xl rounded-2xl transition-all active:scale-95">Initiate Bulk Process</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                <Plus className="mr-3 h-4 w-4" /> Onboard Staff
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] rounded-[2.5rem] border-slate-200 dark:border-slate-800 p-0 overflow-hidden shadow-3xl">
              <div className="bg-blue-700 p-10 text-white relative">
                 <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Plus size={100} />
                 </div>
                 <DialogTitle className="text-3xl font-black uppercase tracking-tighter mb-2">Faculty Onboarding</DialogTitle>
                 <DialogDescription className="text-blue-200 font-bold uppercase text-[10px] tracking-widest leading-none">Register individual tutor credentials</DialogDescription>
              </div>
              <div className="p-10 space-y-8 bg-white dark:bg-slate-900 border-t-4 border-blue-700">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</Label>
                    <Input placeholder="Tutor First Name" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</Label>
                    <Input placeholder="Tutor Last Name" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                  </div>
                  <div className="space-y-2 col-span-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Academic Department</Label>
                     <Select>
                        <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold">
                           <SelectValue placeholder="Assign to Department" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800 shadow-2xl">
                           <SelectItem value="cse">CSE</SelectItem>
                           <SelectItem value="ece">ECE</SelectItem>
                           <SelectItem value="mech">MECH</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Institutional Email</Label>
                    <Input type="email" placeholder="faculty@university.edu" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Access</Label>
                    <Input placeholder="+91 00000 00000" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Initial Terminal Password</Label>
                    <Input type="password" placeholder="••••••••" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full h-14 bg-blue-700 hover:bg-blue-800 text-white font-black uppercase text-sm tracking-widest shadow-2xl rounded-2xl transition-all active:scale-95">Complete Deployment</Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative w-full lg:w-[450px] group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 focus-within:text-blue-500 transition-colors" />
              <Input placeholder="Global search across all faculty rosters..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-sm tracking-tight shadow-sm rounded-2xl focus:ring-blue-600" />
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 font-black text-[10px] uppercase tracking-widest gap-3 shadow-md">
                <Filter size={16} /> Registry Filtering
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Tutor Identity &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Department &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Active Batch Slot</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Contact Details</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Management</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tutors.map((tutor) => (
                  <TableRow key={tutor.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all border-slate-100 dark:border-slate-800/60 h-28">
                    <TableCell className="pl-10">
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 flex items-center justify-center font-black text-lg text-blue-600 shadow-xl shadow-blue-100 dark:shadow-none transform transition-transform group-hover:scale-110">
                             {tutor.name.split(' ').pop()?.charAt(0)}
                          </div>
                          <div>
                             <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-base leading-none mb-2">{tutor.name}</p>
                             <div className="flex items-center gap-2">
                                <Badge className="bg-emerald-500 text-white font-black text-[8px] uppercase tracking-widest border-none px-2 h-5">Verified</Badge>
                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{tutor.year} Cycle</span>
                             </div>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-3">
                          <Building2 size={16} className="text-slate-300" />
                          <span className="font-black text-xs text-slate-700 dark:text-slate-300 uppercase tracking-tighter">{tutor.department}</span>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-tighter">
                             <GraduationCap size={14} className="text-blue-500" /> {tutor.batch}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                             <History size={12} className="text-slate-300" /> Semester {tutor.semester}
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="space-y-1.5">
                          <p className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors cursor-pointer group/mail">
                             <Mail size={14} className="text-slate-300 group-hover/mail:text-blue-400" /> {tutor.email}
                          </p>
                          <p className="flex items-center gap-3 text-[11px] font-bold text-slate-500 dark:text-slate-500">
                             <Phone size={14} className="text-slate-300" /> {tutor.phone}
                          </p>
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm">
                             <Edit3 size={16} className="text-slate-600 dark:text-slate-400" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                                <MoreVertical size={18} className="text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-60 p-2 rounded-2xl border-slate-200 dark:border-slate-800 shadow-3xl bg-white dark:bg-slate-950 backdrop-blur-xl">
                               <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Internal Logistics</DropdownMenuLabel>
                               <DropdownMenuSeparator className="mx-2 bg-slate-100 dark:bg-slate-800" />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-blue-50 dark:focus:bg-blue-900/20 group cursor-pointer transition-colors">
                                  <GraduationCap size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                  <span className="text-xs font-bold">Reschedule Batch</span>
                               </DropdownMenuItem>
                               <DropdownMenuSeparator className="mx-2 bg-slate-100 dark:bg-slate-800" />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-red-50 dark:focus:bg-red-900/20 text-red-600 dark:text-red-400 group cursor-pointer transition-colors">
                                  <Trash2 size={16} className="group-hover:translate-x-1 transition-transform" />
                                  <span className="text-xs font-black uppercase tracking-tight">Deactivate Registry</span>
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
          <div className="p-8 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Showing <span className="text-slate-900 dark:text-white">1–{tutors.length}</span> of <span className="text-slate-900 dark:text-white">{tutors.length}</span> records
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-2xl border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest disabled:opacity-50">Previous</Button>
              <div className="flex items-center gap-1">
                <Button size="sm" className="h-10 w-10 rounded-2xl bg-blue-600 text-white font-black text-[10px]">1</Button>
              </div>
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-2xl border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest disabled:opacity-50">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Registry Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-6">
         <div className="p-10 rounded-[2.5rem] bg-slate-900 text-slate-400 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/5 transition-opacity group-hover:opacity-10 opacity-0"></div>
            <div className="relative z-10 flex items-start gap-8">
               <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl transition-transform group-hover:-rotate-6">
                  <Download size={32} />
               </div>
               <div>
                  <h6 className="text-white font-black uppercase text-base tracking-widest mb-2 leading-none">Schema Compliance</h6>
                  <p className="text-[11px] font-bold leading-relaxed opacity-70 italic max-w-sm">
                     Tutor data streams must strictly follow the institution's schema for Batch, Semester, and Academic Year synchronization. Unrecognized departments will trigger a registry fault.
                  </p>
               </div>
            </div>
         </div>
         <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-lg flex flex-col justify-center gap-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-500 rounded-2xl flex items-center justify-center shadow-inner">
                     <CheckCircle2 size={24} />
                  </div>
                  <div>
                     <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">Authentication State</p>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5">All credentials secured</p>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter leading-none">100%</p>
                  <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1.5">Sync Success</p>
               </div>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-emerald-500 rounded-full w-full"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
