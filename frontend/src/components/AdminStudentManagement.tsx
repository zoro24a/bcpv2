import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Search, 
  Edit3, 
  Trash2, 
  Building2,
  MoreVertical,
  Filter,
  CalendarDays,
  UserCheck2,
  Download,
  Upload,
  UserPlus,
  ChevronLeft,
  ChevronRight,
  Database
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { studentService, departmentService } from '@/services/api';
import { toast } from "@/components/ui/use-toast"

export function AdminStudentManagement() {
  const [students, setStudents] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    register_number: '',
    parent_name: '',
    department_id: '',
    batch_start: '',
    batch_end: '',
    section: '',
    password: ''
  });

  const fetchStudents = async () => {
    try {
      const response = await studentService.getAll();
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initData = async () => {
      try {
        const [studentsRes, deptsRes] = await Promise.all([
          studentService.getAll(),
          departmentService.getAll()
        ]);
        setStudents(studentsRes.data);
        setDepartments(deptsRes.data);
      } catch (error) {
        console.error("Failed to initialize student management:", error);
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, []);

  const handleRegister = async () => {
    if (!formData.email || !formData.register_number || !formData.first_name) {
      toast({
        title: "Validation Error",
        description: "Please fill in the core identity protocols.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const batchName = `${formData.batch_start}-${formData.batch_end}`;
      await studentService.enroll({
        ...formData,
        department_id: formData.department_id ? parseInt(formData.department_id) : undefined,
        batch_name: batchName,
        section: formData.section || null
      });
      
      toast({
        title: "Enrollment Successful",
        description: "Student protocol committed and cohort assigned/created automatically.",
      });

      setIsAddOpen(false);
      setFormData({
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        register_number: '',
        parent_name: '',
        department_id: '',
        batch_start: '',
        batch_end: '',
        section: '',
        password: ''
      });
      fetchStudents();
    } catch (error: any) {
      console.error("Enrollment failed:", error);
      toast({
        title: "Enrollment Failed",
        description: error.response?.data?.detail || "Enrollment protocol interrupted. Check system logs.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isBulkOpen, setIsBulkOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-xl">
              <GraduationCap size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Student Management</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic uppercase tracking-wider opacity-70">institution-wide Student Registry</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-slate-50 transition-all">
            <Download size={16} className="mr-2" /> Download Template
          </Button>
          
          <Dialog open={isBulkOpen} onOpenChange={setIsBulkOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" className="h-12 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                <Upload size={16} className="mr-2" /> Bulk Onboard
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 shadow-3xl p-10 bg-white dark:bg-slate-950">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-[2rem] bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shadow-inner">
                  <Database size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">Bulk Registry Import</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Upload CSV or XLSX protocols</p>
                </div>
                <div className="w-full p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl group hover:border-blue-500 transition-colors cursor-pointer bg-slate-50/50 dark:bg-slate-900/50">
                  <input type="file" className="hidden" id="bulk-upload" />
                  <label htmlFor="bulk-upload" className="flex flex-col items-center gap-4 cursor-pointer">
                    <CloudUpload className="text-slate-300 group-hover:text-blue-500 transition-colors" size={48} />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Drop data stream here</span>
                  </label>
                </div>
                <div className="flex gap-4 w-full">
                  <Button variant="ghost" onClick={() => setIsBulkOpen(false)} className="flex-1 h-12 rounded-xl font-black text-[10px] uppercase tracking-widest">Terminate</Button>
                  <Button className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 font-black text-[10px] uppercase tracking-widest shadow-xl">Process Batch</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                <UserPlus size={16} className="mr-2" /> Enroll Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-3xl p-0 bg-white dark:bg-slate-950">
              <DialogHeader className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800">
                <DialogTitle className="text-xl font-black uppercase tracking-tighter">Master Enrollment Portal</DialogTitle>
                <DialogDescription className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Register individual student identity</DialogDescription>
              </DialogHeader>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">First Name</label>
                  <Input 
                    value={formData.first_name}
                    onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                    placeholder="Master Identity First" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Last Name</label>
                  <Input 
                    value={formData.last_name}
                    onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                    placeholder="Master Identity Last" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Gender</label>
                  <Select value={formData.gender} onValueChange={(val) => setFormData({...formData, gender: val})}>
                    <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Email Protocol</label>
                  <Input 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="student.id@university.edu" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Register Number</label>
                  <Input 
                    value={formData.register_number}
                    onChange={(e) => setFormData({...formData, register_number: e.target.value})}
                    placeholder="REG_XXXX_UNIT" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Parent/Guardian</label>
                  <Input 
                    value={formData.parent_name}
                    onChange={(e) => setFormData({...formData, parent_name: e.target.value})}
                    placeholder="Guardian Full Identity" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Department</label>
                  <Select value={formData.department_id} onValueChange={(val) => setFormData({...formData, department_id: val})}>
                    <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4">
                      <SelectValue placeholder="Target Department" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                      {departments.map(dept => (
                        <SelectItem key={dept.id} value={dept.id.toString()}>{dept.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Batch Start</label>
                    <Input 
                      value={formData.batch_start}
                      onChange={(e) => setFormData({...formData, batch_start: e.target.value})}
                      placeholder="2020" 
                      className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Batch End</label>
                    <Input 
                      value={formData.batch_end}
                      onChange={(e) => setFormData({...formData, batch_end: e.target.value})}
                      placeholder="2024" 
                      className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Section</label>
                  <Input 
                    value={formData.section}
                    onChange={(e) => setFormData({...formData, section: e.target.value})}
                    placeholder="e.g., A, B, Alpha" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Default Password</label>
                  <Input 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    type="password" 
                    placeholder="System Generated or Manual" 
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 font-bold px-4" 
                  />
                </div>
              </div>
              <DialogFooter className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
                <Button variant="ghost" onClick={() => setIsAddOpen(false)} className="h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500">Terminate Enrollment</Button>
                <Button 
                  onClick={handleRegister} 
                  disabled={isSubmitting}
                  className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-widest shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Committing..." : "Complete Registration"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            <div className="relative w-full xl:w-[400px] group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <Input placeholder="Search name, reg no..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-sm tracking-tight shadow-sm rounded-2xl focus:ring-blue-600" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
               <Select>
                  <SelectTrigger className="h-14 w-48 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-xs uppercase tracking-tight">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cse">CSE</SelectItem>
                    <SelectItem value="ece">ECE</SelectItem>
                  </SelectContent>
               </Select>
               <Select>
                  <SelectTrigger className="h-14 w-48 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-xs uppercase tracking-tight">
                    <SelectValue placeholder="Batch Unit" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="all">All Batches</SelectItem>
                    <SelectItem value="2020">2020-24</SelectItem>
                    <SelectItem value="2021">2021-25</SelectItem>
                  </SelectContent>
               </Select>
               <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 font-black text-[10px] uppercase tracking-widest shadow-md">
                  <Filter size={16} className="mr-3" /> Advanced
               </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
             <div className="py-32 flex flex-col items-center justify-center text-center px-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-slate-500 font-bold animate-pulse">Syncing Academic Rosters...</p>
             </div>
          ) : students.length === 0 ? (
            <div className="py-32 flex flex-col items-center justify-center text-center px-4 bg-slate-50/20 dark:bg-transparent transition-all">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 text-slate-300 dark:text-slate-600 shadow-inner">
                 <GraduationCap size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">Registry Nullified</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-3 text-sm font-bold italic leading-relaxed">
                No students are currently enrolled in the institutional database.
              </p>
              <Button onClick={() => setIsAddOpen(true)} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-widest h-12 px-8 rounded-xl shadow-xl transition-all active:scale-95">Enroll Pioneer Student</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10 cursor-pointer hover:text-blue-500 transition-colors">Register Number &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 cursor-pointer hover:text-blue-500 transition-colors">Student Name &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Gender</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Department</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Batch</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all border-slate-100 dark:border-slate-800 h-24">
                    <TableCell className="pl-10">
                       <span className="text-xs font-black text-blue-600 uppercase tracking-widest tabular-nums">{student.register_number || student.regNo}</span>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-sm text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                             {(student.full_name || student.name || "S")[0]}
                          </div>
                          <div>
                            <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm leading-none">{student.full_name || student.name}</p>
                            <span className="text-[10px] font-bold text-slate-400 tracking-tight">{student.email}</span>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{student.gender || 'Not Specified'}</span>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2 text-xs font-black text-slate-800 dark:text-slate-200">
                          <Building2 size={14} className="text-blue-500" /> {student.department?.name || student.department || 'N/A'}
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          <CalendarDays size={12} className="text-slate-300" /> {student.batch?.name || student.batch || 'Unassigned'}
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 shadow-sm">
                             <Edit3 size={16} className="text-slate-600 dark:text-slate-400" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-slate-100 rounded-xl">
                                <MoreVertical size={18} className="text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-60 p-2 rounded-2xl border-slate-200 shadow-3xl bg-white dark:bg-slate-950">
                               <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Sync</DropdownMenuLabel>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-blue-50 group cursor-pointer">
                                  <UserCheck2 size={16} className="text-slate-400 group-hover:text-blue-600" />
                                  <span className="text-xs font-bold">Audit Registry</span>
                               </DropdownMenuItem>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-red-50 text-red-600 group cursor-pointer transition-colors">
                                  <Trash2 size={16} className="group-hover:translate-x-1" />
                                  <span className="text-xs font-black uppercase">Terminate Access</span>
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
          )}
          
          <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Showing 1–10 of 240 records</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400">
                  <ChevronLeft size={18} />
                </Button>
                <div className="flex items-center gap-1">
                  <Button className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black text-xs shadow-lg">1</Button>
                  <Button variant="ghost" className="h-10 w-10 rounded-xl font-bold text-xs text-slate-400">2</Button>
                  <Button variant="ghost" className="h-10 w-10 rounded-xl font-bold text-xs text-slate-400">3</Button>
                </div>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400">
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

function CloudUpload(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}
