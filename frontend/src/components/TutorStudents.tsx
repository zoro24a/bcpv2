import { 
  Search,
  User,
  FileText,
  Mail,
  Phone,
  MoreVertical,
  ExternalLink
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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function TutorStudents() {
  const students = [
    { 
      regNo: "2021BCS001", 
      name: "John Doe", 
      batch: "2021-2025 (A)", 
      email: "john.doe@example.com", 
      phone: "+91 98765 43210" 
    },
    { 
      regNo: "2021BCS015", 
      name: "Alice Smith", 
      batch: "2021-2025 (A)", 
      email: "alice.s@example.com", 
      phone: "+91 98765 43211" 
    },
    { 
      regNo: "2021BCS044", 
      name: "Bob Wilson", 
      batch: "2021-2025 (A)", 
      email: "bob.w@example.com", 
      phone: "+91 98765 43212" 
    },
    { 
      regNo: "2021BCS022", 
      name: "Sarah Parker", 
      batch: "2021-2025 (A)", 
      email: "sarah.p@example.com", 
      phone: "+91 98765 43213" 
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">My Students</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage students assigned to your batch: CSE 2021-2025 (A).</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
           Download Student List
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search students by name or register number..." className="pl-9 bg-white dark:bg-slate-800" />
            </div>
            <div className="text-sm text-slate-500 font-medium">
               Showing {students.length} students
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
                  <TableHead className="font-semibold">Batch</TableHead>
                  <TableHead className="font-semibold">Contact Info</TableHead>
                  <TableHead className="text-right font-semibold pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.regNo} className="group hover:bg-slate-50 dark:hover:bg-slate-900/50">
                    <TableCell className="font-medium text-blue-600 dark:text-blue-400">{student.regNo}</TableCell>
                    <TableCell>
                      <div className="font-medium text-slate-900 dark:text-slate-100">{student.name}</div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {student.batch}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail size={12} /> {student.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Phone size={12} /> {student.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 gap-2 h-8"
                        >
                          <User size={14} />
                          <span className="hidden sm:inline">Profile</span>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 gap-2 h-8"
                        >
                          <FileText size={14} />
                          <span className="hidden sm:inline">Requests</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                               <MoreVertical size={18} className="text-slate-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                               <ExternalLink size={14} /> View Detailed Info
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                               <Mail size={14} /> Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                               <Phone size={14} /> Call Student
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
        </CardContent>
      </Card>
    </div>
  );
}
