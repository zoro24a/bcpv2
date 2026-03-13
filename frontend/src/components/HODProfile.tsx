import { 
  Mail, 
  Phone, 
  Building2, 
  ShieldCheck, 
  Edit3, 
  Camera,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HODProfile() {
  const profile = {
    username: "hod_cse_robert",
    fullName: "Dr. Robert Winston",
    email: "robert.winston@university.edu",
    phone: "+91 94455 66778",
    department: "Computer Science and Engineering",
    designation: "Professor & Head of Department",
    cabinNumber: "ADMIN-02 (Ground Floor)",
    joinDate: "June 2012",
    qualifications: ["Ph.D. in AI & Robotics", "M.Tech CSE", "B.Tech IT"]
  };

  return (
    <div className="space-y-10 max-w-6xl animate-in fade-in duration-500">
      {/* Profile Header */}
       <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <div className="relative">
            <div className="w-36 h-36 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-800 dark:text-slate-200 font-extrabold text-5xl shadow-xl border-4 border-white dark:border-slate-900 ring-2 ring-slate-100 dark:ring-slate-800 overflow-hidden relative group">
              RW
              <div className="absolute inset-0 bg-slate-900/40 font-bold text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                 <Camera size={24} className="text-white" />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
               <ShieldCheck size={20} className="text-white" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
               <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{profile.fullName}</h1>
               <Badge className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-3 py-1 font-extrabold uppercase text-[10px] tracking-widest border-none">HOD</Badge>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-lg uppercase tracking-wider">{profile.designation}</p>
            <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start text-xs font-bold text-slate-400 uppercase tracking-widest">
               <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded text-blue-600 dark:text-blue-400">
                  @{profile.username}
               </div>
               <div className="flex items-center gap-2">
                  <Calendar size={16} /> Member since {profile.joinDate}
               </div>
            </div>
          </div>
        </div>
        <Button className="bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-white font-bold px-8 h-12 shadow-xl shadow-slate-200 dark:shadow-none">
           <Edit3 className="mr-2 h-4 w-4" />
           Update Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/50">
            <CardHeader className="border-b dark:border-slate-800 pb-5 px-8 pt-8">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <Award className="text-blue-600" size={22} />
                    <CardTitle className="text-lg font-bold">Academic Qualifications</CardTitle>
                 </div>
                 <Edit3 className="text-slate-300 hover:text-blue-500 cursor-pointer transition-colors" size={18} />
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profile.qualifications.map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 overflow-hidden">
                     <BookOpen className="text-slate-400 mt-1" size={18} />
                     <span className="font-bold text-slate-800 dark:text-slate-200 text-sm leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/50">
            <CardHeader className="border-b dark:border-slate-800 pb-5 px-8 pt-8">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <Building2 className="text-blue-600" size={22} />
                    <CardTitle className="text-lg font-bold">University Placement</CardTitle>
                 </div>
                 <Edit3 className="text-slate-300 hover:text-blue-500 cursor-pointer transition-colors" size={18} />
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-1.5">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Department</p>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{profile.department}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Office Location</p>
                  <p className="font-bold text-slate-900 dark:text-slate-100 italic">{profile.cabinNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-10">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/50 overflow-hidden">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/30 border-b dark:border-slate-800 p-8">
              <CardTitle className="text-lg font-bold">Contact Details</CardTitle>
              <CardDescription className="font-semibold text-xs uppercase tracking-widest mt-1">Direct Communication</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-1.5">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Direct Email</p>
                <div className="flex items-center gap-3 text-sm font-bold text-blue-600 dark:text-blue-400">
                   <Mail size={16} />
                   {profile.email}
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Internal Phone</p>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                   <Phone size={16} />
                   {profile.phone}
                </div>
              </div>
              <Button variant="outline" className="w-full border-slate-200 dark:border-slate-800 h-11 text-xs font-bold uppercase tracking-widest mt-4">
                 Setup Office Hours
              </Button>
            </CardContent>
          </Card>

          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award size={100} />
             </div>
             <div className="relative z-10 space-y-4">
                <h5 className="font-extrabold text-lg leading-tight uppercase tracking-tighter">System Access Level</h5>
                <div className="h-1 w-12 bg-white/40 rounded-full" />
                <p className="text-xs font-bold text-blue-100 leading-relaxed italic opacity-90">
                  Full Administrative Control for the Computer Science & Engineering Department. Signature authority for digitsal bonafide certificates.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
