import { 
  Mail, 
  Phone, 
  ShieldCheck, 
  Edit3, 
  Camera,
  Globe,
  Award,
  Building2,
  Calendar,
  Lock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function PrincipalProfile() {
  const profile = {
    username: "principal_henderson",
    fullName: "Dr. Arthur Henderson",
    email: "principal@university.edu",
    phone: "+91 99887 76655",
    role: "Institutional Principal",
    office: "Main Administration Block, Suite 101",
    tenure: "Serving since 2015",
    specialization: "Educational Leadership & Strategic Management"
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Profile Banner */}
      <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900">
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black"></div>
         <div className="absolute inset-0 opacity-20 flex items-center justify-center">
            <Globe size={400} className="text-white" strokeWidth={0.5} />
         </div>
         <div className="absolute bottom-10 left-10 flex items-end gap-8">
            <div className="relative group">
               <div className="w-32 h-32 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-600 font-black text-5xl shadow-2xl relative overflow-hidden transition-all group-hover:scale-105">
                  AH
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                     <Camera size={24} className="text-white" />
                  </div>
               </div>
               <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-xl border-4 border-slate-900 ring-2 ring-white">
                  <ShieldCheck size={20} className="text-white" />
               </div>
            </div>
            <div className="mb-2 space-y-2">
               <div className="flex items-center gap-4">
                  <h1 className="text-4xl font-black text-white tracking-tighter uppercase">{profile.fullName}</h1>
                  <Badge className="bg-white text-indigo-900 font-black text-[10px] uppercase tracking-widest border-none px-3 h-6">Principal</Badge>
               </div>
               <p className="text-indigo-200/70 font-bold uppercase text-xs tracking-[0.3em]">{profile.role}</p>
            </div>
         </div>
         <div className="absolute top-10 right-10">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 font-black text-xs uppercase tracking-widest h-12 px-8 rounded-xl shadow-2xl">
               <Edit3 className="mr-3 h-4 w-4" /> Edit Profile
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         <div className="lg:col-span-8 space-y-10">
            <Card className="border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden">
               <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center shadow-sm">
                        <Award size={20} />
                     </div>
                     <div>
                        <CardTitle className="text-xl font-black uppercase tracking-tight">Executive Credentials</CardTitle>
                        <CardDescription className="text-xs font-bold uppercase tracking-wider mt-0.5">Verification & Authorization levels</CardDescription>
                     </div>
                  </div>
               </CardHeader>
               <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-6">
                        <div className="p-5 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-transparent">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Academic Standing</p>
                           <p className="font-bold text-slate-800 dark:text-slate-200 leading-relaxed italic">"Lead Strategist for the 2024 Institution Digital Transformation Initiative."</p>
                        </div>
                        <div className="space-y-1.5 flex flex-col items-start pl-1">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Primary Specialization</p>
                           <p className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">{profile.specialization}</p>
                        </div>
                     </div>
                     <div className="space-y-8">
                        {[
                          { label: 'Institutional Tenure', value: profile.tenure, icon: Calendar },
                          { label: 'Primary Department', value: 'General Administration', icon: Building2 },
                        ].map((item, i) => (
                           <div key={i} className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                                 <item.icon size={18} />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{item.label}</p>
                                 <p className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.value}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-8">
                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
                        <Lock size={24} />
                     </div>
                     <Badge className="bg-emerald-500 text-white border-none font-black text-[10px] uppercase transition-colors group-hover:bg-emerald-400">Security Active</Badge>
                  </div>
                  <div>
                     <h6 className="text-lg font-black uppercase tracking-tighter mb-2">Administrative Keys</h6>
                     <p className="text-xs font-bold text-slate-400 leading-relaxed">
                        Access level: <span className="text-white underline">L5 MASTER</span>. Your digital signature is synchronized with university registry servers.
                     </p>
                  </div>
               </div>
               <div className="p-8 rounded-3xl bg-indigo-600 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                     <Globe size={100} />
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white border border-white/20 mb-8">
                        <Globe size={24} />
                     </div>
                     <div>
                        <h6 className="text-lg font-black uppercase tracking-tighter mb-2">Global Registry Sync</h6>
                        <p className="text-xs font-bold text-indigo-100 leading-relaxed opacity-80">
                           Connecting to institutional mainframe... <br/>
                           <span className="font-black uppercase mt-2 block">STATUS: ONLINE</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 space-y-10">
            <Card className="border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border-2">
               <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-lg font-black uppercase tracking-tight">Direct Access</CardTitle>
                  <CardDescription className="font-bold text-[10px] uppercase tracking-widest mt-1 text-slate-400">Personal & Office Contact</CardDescription>
               </CardHeader>
               <CardContent className="p-8 pt-4 space-y-8">
                  <div className="space-y-4">
                     <div className="space-y-1.5">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Official Email</p>
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-inner group cursor-pointer hover:border-indigo-400 transition-colors">
                           <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg text-indigo-600 shadow-sm border border-slate-100 dark:border-slate-700">
                              <Mail size={16} />
                           </div>
                           <span className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">{profile.email}</span>
                        </div>
                     </div>
                     <div className="space-y-1.5">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Personal Contact</p>
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-inner group cursor-pointer hover:border-indigo-400 transition-colors">
                           <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:text-indigo-600 transition-colors">
                              <Phone size={16} />
                           </div>
                           <span className="text-xs font-black text-slate-800 dark:text-slate-100">{profile.phone}</span>
                        </div>
                     </div>
                  </div>

                  <div className="pt-4">
                     <div className="p-6 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                           <Building2 size={12} /> Office HQ
                        </p>
                        <p className="text-xs font-bold text-slate-600 dark:text-slate-400 italic leading-relaxed">
                           {profile.office}
                        </p>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <div className="p-8 rounded-3xl bg-gradient-to-tr from-slate-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden group">
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Institutional Notice</p>
                     <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  </div>
                  <h6 className="text-xl font-black uppercase tracking-tighter leading-tight">Digital Approval Chain <br/>is Synchronized</h6>
                  <p className="text-xs font-medium text-slate-400 leading-relaxed">
                     Your biometrics and hardware keys are currently registered for the 2024 academic cycle.
                  </p>
                  <Button variant="outline" className="w-full border-slate-700 hover:bg-white hover:text-slate-900 font-black text-[10px] uppercase tracking-widest h-11 rounded-xl transition-all">
                     Verify Digital Keys
                  </Button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
