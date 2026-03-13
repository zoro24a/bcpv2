import { useState } from 'react';
import { 
  Building2, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Users, 
  UserSquare2,
  CalendarDays,
  MoreVertical,
  ChevronRight,
  Filter,
  ShieldCheck
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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function AdminDepartmentManagement() {
  const [departments] = useState([
    { id: 1, name: "Computer Science and Engineering", hod: "Dr. Winston Henderson", estYear: "1998", students: "1240", tutors: "45" },
    { id: 2, name: "Electronics and Communication", hod: "Prof. Sarah Miller", estYear: "2000", students: "980", tutors: "38" },
    { id: 3, name: "Mechanical Engineering", hod: "Dr. Robert James", estYear: "2002", students: "850", tutors: "42" },
    { id: 4, name: "Civil Engineering", hod: "Prof. Alice Wright", estYear: "2005", students: "720", tutors: "30" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none">
              <Building2 size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Department Registry</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm italic uppercase tracking-wider opacity-70">Master Institutions & Faculty Hub</p>
           </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-12 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all">
              <Plus className="mr-3 h-4 w-4" /> Register New Dept
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] rounded-3xl border-slate-200 dark:border-slate-800 p-0 overflow-hidden shadow-2xl">
            <div className="bg-slate-900 p-8 text-white relative">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Building2 size={80} />
               </div>
               <DialogTitle className="text-2xl font-black uppercase tracking-tighter">Department Ledger</DialogTitle>
               <DialogDescription className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Initialize new academic unit</DialogDescription>
            </div>
            <div className="p-8 space-y-6 bg-white dark:bg-slate-900">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Formal Department Name</Label>
                  <Input id="name" placeholder="e.g. Aeronautical Engineering" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold italic" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Establishment Year</Label>
                  <Input id="year" type="number" placeholder="2024" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold italic" />
                </div>
              </div>
              <DialogFooter className="pt-4">
                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-widest shadow-xl rounded-xl transition-all active:scale-95">Commit Registry Record</Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-lg rounded-3xl overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input placeholder="Search records..." className="pl-10 h-11 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-xs uppercase tracking-tight shadow-sm rounded-xl focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="flex items-center gap-3">
               <Badge variant="outline" className="h-11 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 font-black text-[10px] uppercase tracking-widest gap-3">
                  <Filter size={14} /> Refine View
               </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-16 border-slate-100 dark:border-slate-800/50">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-8">Academic Unit &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Head of Department &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">Establishment</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">Registrations</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-8">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.map((dept) => (
                  <TableRow key={dept.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all border-slate-100 dark:border-slate-800/50 h-24">
                    <TableCell className="pl-8">
                       <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-black text-xs border border-blue-100 dark:border-blue-900/30 shadow-sm transition-transform group-hover:scale-110">
                             {dept.name.split(' ').map(w => w[0]).join('')}
                          </div>
                          <div>
                             <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter leading-none">{dept.name}</p>
                             <p className="text-[9px] text-slate-400 font-black mt-2 uppercase tracking-widest flex items-center gap-2">
                                <CalendarDays size={10} /> Active Registry
                             </p>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 border border-slate-200 dark:border-slate-700">
                             {dept.hod.split(' ').pop()?.charAt(0)}
                          </div>
                          <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{dept.hod}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-center font-mono font-black text-xs text-slate-500 tabular-nums uppercase tracking-widest">{dept.estYear}</TableCell>
                    <TableCell>
                       <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-4">
                             <div className="flex flex-col items-center">
                                <span className="flex items-center gap-1.5 text-xs font-black text-slate-900 dark:text-white tabular-nums">
                                   <Users size={12} className="text-blue-500" /> {dept.students}
                                </span>
                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Students</span>
                             </div>
                             <div className="w-px h-6 bg-slate-100 dark:bg-slate-800" />
                             <div className="flex flex-col items-center">
                                <span className="flex items-center gap-1.5 text-xs font-black text-slate-900 dark:text-white tabular-nums">
                                   <UserSquare2 size={12} className="text-indigo-500" /> {dept.tutors}
                                </span>
                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Tutors</span>
                             </div>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                       <div className="flex items-center justify-end gap-2 group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                             <Edit3 size={15} className="text-slate-600 dark:text-slate-400" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-9 w-9 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                                <MoreVertical size={16} className="text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950 backdrop-blur-xl">
                               <DropdownMenuLabel className="px-3 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Management Options</DropdownMenuLabel>
                               <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800 my-1" />
                               <DropdownMenuItem className="gap-3 py-3 rounded-xl focus:bg-blue-50 dark:focus:bg-blue-900/20 group cursor-pointer transition-colors">
                                  <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-600" />
                                  <span className="text-xs font-bold">Comprehensive Audit</span>
                               </DropdownMenuItem>
                               <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800 my-1" />
                               <DropdownMenuItem className="gap-3 py-3 rounded-xl focus:bg-red-50 dark:focus:bg-red-900/20 text-red-600 dark:text-red-400 group cursor-pointer transition-colors">
                                  <Trash2 size={14} className="group-hover:scale-110 transition-transform" />
                                  <span className="text-xs font-black uppercase tracking-tight">Decommission Unit</span>
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
          {departments.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center text-center px-4 bg-slate-50/20 dark:bg-transparent transition-all">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 text-slate-300 dark:text-slate-600 shadow-inner">
                 <Building2 size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">Registry Uninitialized</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-3 text-sm font-bold italic leading-relaxed">
                No departmental academic units have been registered in the system ledger yet.
              </p>
              <Button onClick={() => {}} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-widest h-12 px-8 rounded-xl shadow-xl transition-all active:scale-95">Initiate Onboarding</Button>
            </div>
          )}
          <div className="p-8 border-t dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Showing <span className="text-slate-900 dark:text-white">1–{departments.length}</span> of <span className="text-slate-900 dark:text-white">{departments.length}</span> records
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest disabled:opacity-50">Previous</Button>
              <div className="flex items-center gap-1">
                <Button size="sm" className="h-9 w-9 rounded-xl bg-blue-600 text-white font-black text-[10px]">1</Button>
              </div>
              <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest disabled:opacity-50">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Registry Information */}
      <div className="p-8 rounded-[2rem] bg-slate-900 text-slate-400 border border-slate-800 flex flex-col sm:flex-row items-center gap-10 shadow-3xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
            <ShieldCheck size={140} className="text-white" />
         </div>
         <div className="p-5 rounded-2xl bg-blue-600 text-white shadow-2xl relative z-10 transition-transform group-hover:scale-110">
            <Users size={32} />
         </div>
         <div className="flex-1 text-center sm:text-left relative z-10">
            <h6 className="text-white font-black uppercase text-sm tracking-[0.2em] mb-2 leading-none">Consolidated Registry Sync</h6>
            <p className="text-[11px] font-bold leading-relaxed opacity-70 italic">
               Master institution-wide departmental audit is active. Changes to HOD credentials or academic years will automatically propagate to all student dashboards.
            </p>
         </div>
         <Button variant="outline" className="h-11 px-6 border-slate-700 text-white hover:bg-white hover:text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] relative z-10 transition-all rounded-xl active:scale-95">
            Database Integrity Hub
         </Button>
      </div>
    </div>
  );
}
