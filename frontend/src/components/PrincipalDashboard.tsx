import { 
  Users, 
  UserCog,
  Clock, 
  Building2,
  TrendingUp,
  FileCheck2,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function PrincipalDashboard() {
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Total Students', 
      value: '4,850', 
      icon: Users, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 dark:bg-blue-900/10',
      description: '+124 this semester'
    },
    { 
      label: 'Total Staff', 
      value: '312', 
      icon: UserCog, 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50 dark:bg-indigo-900/10',
      description: 'Active faculty & admin'
    },
    { 
      label: 'Pending Reviews', 
      value: '12', 
      icon: Clock, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50 dark:bg-amber-900/10',
      description: 'High priority backlog'
    },
    { 
      label: 'Total Departments', 
      value: '8', 
      icon: Building2, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 dark:bg-emerald-900/10',
      description: 'CSE, ECE, MECH, etc.'
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Executive Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1.5 font-medium text-lg italic">Comprehensive oversight of institutional academic certification.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-12 px-6 border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest bg-white dark:bg-slate-900 shadow-sm">
              Institution Report
           </Button>
           <Button className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95" onClick={() => navigate('/principal/pending')}>
              Review Requests
           </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group">
            <CardContent className="p-8">
              <div className="flex flex-col gap-6">
                <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-2xl border-white dark:border-slate-900 border-2 shadow-sm flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <stat.icon size={28} strokeWidth={2.2} />
                </div>
                <div>
                   <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                   <div className="flex items-baseline gap-2 mt-1">
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.value}</h3>
                      <TrendingUp className="text-emerald-500 h-4 w-4" />
                   </div>
                   <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold mt-2 uppercase tracking-tight">{stat.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Department Overview Action */}
        <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/50 overflow-hidden rounded-2xl">
           <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <Building2 size={20} />
                 </div>
                 <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Department Performance</h4>
                    <p className="text-xs text-slate-500 font-bold mt-0.5">Approval rates by academic department</p>
                 </div>
              </div>
              <Button variant="ghost" className="text-indigo-600 h-9 font-black text-xs uppercase tracking-widest gap-2 hover:text-indigo-700" onClick={() => navigate('/principal/departments')}>
                 Full Report <ArrowRight size={14} />
              </Button>
           </div>
           <CardContent className="p-8">
             <div className="space-y-8">
                {[
                  { dept: 'Computer Science & Engineering', rate: 98, pending: 4 },
                  { dept: 'Electronics & Communication', rate: 94, pending: 2 },
                  { dept: 'Mechanical Engineering', rate: 89, pending: 3 },
                  { dept: 'Civil Engineering', rate: 92, pending: 1 },
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="flex items-center justify-between mb-2.5">
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-blue-600">{item.dept}</span>
                        <div className="flex items-center gap-4">
                           <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">{item.pending} Awaiting</span>
                           <span className="text-sm font-black text-slate-900 dark:text-white">{item.rate}%</span>
                        </div>
                     </div>
                     <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 rounded-full transition-all duration-1000" 
                          style={{ width: `${item.rate}%` }}
                        />
                     </div>
                  </div>
                ))}
             </div>
           </CardContent>
        </Card>

        {/* Global System Alerts */}
        <div className="space-y-6">
           <Card className="border-none bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500 text-white">
                 <FileCheck2 size={140} />
              </div>
              <div className="relative z-10 space-y-6">
                 <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter">Institution Health</h4>
                    <p className="text-slate-400 text-xs font-bold mt-1">Real-time status monitor</p>
                 </div>
                 
                 <div className="space-y-4">
                    {[
                      { label: 'Security Protocols', status: 'Optimal', icon: ShieldAlert, color: 'text-emerald-400' },
                      { label: 'System Uptime', status: '99.9%', icon: TrendingUp, color: 'text-blue-400' },
                    ].map((m, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
                         <div className="flex items-center gap-3">
                            <m.icon size={18} className={m.color} />
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{m.label}</span>
                         </div>
                         <span className="text-xs font-black text-white">{m.status}</span>
                      </div>
                    ))}
                 </div>

                 <Button className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                    System Audit Logs
                 </Button>
              </div>
           </Card>

           <div className="bg-indigo-600/10 dark:bg-indigo-600/5 border border-indigo-600/20 dark:border-indigo-600/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                    <TrendingUp size={16} />
                 </div>
                 <h5 className="font-bold text-sm text-indigo-900 dark:text-indigo-400 uppercase tracking-tight">Active Usage</h5>
              </div>
              <p className="text-xs text-indigo-700/70 dark:text-indigo-400/60 font-medium leading-relaxed">
                 The portal is currently processing 
                 <span className="font-bold text-indigo-900 dark:text-indigo-300 mx-1 underline text-base tabular-nums">142</span>
                 active certificate requests today. Average processing time is down by 15.2%.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
