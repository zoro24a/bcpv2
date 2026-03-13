import { useState } from 'react';
import { 
  UserPlus2, 
  Search, 
  Trash2, 
  GraduationCap,
  Building2,
  CalendarDays,
  Users2,
  ChevronRight,
  Filter,
  CheckCircle2,
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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export function AdminTutorAssignment() {
  const [assignments] = useState([
    { id: 1, batch: "2020-2024", section: "A", semester: "8", tutor: "Dr. Robert Fox", year: "2024" },
    { id: 2, batch: "2021-2025", section: "B", semester: "6", tutor: "Prof. Jane Cooper", year: "2024" },
    { id: 3, batch: "2021-2025", section: "A", semester: "6", tutor: "Dr. Albert Flores", year: "2024" },
    { id: 4, batch: "2022-2026", section: "C", semester: "4", tutor: "Prof. Bessie Humphrey", year: "2024" },
  ]);

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-xl">
              <UserPlus2 size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Faculty Allocation</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm italic uppercase tracking-wider opacity-70">Assign Tutors to Academic Batches</p>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden lg:flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Active Allocations</span>
              <span className="text-lg font-black text-slate-900 dark:text-white tabular-nums tracking-tighter leading-none">{assignments.length} Records</span>
           </div>
           <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 hidden lg:block mx-1"></div>
           <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-500 font-black text-[10px] uppercase tracking-widest transition-all hover:bg-slate-50">
              Audit Logs
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         {/* Assignment Panel */}
         <div className="lg:col-span-4 space-y-8">
            <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/60 border-2">
               <div className="p-10 bg-slate-900 text-white relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Users2 size={80} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter leading-none mb-2">Allocation Module</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-80 leading-snug italic">Synchronize Tutor assignments with live student cohorts</p>
               </div>
               <CardContent className="p-10 space-y-8">
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Academic Department</label>
                        <Select>
                           <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold">
                              <SelectValue placeholder="Select Department" />
                           </SelectTrigger>
                           <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800">
                              <SelectItem value="cse">CSE</SelectItem>
                              <SelectItem value="ece">ECE</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Batch Cohort</label>
                           <Select>
                              <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold">
                                 <SelectValue placeholder="Batch" />
                              </SelectTrigger>
                              <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800">
                                 <SelectItem value="2020">2020-24</SelectItem>
                                 <SelectItem value="2021">2021-25</SelectItem>
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Semester</label>
                           <Select>
                              <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold">
                                 <SelectValue placeholder="Sem" />
                              </SelectTrigger>
                              <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800">
                                 {[1,2,3,4,5,6,7,8].map(s => (
                                    <SelectItem key={s} value={String(s)}>Sem {s}</SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Qualified Tutor</label>
                        <Select>
                           <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold">
                              <SelectValue placeholder="Select Staff Member" />
                           </SelectTrigger>
                           <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800 shadow-2xl">
                              <SelectItem value="r-fox">Dr. Robert Fox</SelectItem>
                              <SelectItem value="j-cooper">Prof. Jane Cooper</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                  </div>
                  <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-sm tracking-widest shadow-2xl rounded-2xl transition-all active:scale-95 group">
                     Assign Faculty <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 flex items-start gap-4">
                     <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                     <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase leading-relaxed">
                        Assignments are legally binding for the defined academic cycle. Duplicate tutor assignments for the same batch will trigger a registry fault.
                     </p>
                  </div>
               </CardContent>
            </Card>
         </div>

         {/* Listings Panel */}
         <div className="lg:col-span-8 space-y-8">
            <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
               <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                     <div className="relative w-full lg:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                        <Input placeholder="Filter cohorts..." className="pl-12 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-xs uppercase tracking-tight shadow-sm rounded-2xl focus:ring-blue-600" />
                     </div>
                     <Button variant="outline" className="h-12 px-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 font-black text-[10px] uppercase tracking-widest gap-3 shadow-md">
                        <Filter size={16} /> Registry View
                     </Button>
                  </div>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                           <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-16">
                              <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Academic Cohort</TableHead>
                              <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Assigned Faculty</TableHead>
                              <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">Status</TableHead>
                              <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Manage</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {assignments.map((assignment) => (
                              <TableRow key={assignment.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all border-slate-100 dark:border-slate-800 h-24">
                                 <TableCell className="pl-10">
                                    <div className="flex items-center gap-5">
                                       <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 text-blue-600 flex items-center justify-center font-black text-xs border border-slate-100 dark:border-slate-700 shadow-xl group-hover:scale-110 transition-transform">
                                          {assignment.section}
                                       </div>
                                       <div>
                                          <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm leading-none mb-2 italic">Batch: {assignment.batch}</p>
                                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                             <Building2 size={12} className="text-slate-300" /> {assignment.year} Registry
                                          </p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-3">
                                       <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 border border-slate-200 dark:border-slate-700">
                                          {assignment.tutor.charAt(0)}
                                       </div>
                                       <div className="flex flex-col">
                                          <span className="font-black text-xs text-slate-700 dark:text-slate-300 uppercase tracking-tighter leading-none">{assignment.tutor}</span>
                                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 leading-none">Semester {assignment.semester} Controller</span>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 rounded-full text-[9px] font-black uppercase tracking-widest">
                                       <CheckCircle2 size={12} /> Live Sync
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-right pr-10">
                                    <div className="flex items-center justify-end gap-2 group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                       <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm">
                                          <CalendarDays size={16} className="text-slate-600 dark:text-slate-400" />
                                       </Button>
                                       <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-all active:scale-90 border border-transparent">
                                          <Trash2 size={16} />
                                       </Button>
                                    </div>
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>
                  {assignments.length === 0 && (
                     <div className="py-24 text-center px-4">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                           <GraduationCap size={32} />
                        </div>
                        <h5 className="font-black text-slate-900 uppercase tracking-tighter">No Active Cohorts</h5>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 max-w-[200px] mx-auto italic">Academic registry is currently uninitialized for faculty allocation.</p>
                     </div>
                  )}
               </CardContent>
            </Card>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-tr from-slate-900 to-indigo-950 text-white shadow-3xl relative overflow-hidden group border-2 border-indigo-900/50">
               <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                  <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-2xl transition-transform group-hover:rotate-12">
                     <Users2 size={32} />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                     <h6 className="font-black uppercase text-base tracking-[0.2em] mb-2 leading-none">Automated Cohort Sync</h6>
                     <p className="text-[10px] font-bold leading-relaxed opacity-70 italic">
                        The faculty allocation engine automatically updates student portals upon tutor assignment. Real-time digital signature chains are recalculated for all pending certificate requests.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
