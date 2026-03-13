import { 
  Check, 
  X, 
  Eye, 
  Search,
  Filter,
  Calendar,
  MoreVertical,
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
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function HODPendingRequests() {
  const pendingRequests = [
    { 
      id: "1", 
      regNo: "2021BCS102", 
      name: "David Miller", 
      batch: "2021-2025",
      semester: "6", 
      tutor: "Dr. Robert",
      type: "Bonafide - Internship", 
      date: "2024-03-13",
      status: "Tutor Approved" 
    },
    { 
      id: "2", 
      regNo: "2021BCS045", 
      name: "Emma Watson", 
      batch: "2021-2025",
      semester: "6", 
      tutor: "Dr. Sarah",
      type: "Bonafide - Competition", 
      date: "2024-03-12",
      status: "Tutor Approved" 
    },
    { 
      id: "3", 
      regNo: "2022BCS021", 
      name: "Michael Chen", 
      batch: "2022-2026",
      semester: "4", 
      tutor: "Prof. James",
      type: "Bonafide - Projects", 
      date: "2024-03-12",
      status: "Tutor Approved" 
    },
    { 
      id: "4", 
      regNo: "2021BCS033", 
      name: "Sophia Lopez", 
      batch: "2021-2025",
      semester: "6", 
      tutor: "Dr. Robert",
      type: "Bonafide - Passport", 
      date: "2024-03-11",
      status: "Tutor Approved" 
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Certificate Review Queue</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Review and provide final department approval for student requests.</p>
        </div>
        <div className="flex items-center gap-2">
           <Badge variant="outline" className="h-9 px-4 text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/10 dark:text-blue-400 dark:border-blue-900/20">
              {pendingRequests.length} Awaiting Review
           </Badge>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden bg-white dark:bg-slate-900/50">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative w-full lg:w-[450px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search records by student name, roll number, or tutor..." className="pl-10 h-11 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-11 px-4 gap-2 border-slate-200 dark:border-slate-800 font-semibold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <Filter size={16} /> Filter Results
              </Button>
              <Button variant="outline" className="h-11 px-4 gap-2 border-slate-200 dark:border-slate-800 font-semibold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <Calendar size={16} /> Quarter: Q1
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent transition-colors">
                  <TableHead className="w-[140px] h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 pl-6">
                     <span className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 dark:hover:text-white transition-colors">
                        Register No <ArrowUpDown size={12} />
                     </span>
                  </TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Student Name</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Batch / Sem</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Tutor</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Certificate Type</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">Status</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 text-right pr-6">Management</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingRequests.map((request) => (
                  <TableRow key={request.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-all border-slate-100 dark:border-slate-800/50">
                    <TableCell className="font-bold text-sm text-slate-900 dark:text-slate-100 pl-6">{request.regNo}</TableCell>
                    <TableCell className="font-semibold text-slate-700 dark:text-slate-300">{request.name}</TableCell>
                    <TableCell>
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{request.batch}</span>
                          <span className="text-[10px] text-slate-400 font-medium">Semester {request.semester}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-xs font-semibold text-slate-500 dark:text-slate-400">{request.tutor}</TableCell>
                    <TableCell>
                      <span className="text-[13px] font-medium italic text-slate-600 dark:text-slate-400">{request.type}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="px-2 py-0.5 text-[10px] font-extrabold bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/50 uppercase tracking-tighter">
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-2.5 opacity-60 group-hover:opacity-100 transition-opacity">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8 px-2.5 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all text-[11px] font-bold"
                          title="Approve"
                        >
                          <Check size={14} className="mr-1" /> Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8 px-2.5 bg-red-50 text-red-700 border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-[11px] font-bold"
                          title="Reject"
                        >
                          <X size={14} className="mr-1" /> Reject
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100 dark:hover:bg-slate-800">
                               <MoreVertical size={16} className="text-slate-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem className="gap-2.5 text-xs font-bold py-2.5">
                               <Eye size={14} /> Full Request Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2.5 text-xs font-bold py-2.5 text-blue-600">
                               <Calendar size={14} /> View Student Record
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
            <div className="py-24 flex flex-col items-center justify-center text-center px-4 bg-slate-50/30 dark:bg-transparent">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-300 dark:text-slate-600">
                 <Check size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">No pending requests!</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-1 text-sm font-medium">
                The department queue is completely clear. All certificates have been processed.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
