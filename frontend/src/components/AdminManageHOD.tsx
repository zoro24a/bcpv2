import { useState } from 'react';
import { 
  UserSquare2, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Mail, 
  Phone,
  Building2,
  MoreVertical,
  ShieldCheck,
  Filter,
  UserCheck
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
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function AdminManageHOD() {
  const [hods] = useState([
    { id: 1, name: "Dr. Winston Henderson", department: "Computer Science", email: "winston.h@univ.edu", phone: "+91 99887 76655" },
    { id: 2, name: "Prof. Sarah Miller", department: "Electronics & Comm.", email: "sarah.m@univ.edu", phone: "+91 88776 65544" },
    { id: 3, name: "Dr. Robert James", department: "Mechanical Eng.", email: "robert.j@univ.edu", phone: "+91 77665 54433" },
    { id: 4, name: "Prof. Alice Wright", department: "Civil Engineering", email: "alice.w@univ.edu", phone: "+91 66554 43322" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-2xl shadow-xl">
              <UserSquare2 size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Faculty Leadership</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-sm italic uppercase tracking-wider opacity-70">Heads of Department Registry</p>
           </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
              <Plus className="mr-3 h-4 w-4" /> Appoint Department Head
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] rounded-[2rem] border-slate-200 dark:border-slate-800 p-0 overflow-hidden shadow-3xl">
            <div className="bg-indigo-950 p-10 text-white relative">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                  <UserCheck size={100} />
               </div>
               <DialogTitle className="text-3xl font-black uppercase tracking-tighter leading-none mb-3">Academic Appointment</DialogTitle>
               <DialogDescription className="text-indigo-300 font-bold uppercase text-[10px] tracking-widest leading-none">Register formal departmental leadership credentials</DialogDescription>
            </div>
            <div className="p-10 space-y-8 bg-white dark:bg-slate-900 border-t-4 border-indigo-600">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</Label>
                  <Input placeholder="Enter First Name" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold italic" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</Label>
                  <Input placeholder="Enter Last Name" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold italic" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">System Username</Label>
                  <Input placeholder="e.g. j_doe_hod" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Allocated Department</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold">
                      <SelectValue placeholder="Select Departmental Unit" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800 shadow-xl">
                      <SelectItem value="cse">Computer Science</SelectItem>
                      <SelectItem value="ece">Electronics & Communication</SelectItem>
                      <SelectItem value="mech">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Official Email Address</Label>
                  <Input type="email" placeholder="official@university.edu" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Security Phone Number</Label>
                  <Input placeholder="+91 00000 00000" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Temporary Access Password</Label>
                  <Input type="password" placeholder="••••••••" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase text-sm tracking-widest shadow-2xl rounded-2xl transition-all active:scale-95">Commit Appointment & Notify</Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative w-full lg:w-[450px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search leadership records by name, email, or dept..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-sm tracking-tight shadow-sm rounded-2xl focus:ring-indigo-500" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] gap-3 shadow-md hover:bg-slate-50 transition-all">
                <Filter size={16} /> Advanced Query
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Department Head &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Institutional Unit &#8597;</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Contact Matrix</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 text-right pr-10">Audit Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hods.map((hod) => (
                  <TableRow key={hod.id} className="group hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-all border-slate-100 dark:border-slate-800/60 h-28">
                    <TableCell className="pl-10">
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-2xl border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-800 flex items-center justify-center font-black text-lg text-indigo-600 shadow-xl shadow-indigo-100 dark:shadow-none transition-transform group-hover:scale-110">
                             {hod.name.charAt(0)}
                          </div>
                          <div>
                             <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-base leading-none mb-2">{hod.name}</p>
                             <Badge variant="outline" className="px-3 py-0.5 text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">Active Appointment</Badge>
                          </div>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400">
                             <Building2 size={16} />
                          </div>
                          <span className="font-bold text-sm text-slate-700 dark:text-slate-300 uppercase tracking-tighter">{hod.department}</span>
                       </div>
                    </TableCell>
                    <TableCell>
                       <div className="space-y-2">
                          <p className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer group/mail">
                             <Mail size={14} className="text-slate-300 group-hover/mail:text-indigo-400" /> {hod.email}
                          </p>
                          <p className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400">
                             <Phone size={14} className="text-slate-300" /> {hod.phone}
                          </p>
                       </div>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                       <div className="flex items-center justify-end gap-3 group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                             <Edit3 size={16} className="text-slate-600 dark:text-slate-400" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                                <MoreVertical size={18} className="text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-60 p-2 rounded-2xl border-slate-200 dark:border-slate-800 shadow-3xl bg-white dark:bg-slate-950 backdrop-blur-xl">
                               <DropdownMenuLabel className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Leadership Protocol</DropdownMenuLabel>
                               <DropdownMenuSeparator className="mx-2 bg-slate-100 dark:bg-slate-800" />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-indigo-50 dark:focus:bg-indigo-900/20 group cursor-pointer transition-colors">
                                  <ShieldCheck size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                  <span className="text-xs font-bold">Permissions Review</span>
                               </DropdownMenuItem>
                               <DropdownMenuSeparator className="mx-2 bg-slate-100 dark:bg-slate-800" />
                               <DropdownMenuItem className="gap-4 py-4 px-4 rounded-xl focus:bg-red-50 dark:focus:bg-red-900/20 text-red-600 dark:text-red-400 group cursor-pointer transition-colors">
                                  <Trash2 size={16} className="group-hover:translate-x-1 transition-transform" />
                                  <span className="text-xs font-black uppercase tracking-tight">Revoke Appointment</span>
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
          <div className="p-10 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Showing <span className="text-slate-900 dark:text-white">1–{hods.length}</span> of <span className="text-slate-900 dark:text-white">{hods.length}</span> records
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-2xl border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest disabled:opacity-50">Previous</Button>
              <div className="flex items-center gap-1">
                <Button size="sm" className="h-10 w-10 rounded-2xl bg-indigo-600 text-white font-black text-[10px]">1</Button>
              </div>
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-2xl border-slate-200 dark:border-slate-800 font-black text-[10px] uppercase tracking-widest disabled:opacity-50">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Footer System Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-indigo-950 text-indigo-200 border-2 border-indigo-900 shadow-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-10">
               <div className="p-6 rounded-3xl bg-indigo-600 text-white shadow-2xl transition-transform group-hover:rotate-12">
                  <UserSquare2 size={40} />
               </div>
               <div>
                  <h6 className="text-white font-black uppercase text-lg tracking-tighter mb-2">Central Authorization Hub</h6>
                  <p className="text-xs font-bold leading-relaxed opacity-70 italic">
                     HOD accounts are master accounts within each department. Changing HOD credentials will reset the digital signature chain for that specific department's certificate queue.
                  </p>
               </div>
            </div>
         </div>
         <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-lg flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 shadow-inner">
               <ShieldCheck size={32} />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Registry Status</p>
               <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">Security Sync: <span className="text-emerald-500">OPTIMAL</span></p>
            </div>
         </div>
      </div>
    </div>
  );
}
