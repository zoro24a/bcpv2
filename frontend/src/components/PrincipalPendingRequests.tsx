import { 
  X, 
  Eye, 
  Search,
  Filter,
  MoreVertical,
  ShieldCheck,
  Building2
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
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function PrincipalPendingRequests() {
  const pendingRequests = [
    { 
      id: "1", 
      regNo: "2021BCS102", 
      name: "David Miller", 
      department: "CSE",
      tutor: "Dr. Robert",
      hod: "Prof. Winston",
      type: "Bonafide - Internship", 
      date: "2024-03-13",
      status: "Verified by HOD" 
    },
    { 
      id: "2", 
      regNo: "2021BEC045", 
      name: "Emma Watson", 
      department: "ECE",
      tutor: "Dr. Sarah",
      hod: "Prof. Allen",
      type: "Bonafide - Scholarship", 
      date: "2024-03-12",
      status: "Verified by HOD" 
    },
    { 
      id: "3", 
      regNo: "2022BME021", 
      name: "Michael Chen", 
      department: "MECH",
      tutor: "Prof. James",
      hod: "Dr. Thomas",
      type: "Bonafide - Passport", 
      date: "2024-03-12",
      status: "Verified by HOD" 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Executive Review Queue</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm">Final institutional verification and digital signing of certificates.</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3].map(i => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-4 ring-white dark:ring-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-500 border border-slate-300 dark:border-slate-700 uppercase">
                   {i === 1 ? 'CS' : i === 2 ? 'EC' : 'ME'}
                </div>
              ))}
           </div>
           <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
           <Badge className="bg-indigo-600 text-white px-3 py-1 font-black text-[10px] border-none shadow-md shadow-indigo-200 dark:shadow-none uppercase tracking-widest leading-none">
              {pendingRequests.length} High Priority
           </Badge>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-md rounded-2xl overflow-hidden bg-white dark:bg-slate-900/40 backdrop-blur-sm border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative w-full lg:w-[480px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search records by student, registration, or dept..." className="pl-10 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-indigo-500 font-semibold" />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-12 px-5 gap-2.5 border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-[0.1em] text-slate-600 dark:text-slate-400 shadow-sm active:scale-95 transition-all">
                <Filter size={14} /> Advanced Filtering
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-16 border-slate-100 dark:border-slate-800">
                  <TableHead className="w-[120px] font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-8">Roll No</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Student Identity</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Academic Hierarchy</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Request Type</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">Verification Flow</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-8">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingRequests.map((request) => (
                  <TableRow key={request.id} className="group hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-all border-slate-100 dark:border-slate-800/60 h-24">
                    <TableCell className="font-black text-sm text-slate-900 dark:text-slate-100 pl-8 tabular-nums tracking-tighter">{request.regNo}</TableCell>
                    <TableCell>
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-all group-hover:border-indigo-400">
                             {request.name.charAt(0)}
                          </div>
                          <div>
                             <p className="font-black text-slate-800 dark:text-slate-200 leading-none">{request.name}</p>
                             <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-1.5 tracking-wider">{request.department} Department</p>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 italic">
                             <span className="w-1 h-1 rounded-full bg-slate-400"></span> HOD: {request.hod}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 italic">
                             <span className="w-1 h-1 rounded-full bg-slate-400"></span> Tutor: {request.tutor}
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex flex-col">
                          <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-tighter">{request.type}</span>
                          <span className="text-[10px] text-slate-400 font-bold mt-1 tracking-tight">{request.date}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                         <ShieldCheck size={14} className="animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-widest">{request.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                      <div className="flex items-center justify-end gap-3">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-10 px-4 bg-white text-slate-900 dark:bg-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all text-[11px] font-black uppercase tracking-widest rounded-xl shadow-sm"
                        >
                          Approve
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                               <MoreVertical size={18} className="text-slate-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-slate-200 dark:border-slate-800 shadow-2xl">
                             <DropdownMenuLabel className="px-3 py-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Administrative Options</DropdownMenuLabel>
                             <DropdownMenuItem className="gap-3 py-3 rounded-lg focus:bg-indigo-50 dark:focus:bg-indigo-900/20 font-bold text-xs">
                                <Eye size={16} /> Inspect Credentials
                             </DropdownMenuItem>
                             <DropdownMenuItem className="gap-3 py-3 rounded-lg focus:bg-red-50 dark:focus:bg-red-900/20 text-red-600 dark:text-red-400 font-bold text-xs">
                                <X size={16} /> Formal Rejection
                             </DropdownMenuItem>
                             <DropdownMenuItem className="gap-3 py-3 rounded-lg focus:bg-slate-50 dark:focus:bg-slate-800 font-bold text-xs">
                                <Building2 size={16} /> Consult Dept. HOD
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
          {pendingRequests.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center text-center px-4 bg-slate-50/20 dark:bg-transparent">
              <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl flex items-center justify-center mb-6 text-emerald-500 shadow-inner">
                 <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Queue Optimized</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-2 text-sm font-bold italic">
                All high-priority certificate requests have been successfully reviewed and processed for the current cycle.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Policy Reminder */}
      <div className="p-8 rounded-3xl bg-slate-900 text-slate-400 border border-slate-800 flex flex-col sm:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 transition-transform hover:rotate-0">
            <Building2 size={120} className="text-white" />
         </div>
         <div className="p-4 rounded-2xl bg-indigo-600 text-white shadow-lg relative z-10">
            <ShieldCheck size={32} />
         </div>
         <div className="flex-1 text-center sm:text-left relative z-10">
            <h6 className="text-white font-black uppercase text-sm tracking-widest mb-1.5">Certification Policy Compliance</h6>
            <p className="text-xs font-bold leading-relaxed opacity-70">
               Please ensure all digital signatures align with the 2024 University Academic Registry protocols. Final institution-level approval is legally binding for international transcript processing.
            </p>
         </div>
         <Button variant="outline" className="h-11 px-6 border-slate-700 text-white hover:bg-white hover:text-slate-900 font-black text-[10px] uppercase tracking-widest relative z-10 transition-all rounded-xl">
            View Compliance Handbook
         </Button>
      </div>
    </div>
  );
}
