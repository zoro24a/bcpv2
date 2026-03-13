import { 
  Check, 
  X, 
  Eye, 
  Search,
  Filter,
  Calendar,
  MoreVertical
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

export function TutorPendingRequests() {
  const pendingRequests = [
    { 
      id: "1", 
      regNo: "2021BCS001", 
      name: "John Doe", 
      semester: "6", 
      type: "Bonafide - Internship", 
      date: "2024-03-12",
      status: "Pending" 
    },
    { 
      id: "2", 
      regNo: "2021BCS015", 
      name: "Alice Smith", 
      semester: "4", 
      type: "Bonafide - Competition", 
      date: "2024-03-11",
      status: "Pending" 
    },
    { 
      id: "3", 
      regNo: "2021BCS044", 
      name: "Bob Wilson", 
      semester: "6", 
      type: "Bonafide - Bank Loan", 
      date: "2024-03-10",
      status: "Pending" 
    },
    { 
      id: "4", 
      regNo: "2021BCS022", 
      name: "Sarah Parker", 
      semester: "8", 
      type: "Bonafide - Passport", 
      date: "2024-03-10",
      status: "Pending" 
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Pending Requests</h1>
          <p className="text-slate-500 dark:text-slate-400">Review and approve student bonafide certificate requests.</p>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search student name or register number..." className="pl-9 bg-white dark:bg-slate-800" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9 gap-2">
                <Filter size={16} />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="h-9 gap-2">
                <Calendar size={16} />
                Date Range
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 hover:bg-transparent">
                  <TableHead className="w-[150px] font-semibold">Reg. Number</TableHead>
                  <TableHead className="font-semibold">Student Name</TableHead>
                  <TableHead className="font-semibold">Semester</TableHead>
                  <TableHead className="font-semibold">Certificate Type</TableHead>
                  <TableHead className="font-semibold">Request Date</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="text-right font-semibold pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingRequests.map((request) => (
                  <TableRow key={request.id} className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <TableCell className="font-medium text-blue-600 dark:text-blue-400">{request.regNo}</TableCell>
                    <TableCell className="font-medium text-slate-900 dark:text-slate-100">{request.name}</TableCell>
                    <TableCell>{request.semester}</TableCell>
                    <TableCell>
                      <span className="text-sm">{request.type}</span>
                    </TableCell>
                    <TableCell className="text-slate-500 text-sm">{request.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-900/50">
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                          title="Approve"
                        >
                          <Check size={18} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                          title="Reject"
                        >
                          <X size={18} />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                               <MoreVertical size={18} className="text-slate-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                               <Eye size={14} /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-emerald-600">
                               <Check size={14} /> Quick Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-red-600">
                               <X size={14} /> Reject with Note
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
            <div className="py-12 text-center">
              <p className="text-slate-500">No pending requests found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
