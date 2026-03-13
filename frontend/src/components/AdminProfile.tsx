import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Settings, 
  Globe, 
  Award, 
  Building2, 
  Calendar, 
  Lock,
  Edit3,
  Camera,
  ChevronRight,
  Activity,
  Check,
  X,
  UserCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "System Administrator",
    email: "admin@university.edu",
    phone: "+91 00000 00000",
    office: "Main Server Hub - Room 101",
    tenure: "Since 2018 Academic Cycle",
    encryption: "AES-256 Bit Standard"
  });

  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile({ ...tempProfile });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-6">
           <div className="relative group">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center text-white border-4 border-white dark:border-slate-800 shadow-2xl transition-transform group-hover:scale-105 duration-500">
                 <UserCircle size={48} strokeWidth={1} className="opacity-80" />
              </div>
              <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl border-4 border-white dark:border-slate-900 group-hover:rotate-12 transition-all">
                 <Camera size={16} />
              </Button>
           </div>
           <div>
              <div className="flex items-center gap-3 mb-1.5">
                 <ShieldCheck className="h-4 w-4 text-blue-600" />
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Master Console Protocol</span>
              </div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">{profile.username}</h1>
              <div className="flex items-center gap-3 mt-3">
                 <Badge className="bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest px-3 h-6 border-none">Super Administrator</Badge>
                 <Badge variant="outline" className="border-2 border-slate-200 dark:border-slate-800 text-slate-400 font-black text-[10px] uppercase tracking-widest px-3 h-6">Level 5 Access</Badge>
              </div>
           </div>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="h-12 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all group">
             <Edit3 size={16} className="mr-3 group-hover:-rotate-12 transition-transform" /> Modify Profile
          </Button>
        ) : (
          <div className="flex items-center gap-3">
             <Button onClick={handleCancel} variant="ghost" className="h-12 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500">
                Cancel
             </Button>
             <Button onClick={handleSave} className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-widest shadow-xl">
                <Check size={16} className="mr-2" /> Commit Changes
             </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-12 lg:col-span-8 space-y-10">
          <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <Settings size={20} />
                  </div>
                  <div>
                     <CardTitle className="text-xl font-black uppercase tracking-tighter">Core Identity Matrix</CardTitle>
                     <CardDescription className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1 italic">Administrative credential repository</CardDescription>
                  </div>
               </div>
            </CardHeader>
            <CardContent className="p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { key: "username", label: "Administrator Name", value: tempProfile.username, icon: User },
                  { key: "email", label: "Management Email", value: tempProfile.email, icon: Mail },
                  { key: "phone", label: "Security Contact", value: tempProfile.phone, icon: Phone },
                  { key: "office", label: "Terminal Office", value: tempProfile.office, icon: Building2 },
                  { key: "tenure", label: "Access Tenure", value: tempProfile.tenure, icon: Calendar },
                  { key: "encryption", label: "Encryption Grade", value: tempProfile.encryption, icon: Lock },
                ].map((field, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex items-center gap-3 text-slate-400">
                      <field.icon size={14} className="group-hover:text-blue-500 transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{field.label}</span>
                    </div>
                    {isEditing ? (
                      <Input 
                        value={field.value} 
                        onChange={(e) => setTempProfile({ ...tempProfile, [field.key as keyof typeof tempProfile]: e.target.value })}
                        className="h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl font-bold px-4 focus:ring-2 focus:ring-blue-600"
                      />
                    ) : (
                      <p className="text-sm font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight pl-6 group-hover:translate-x-1 transition-transform">{field.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <Card className="border-none bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl group cursor-pointer overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12 transition-transform group-hover:rotate-0">
                   <Activity size={100} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                   <div className="p-3 bg-white/20 rounded-xl w-fit group-hover:rotate-12 transition-transform shadow-lg">
                      <Award size={24} />
                   </div>
                   <div>
                      <h6 className="text-xl font-black uppercase tracking-tighter mb-1">Infrastructure Hub</h6>
                      <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">Global Server Statistics</p>
                   </div>
                   <ChevronRight className="self-end text-white/50 group-hover:text-white transition-colors" />
                </div>
             </Card>
             <Card className="border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 rounded-[2rem] shadow-lg group cursor-pointer overflow-hidden relative">
                <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                   <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl w-fit group-hover:rotate-12 transition-transform shadow-inner text-blue-600">
                      <Globe size={24} />
                   </div>
                   <div>
                      <h6 className="text-xl font-black uppercase tracking-tighter mb-1 text-slate-900 dark:text-white">External Sync</h6>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">University Mainframe Link</p>
                   </div>
                   <ChevronRight className="self-end text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
             </Card>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 space-y-10">
           <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
              <CardHeader className="p-8 sm:p-10 border-b dark:border-slate-800">
                 <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-3xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-500 shadow-inner">
                       <ShieldCheck size={32} />
                    </div>
                    <div>
                       <CardTitle className="text-base font-black uppercase tracking-tighter">System Health</CardTitle>
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 italic">Real-time Diagnostic Stream</p>
                    </div>
                 </div>
              </CardHeader>
              <CardContent className="p-8 sm:p-10 space-y-8">
                 {[
                    { label: "Terminal Uptime", value: "99.98%", sub: "Live Session Active" },
                    { label: "Registry Sync", value: "Synchronized", sub: "Last update 2m ago" },
                    { label: "Security Patch", value: "v2.01-Stable", sub: "Enterprise Secured" },
                 ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                          <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">{stat.value}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full w-[85%]"></div>
                       </div>
                       <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest text-right">{stat.sub}</p>
                    </div>
                 ))}
                 <Button variant="ghost" className="w-full h-12 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all border-2 border-dashed border-slate-200 dark:border-slate-800">
                    Comprehensive Audit logs
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
