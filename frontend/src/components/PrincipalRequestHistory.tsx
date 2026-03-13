import { 
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  History as HistoryIcon,
  ChevronRight,
  TrendingUp
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
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export function PrincipalRequestHistory() {
  const history = [
    { 
      id: "1",
      name: "Alice Johnson", 
      department: "CSE",
      batch: "2020-2024", 
      semester: "8",
      date: "2024-03-10", 
      type: "Bonafide - Visa/Travel", 
      status: "Approved" 
    },
    { 
      id: "2",
      name: "Kevin Smith", 
      department: "ECE",
      batch: "2021-2025", 
      semester: "6",
      date: "2024-03-09", 
      type: "Bonafide - Internship", 
      status: "Rejected" 
    },
    { 
      id: "3",
      name: "Sarah Lee", 
      department: "MECH",
      batch: "2021-2025", 
      semester: "6",
      date: "2024-03-08", 
      type: "Bonafide - Scholarship", 
      status: "Approved" 
    },
    { 
      id: "4",
      name: "Bob Martin", 
      department: "CIVIL",
      batch: "2022-2026", 
      semester: "4",
      date: "2024-03-05", 
      type: "Bonafide - Projects", 
      status: "Approved" 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30">
              <HistoryIcon size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Institution Archives</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm">Comprehensive audit log of all institutional certification activity.</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-11 px-5 border-slate-200 dark:border-slate-800 shadow-sm font-black text-[10px] uppercase tracking-widest gap-2.5 bg-white dark:bg-slate-900">
              <Download size={16} /> Master Database Export
           </Button>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Global search across all departments..." className="pl-10 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-semibold text-sm" />
            </div>
            
            <div className="xl:col-span-7 flex flex-wrap items-center gap-3 xl:justify-end">
              <div className="w-[180px]">
                <Select>
                  <SelectTrigger className="h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-xs">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="CSE">CSE Dept.</SelectItem>
                    <SelectItem value="ECE">ECE Dept.</SelectItem>
                    <SelectItem value="MECH">MECH Dept.</SelectItem>
                    <SelectItem value="CIVIL">CIVIL Dept.</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-[160px]">
                <Select>
                  <SelectTrigger className="h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-xs">
                    <SelectValue placeholder="Batch Filter" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                    <SelectItem value="all">Global Batches</SelectItem>
                    <SelectItem value="2021">2021 Intake</SelectItem>
                    <SelectItem value="2022">2022 Intake</SelectItem>
                    <SelectItem value="2023">2023 Intake</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-[120px]">
                <Select>
                  <SelectTrigger className="h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-xs">
                    <SelectValue placeholder="Sem" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                    <SelectItem value="all">All Sems</SelectItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                       <SelectItem key={s} value={String(s)}>Semester {s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="h-12 w-12 p-0 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50">
                <Filter size={18} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-16 border-slate-100 dark:border-slate-800">
                  <TableHead className="h-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-8">Identity</TableHead>
                  <TableHead className="h-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Department</TableHead>
                  <TableHead className="h-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Academic Scope</TableHead>
                  <TableHead className="h-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Process Date</TableHead>
                  <TableHead className="h-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Outcome Details</TableHead>
                  <TableHead className="h-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-8">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((item) => (
                  <TableRow key={item.id} className="hover:bg-indigo-50/20 dark:hover:bg-indigo-900/5 border-slate-100 dark:border-slate-800 h-20 transition-colors">
                    <TableCell className="font-black text-slate-900 dark:text-slate-100 pl-8 text-sm">{item.name}</TableCell>
                    <TableCell>
                       <Badge variant="outline" className="h-7 px-3 text-[10px] font-black uppercase tracking-widest bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800">
                          {item.department}
                       </Badge>
                    </TableCell>
                    <TableCell>
                       <div className="flex flex-col">
                          <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-tighter">B: {item.batch}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">Sem {item.semester}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-[10px] font-black text-slate-500 uppercase tabular-nums tracking-widest font-mono">{item.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                         <Badge 
                           className={cn(
                             "h-6 px-2.5 text-[9px] font-black uppercase tracking-tighter border-none",
                             item.status === 'Approved' ? "bg-emerald-600 text-white" :
                             item.status === 'Rejected' ? "bg-red-600 text-white" :
                             "bg-amber-500 text-white"
                           )}
                         >
                           {item.status}
                         </Badge>
                         <span className="text-xs font-bold text-slate-500 italic truncate max-w-[150px]">{item.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                       <div className="flex justify-end items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="ghost" className="h-9 w-9 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 rounded-xl transition-all active:scale-90">
                             <Eye size={16} className="text-indigo-600" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-9 w-9 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-90">
                             <Download size={16} className="text-slate-500" />
                          </Button>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {history.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center text-center px-4">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 text-slate-300 dark:text-slate-600 shadow-inner">
                <FileText size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Archive Unpopulated</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-2 text-sm font-bold italic leading-relaxed">No historical certificate records match the current institution-wide data parameters.</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Analytics Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm border-2">
         <div className="space-y-4">
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Insights</p>
            <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter leading-tight">Certificate Distribution <br/>by Outcome</h4>
            <div className="flex items-center gap-6 mt-6">
               <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest tabular-nums leading-none">88% Approved</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest tabular-nums leading-none">12% Rejected</span>
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-between group transition-all hover:border-indigo-500 cursor-pointer shadow-sm">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-indigo-600 flex items-center justify-center shadow-md">
                     <TrendingUp size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Metric</p>
                     <p className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">+22% Processing Speed</p>
                  </div>
               </div>
               <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 text-center uppercase tracking-widest opacity-60">Analytics based on last 400 processed requests</p>
         </div>
      </div>
    </div>
  );
}
