import { 
  ClipboardCheck, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  ArrowUpRight,
  ShieldCheck,
  Bell,
  ChevronRight,
  FileText
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

export function OfficeDashboard() {
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Ready to Issue', 
      value: '24', 
      icon: ClipboardCheck, 
      color: 'text-cyan-600', 
      border: 'border-cyan-200 dark:border-cyan-900/30',
      bg: 'bg-cyan-50 dark:bg-cyan-900/10',
      desc: 'Principal approved',
      path: '/office/requests'
    },
    { 
      label: 'Total Issued', 
      value: '1,420', 
      icon: CheckCircle2, 
      color: 'text-emerald-600', 
      border: 'border-emerald-200 dark:border-emerald-900/30',
      bg: 'bg-emerald-50 dark:bg-emerald-900/10',
      desc: 'Certificates generated',
      path: '/office/issued'
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
           <div className="flex items-center gap-2 mb-1.5">
              <Activity className="h-4 w-4 text-cyan-500" />
              <span className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.3em]">Terminal Operations</span>
           </div>
           <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Administrative Hub</h1>
           <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic">Master console for certificate issuance and registry synchronization.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-11 px-5 rounded-xl border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
              Generate Audit
           </Button>
           <Button className="h-11 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-200 dark:shadow-none transition-all active:scale-95" onClick={() => navigate('/office/requests')}>
              Process Requests
           </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((stat) => (
          <Card key={stat.label} className={`border-2 ${stat.border} shadow-sm bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group relative cursor-pointer`} onClick={() => navigate(stat.path)}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                   <div className="flex items-center gap-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                      <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-cyan-500 transition-colors" />
                   </div>
                   <div className="flex items-baseline gap-3">
                      <h3 className="text-4xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.value}</h3>
                      <div className="flex items-center text-emerald-500 font-bold text-xs bg-emerald-50 dark:bg-emerald-900/10 px-2 py-0.5 rounded-lg">
                        <TrendingUp size={12} className="mr-1" /> +12%
                      </div>
                   </div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-70 italic">{stat.desc}</p>
                </div>
                <div className={`${stat.bg} ${stat.color} w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all group-hover:scale-110 shadow-inner -rotate-6 group-hover:rotate-0 duration-500 border border-white dark:border-slate-800`}>
                  <stat.icon size={36} strokeWidth={2.5} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
         {/* System integrity section */}
         <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900/40 rounded-[2.5rem] overflow-hidden border-2">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xl">
                     <ShieldCheck size={24} />
                  </div>
                  <div>
                     <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Staff Protocol Sync</h4>
                     <p className="text-xs text-slate-500 font-black mt-1 uppercase tracking-widest italic leading-none">Security Grid Activated</p>
                  </div>
               </div>
               <Badge className="bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest px-3 h-7 border-none shadow-sm">Online</Badge>
            </div>
            <CardContent className="p-10">
               <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-1 space-y-6">
                     <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        The office terminal is currently synchronized with the University registry mainframe. All Principal-approved requests are queued for immediate issuance.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 min-w-[140px]">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Issue Rate</p>
                           <p className="text-xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">98.5%</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 min-w-[140px]">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Registry Lag</p>
                           <p className="text-xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">0.4ms</p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-64 space-y-4">
                     {[
                        { label: 'Cloud Buffer', value: 'OPTIMAL' },
                        { label: 'PDF Generator', value: 'STABLE' },
                        { label: 'Digital Sign', value: 'ACTIVE' },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm group hover:border-cyan-200 transition-colors">
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                           <span className="text-[10px] font-black text-emerald-500 uppercase">{item.value}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* Notifications / Alerts */}
         <div className="space-y-8">
            <Card className="border-none bg-gradient-to-br from-cyan-600 to-blue-800 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                  <Bell size={180} />
               </div>
               <div className="relative z-10 space-y-10">
                  <div>
                     <Badge className="bg-white/20 text-white font-black text-[8px] uppercase tracking-widest px-2 h-5 border-none mb-4">Urgent Protocol</Badge>
                     <h5 className="text-2xl font-black uppercase tracking-tighter leading-tight">Batch Issue Queue Running Low</h5>
                     <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-widest mt-3 leading-relaxed opacity-70">Requires HOD level registry refresh in 4 hours.</p>
                  </div>
                  <Button className="w-full h-12 bg-white text-cyan-900 hover:bg-cyan-50 font-black text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-xl active:scale-95">
                     Initiate Refresh
                  </Button>
               </div>
            </Card>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between group cursor-pointer hover:border-cyan-500 transition-all">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 shadow-inner group-hover:scale-110 transition-transform">
                     <FileText size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">View Archive</p>
                     <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none italic">Issued Stack v2.1</p>
                  </div>
               </div>
               <ChevronRight size={18} className="text-slate-300 group-hover:text-cyan-600 transition-colors" />
            </div>
         </div>
      </div>
    </div>
  );
}
