import { 
  Building2, 
  Search, 
  Users, 
  UserCog, 
  Calendar,
  ExternalLink,
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

export function PrincipalDepartments() {
  const departments = [
    { 
      name: "Computer Science and Engineering", 
      hod: "Prof. Winston", 
      estYear: "1998", 
      students: "1,240", 
      staff: "45",
      code: "CSE"
    },
    { 
      name: "Electronics and Communication", 
      hod: "Prof. Allen", 
      estYear: "2000", 
      students: "980", 
      staff: "38",
      code: "ECE"
    },
    { 
      name: "Mechanical Engineering", 
      hod: "Dr. Thomas", 
      estYear: "2002", 
      students: "850", 
      staff: "42",
      code: "MECH"
    },
    { 
      name: "Civil Engineering", 
      hod: "Prof. Sarah", 
      estYear: "2005", 
      students: "720", 
      staff: "30",
      code: "CIVIL"
    },
    { 
      name: "Information Technology", 
      hod: "Dr. James", 
      estYear: "2010", 
      students: "600", 
      staff: "28",
      code: "IT"
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-2xl shadow-lg">
              <Building2 size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Academic Departments</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm italic">Institutional directory and registry of all college departments.</p>
           </div>
        </div>
        <Button className="h-12 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-black text-[10px] uppercase tracking-widest px-8 shadow-xl active:scale-95 transition-all">
           Register New Department
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-md rounded-2xl overflow-hidden bg-white dark:bg-slate-900/40">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative w-full lg:w-[480px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search departments by name, code, or HOD..." className="pl-10 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-semibold focus:ring-indigo-500" />
            </div>
            <div className="flex items-center gap-4 text-xs font-black text-slate-400 uppercase tracking-widest">
               <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> {departments.length} Active
               </span>
               <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
               <span>Academic Year 2024</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 h-16 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-8">Academic Unit</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Head of Department</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">Registrations</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">Faculty Count</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-8">Management</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.map((dept) => (
                  <TableRow key={dept.code} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/20 border-slate-100 dark:border-slate-800 h-24 transition-colors">
                    <TableCell className="pl-8">
                       <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center font-black text-xs border border-indigo-100 dark:border-indigo-900/30">
                             {dept.code}
                          </div>
                          <div>
                             <p className="font-black text-slate-800 dark:text-slate-100 leading-tight uppercase tracking-tight">{dept.name}</p>
                             <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                <Calendar size={12} /> Established {dept.estYear}
                             </div>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 border border-slate-200 dark:border-slate-700">
                             {dept.hod.split(' ').pop()?.charAt(0)}
                          </div>
                          <span className="font-black text-sm text-slate-700 dark:text-slate-300">{dept.hod}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-center">
                       <div className="flex flex-col items-center">
                          <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-black tabular-nums">
                            <Users size={14} className="text-slate-400" />
                            {dept.students}
                          </div>
                          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">Active Students</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-center">
                       <div className="flex flex-col items-center">
                          <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-black tabular-nums">
                            <UserCog size={14} className="text-slate-400" />
                            {dept.staff}
                          </div>
                          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">Total Faculty</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                       <div className="flex items-center justify-end gap-2 group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all">
                          <Button size="sm" variant="ghost" className="h-9 px-4 font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-800 gap-2">
                             Full Profile <ChevronRight size={14} />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                             <ExternalLink size={16} className="text-indigo-600" />
                          </Button>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-slate-900 rounded-3xl text-slate-400 border border-slate-800 shadow-2xl">
         <div className="flex items-center gap-4 text-center sm:text-left mb-6 sm:mb-0">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
               <Building2 size={24} className="text-white" />
            </div>
            <div>
               <p className="text-white font-black uppercase text-sm tracking-widest">Global Institution Registry</p>
               <p className="text-[10px] font-bold mt-0.5 opacity-60">Last departmental update: March 12, 2024 • 09:45 AM</p>
            </div>
         </div>
         <div className="flex items-center gap-8">
            <div className="text-center">
               <p className="text-white font-black text-xl tabular-nums tracking-tighter">8</p>
               <p className="text-[9px] font-extrabold uppercase tracking-widest opacity-60">Total Depts</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
               <p className="text-white font-black text-xl tabular-nums tracking-tighter">184</p>
               <p className="text-[9px] font-extrabold uppercase tracking-widest opacity-60">Total Tutors</p>
            </div>
         </div>
      </div>
    </div>
  );
}
