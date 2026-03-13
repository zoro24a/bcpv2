import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Camera, 
  ShieldCheck, 
  Globe, 
  Clock,
  Save,
  XCircle,
  Edit3,
  Building
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { notifications } from '@mantine/notifications';

export function OfficeProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: 'Office_Admin_01',
    email: 'office@college.edu',
    phone: '+91 98765 43210',
    role: 'Administrative Officer',
    department: 'Office of Registry',
    lastLogin: '2024-03-13 10:30 AM'
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    notifications.show({
      title: 'Profile Updated',
      message: 'Administrative credentials have been synchronized.',
      color: 'cyan',
    });
  };

  const handleCancel = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="relative group">
            <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-5xl font-black shadow-2xl border-4 border-white dark:border-slate-900 overflow-hidden transform transition-transform group-hover:scale-105 duration-500">
              OA
            </div>
            <Button size="icon" className="absolute -bottom-2 -right-2 h-12 w-12 rounded-2xl bg-slate-900 border-4 border-white dark:border-slate-900 text-white shadow-xl hover:bg-cyan-600 transition-colors">
              <Camera size={20} />
            </Button>
          </div>
          <div className="text-center md:text-left space-y-3">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
               <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">{profile.username}</h1>
               <Badge className="bg-cyan-600 text-white font-black text-[10px] uppercase tracking-[0.2em] px-3 h-7">Staff Protocol</Badge>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-slate-500 dark:text-slate-400 font-bold text-sm">
               <div className="flex items-center gap-2">
                  <Building size={16} className="text-cyan-500" /> {profile.department}
               </div>
               <div className="flex items-center gap-2">
                  <Clock size={16} className="text-cyan-500" /> Last Auth: {profile.lastLogin}
               </div>
            </div>
          </div>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="h-14 px-8 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
             <Edit3 size={16} className="mr-3" /> Edit Credentials
          </Button>
        ) : (
          <div className="flex items-center gap-3">
             <Button variant="outline" onClick={handleCancel} className="h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 font-black text-[11px] uppercase tracking-widest shadow-md">
                <XCircle size={16} className="mr-3" /> Cancel
             </Button>
             <Button onClick={handleSave} className="h-14 px-10 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-cyan-200 dark:shadow-none active:scale-95 transition-all">
                <Save size={16} className="mr-3" /> Save Changes
             </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
           <Card className="border-2 border-slate-100 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40">
              <CardHeader className="p-10 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                 <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-3">
                    <User size={20} className="text-cyan-600" />
                    Staff Identity Matrix
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Console Username</label>
                       {isEditing ? (
                          <Input value={editedProfile.username} onChange={e => setEditedProfile({...editedProfile, username: e.target.value})} className="h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 font-bold px-5" />
                       ) : (
                          <p className="text-sm font-black text-slate-900 dark:text-white leading-none px-1">{profile.username}</p>
                       )}
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Operational Role</label>
                       <p className="text-sm font-black text-slate-900 dark:text-white leading-none px-1">{profile.role}</p>
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Official Mail Terminal</label>
                       {isEditing ? (
                          <div className="relative group">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-cyan-500" />
                             <Input value={editedProfile.email} onChange={e => setEditedProfile({...editedProfile, email: e.target.value})} className="h-14 pl-12 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 font-bold" />
                          </div>
                       ) : (
                          <div className="flex items-center gap-2 px-1">
                             <Mail size={14} className="text-cyan-500" />
                             <p className="text-sm font-black text-slate-900 dark:text-white leading-none">{profile.email}</p>
                          </div>
                       )}
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Secure Contact Line</label>
                       {isEditing ? (
                          <div className="relative group">
                             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-cyan-500" />
                             <Input value={editedProfile.phone} onChange={e => setEditedProfile({...editedProfile, phone: e.target.value})} className="h-14 pl-12 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 font-bold" />
                          </div>
                       ) : (
                          <div className="flex items-center gap-2 px-1">
                             <Phone size={14} className="text-cyan-500" />
                             <p className="text-sm font-black text-slate-900 dark:text-white leading-none">{profile.phone}</p>
                          </div>
                       )}
                    </div>
                 </div>
              </CardContent>
           </Card>

           <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-20 opacity-10 rotate-12 transition-transform duration-1000 group-hover:rotate-0">
                 <ShieldCheck size={200} />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                 <div className="space-y-4">
                    <h5 className="text-xl font-black uppercase tracking-tighter">Security Protocol Meta</h5>
                    <p className="max-w-md text-slate-400 text-xs font-bold leading-relaxed italic">Your account is synchronized with the University Security Mesh. Multi-factor authentication is active on all generated certificate transactions.</p>
                 </div>
                 <Button className="h-12 px-8 rounded-xl bg-white text-slate-900 hover:bg-cyan-50 font-black text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                    Security Audit
                 </Button>
              </div>
           </div>
        </div>

        <div className="space-y-10">
           <Card className="border-2 border-slate-100 dark:border-slate-800 shadow-xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40">
              <CardHeader className="p-8 border-b border-slate-100 dark:border-slate-800">
                 <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                    <Globe size={16} className="text-emerald-500" />
                    Active Proxy
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                 {[
                    { label: 'Cloud Terminal', status: 'Global South-01', active: true },
                    { label: 'Registry Sync', status: 'Synchronized', active: true },
                    { label: 'Matrix Hash', status: '0x4F...E82', active: false },
                 ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                       <div className="flex items-center justify-between">
                          <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.status}</span>
                          {item.active && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>}
                       </div>
                    </div>
                 ))}
              </CardContent>
           </Card>

           <div className="p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 text-center space-y-4 group hover:border-cyan-500 transition-colors cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950 group-hover:text-cyan-600 transition-all mx-auto shadow-inner">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter">Request Password Matrix</p>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Registry Protocol 4.2</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
