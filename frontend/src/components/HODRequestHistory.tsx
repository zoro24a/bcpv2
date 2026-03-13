import { 
  Search,
  Filter,
  Download,
  Eye,
  ArrowUpDown,
  History as HistoryIcon
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

export function HODRequestHistory() {
  const history = [
    { 
      id: "1",
      name: "Alice Johnson", 
      batch: "2020-2024", 
      semester: "8",
      date: "2024-03-10", 
      type: "Bonafide - Visa Application", 
      status: "Approved" 
    },
    { 
      id: "2",
      name: "Kevin Smith", 
      batch: "2021-2025", 
      semester: "6",
      date: "2024-03-09", 
      type: "Bonafide - Internship", 
      status: "Rejected" 
    },
    { 
      id: "3",
      name: "Sarah Lee", 
      batch: "2021-2025", 
      semester: "6",
      date: "2024-03-08", 
      type: "Bonafide - Bank Loan", 
      status: "Approved" 
    },
    { 
      id: "4",
      name: "Bob Martin", 
      batch: "2022-2026", 
      semester: "4",
      date: "2024-03-05", 
      type: "Bonafide - Projects", 
      status: "Pending" 
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Request Archive</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Audit log of all processed bonafide certificate requests.</p>
        </div>
        <Button variant="outline" className="border-slate-200 dark:border-slate-800 shadow-sm font-bold text-xs uppercase tracking-widest gap-2.5 h-11 px-6">
           <Download size={16} /> Export Records
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden bg-white dark:bg-slate-900/50">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-6">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div className="relative w-full xl:w-[400px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search archives..." className="pl-10 h-11 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-[180px]">
                <Select>
                  <SelectTrigger className="h-11 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <SelectValue placeholder="Academic Batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Batches</SelectItem>
                    <SelectItem value="2020-2024">Batch 2020-2024</SelectItem>
                    <SelectItem value="2021-2025">Batch 2021-2025</SelectItem>
                    <SelectItem value="2022-2026">Batch 2022-2026</SelectItem>
                    <SelectItem value="2023-2027">Batch 2023-2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-[150px]">
                <Select>
                  <SelectTrigger className="h-11 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <SelectValue placeholder="Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sems</SelectItem>
                    <SelectItem value="1">Sem 1</SelectItem>
                    <SelectItem value="2">Sem 2</SelectItem>
                    <SelectItem value="3">Sem 3</SelectItem>
                    <SelectItem value="4">Sem 4</SelectItem>
                    <SelectItem value="5">Sem 5</SelectItem>
                    <SelectItem value="6">Sem 6</SelectItem>
                    <SelectItem value="7">Sem 7</SelectItem>
                    <SelectItem value="8">Sem 8</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="h-11 px-4 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800">
                <Filter size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent">
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 pl-6">
                     <span className="flex items-center gap-1.5 cursor-pointer">
                        Student <ArrowUpDown size={12} />
                     </span>
                  </TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Batch / Sem</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Processing Date</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Certificate Description</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">Outcome</TableHead>
                  <TableHead className="h-14 font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 text-right pr-6">Review</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((item) => (
                  <TableRow key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10 border-slate-100 dark:border-slate-800/50">
                    <TableCell className="font-bold text-slate-800 dark:text-slate-100 pl-6">{item.name}</TableCell>
                    <TableCell>
                       <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{item.batch} • S{item.semester}</span>
                    </TableCell>
                    <TableCell className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{item.date}</TableCell>
                    <TableCell>
                      <span className="text-[13px] font-medium italic text-slate-500 dark:text-slate-400">{item.type}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-tighter border-none",
                          item.status === 'Approved' ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/10 dark:text-emerald-400" :
                          item.status === 'Rejected' ? "bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-400" :
                          "bg-amber-50 text-amber-700 dark:bg-amber-900/10 dark:text-amber-400"
                        )}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex justify-end gap-2">
                         <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                            <Eye size={16} className="text-slate-400" />
                         </Button>
                         <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                            <Download size={16} className="text-slate-400" />
                         </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {history.length === 0 && (
            <div className="py-24 flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-4 text-slate-300">
                <HistoryIcon size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">The archive is empty.</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-1 text-sm font-medium">No certificate records were found matching these parameters.</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-8 mt-4 px-2">
         <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Showing 4 of 1,120 records</p>
         <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled className="h-9 px-4 font-bold text-[10px] uppercase">Prev</Button>
            <Button variant="outline" size="sm" className="h-9 px-4 font-bold text-[10px] uppercase border-slate-300 dark:border-slate-700">Next</Button>
         </div>
      </div>
    </div>
  );
}
