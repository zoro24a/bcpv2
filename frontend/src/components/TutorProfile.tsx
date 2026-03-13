import { 
  Mail, 
  Phone, 
  Building2, 
  GraduationCap, 
  Shield, 
  Edit, 
  Camera,
  Calendar,
  Contact
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function TutorProfile() {
  const profile = {
    username: "tutor_cse_01",
    fullName: "Dr. Robert Winston",
    email: "robert.winston@college.edu",
    phone: "+91 94433 22110",
    department: "Computer Science and Engineering",
    designation: "Assistant Professor",
    batchAssigned: "2021-2025 (A)",
    cabinNumber: "CS-302",
    joinDate: "July 2018",
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-4xl shadow-lg border-4 border-white dark:border-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
              RW
            </div>
            <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-xl shadow-lg border-2 border-white dark:border-slate-900">
               <Camera size={18} />
            </Button>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
               <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">{profile.fullName}</h1>
               <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 border-none px-3 font-semibold">TUTOR</Badge>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium text-lg">{profile.designation}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500 dark:text-slate-400">
               <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full font-medium italic">
                  <span className="text-blue-500 text-xs">@</span>{profile.username}
               </div>
               <div className="flex items-center gap-1.5">
                  <Calendar size={16} /> Joined {profile.joinDate}
               </div>
            </div>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 px-8 h-11">
           <Edit className="mr-2 h-4 w-4" />
           Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card className="border-none shadow-sm shadow-slate-200 dark:shadow-none bg-white dark:bg-slate-900">
            <CardHeader className="border-b dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                 <Contact className="text-blue-600" size={20} />
                 <CardTitle className="text-lg">Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</p>
                  <p className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium">
                     <Mail size={16} className="text-slate-400" />
                     {profile.email}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number</p>
                  <p className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium">
                     <Phone size={16} className="text-slate-400" />
                     {profile.phone}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cabin Number</p>
                  <p className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium font-mono">
                     {profile.cabinNumber}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm shadow-slate-200 dark:shadow-none bg-white dark:bg-slate-900">
            <CardHeader className="border-b dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                 <Building2 className="text-blue-600" size={20} />
                 <CardTitle className="text-lg">Academic Assignment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Department</p>
                  <p className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium">
                     <Building2 size={16} className="text-slate-400" />
                     {profile.department}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Assigned Batch</p>
                  <p className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium">
                     <GraduationCap size={16} className="text-slate-400" />
                     {profile.batchAssigned}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-sm shadow-slate-200 dark:shadow-none bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield size={20} /> Permissions
              </CardTitle>
              <CardDescription className="text-blue-100">Your portal access levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl space-y-3">
                 <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Request Approval</span>
                    <Badge variant="outline" className="text-emerald-300 border-emerald-500/30 bg-emerald-500/10">Active</Badge>
                 </div>
                 <div className="h-px bg-white/10" />
                 <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Student Management</span>
                    <Badge variant="outline" className="text-emerald-300 border-emerald-500/30 bg-emerald-500/10">Active</Badge>
                 </div>
                 <div className="h-px bg-white/10" />
                 <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Bulk Processing</span>
                    <Badge variant="outline" className="text-slate-300 border-white/20 bg-white/10">Limited</Badge>
                 </div>
              </div>
              <p className="text-[10px] text-blue-200 opacity-80 leading-relaxed text-center italic">
                Permissions are managed by the department HOD and System Administrator.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
