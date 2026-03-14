import { 
  Users, 
  Building2, 
  UserSquare2, 
  Clock,
  TrendingUp,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Settings,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

import { useState, useEffect } from 'react';
import { adminService } from '@/services/api';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [statsData, setStatsData] = useState({
    pending_requests: 0,
    total_departments: 0,
    total_students: 0,
    total_tutors: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await adminService.getStats();
        setStatsData(response.data);
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { 
      label: 'Pending Requests', 
      value: statsData.pending_requests.toLocaleString(), 
      icon: Clock, 
      color: 'text-amber-600', 
      border: 'border-amber-200 dark:border-amber-900/30',
      bg: 'bg-amber-50 dark:bg-amber-900/10',
      path: '/admin/dashboard'
    },
    { 
      label: 'Total Departments', 
      value: statsData.total_departments.toLocaleString(), 
      icon: Building2, 
      color: 'text-indigo-600', 
      border: 'border-indigo-200 dark:border-indigo-900/30',
      bg: 'bg-indigo-50 dark:bg-indigo-900/10',
      path: '/admin/departments'
    },
    { 
      label: 'Total Students', 
      value: statsData.total_students.toLocaleString(), 
      icon: Users, 
      color: 'text-blue-600', 
      border: 'border-blue-200 dark:border-blue-900/30',
      bg: 'bg-blue-50 dark:bg-blue-900/10',
      path: '/admin/students'
    },
    { 
      label: 'Total Tutors', 
      value: statsData.total_tutors.toLocaleString(), 
      icon: UserSquare2, 
      color: 'text-emerald-600', 
      border: 'border-emerald-200 dark:border-emerald-900/30',
      bg: 'bg-emerald-50 dark:bg-emerald-900/10',
      path: '/admin/tutors'
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 font-bold animate-pulse">Synchronizing Console...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
           <div className="flex items-center gap-2 mb-1.5">
              <Activity className="h-4 w-4 text-blue-600" />
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Operational Overview</span>
           </div>
           <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">Central Console</h1>
           <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic">Master control panel for college-wide certificate management.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-11 px-5 rounded-xl border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
              System Audit
           </Button>
           <Button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-200 dark:shadow-none transition-all active:scale-95" onClick={() => navigate('/admin/departments')}>
              Admin Action
           </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className={`border-2 ${stat.border} shadow-sm bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group relative cursor-pointer`} onClick={() => navigate(stat.path)}>
            <CardContent className="p-7">
              <div className="flex flex-col gap-6">
                <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-white dark:border-slate-800`}>
                  <stat.icon size={28} strokeWidth={2.2} />
                </div>
                <div>
                   <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                      <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                   </div>
                   <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.value}</h3>
                      <TrendingUp className="text-emerald-500 h-3.5 w-3.5" />
                   </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-black text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">View Module</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* System Integrity */}
         <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border-2">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white dark:bg-blue-600 flex items-center justify-center shadow-lg">
                     <ShieldCheck size={24} />
                  </div>
                  <div>
                     <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">System Integrity Status</h4>
                     <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider italic">Registry & Security Compliance</p>
                  </div>
               </div>
               <Badge className="bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest px-3 h-7 border-none shadow-sm">All Systems Healthy</Badge>
            </div>
            <CardContent className="p-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                     <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        The BCP v2 system registry is currently synchronized with the University Mainframe. No anomalies detected in the last 24 certification cycles.
                     </p>
                     <div className="flex items-center gap-6">
                        <div className="text-center">
                           <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">99.9%</p>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Uptime</p>
                        </div>
                        <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />
                        <div className="text-center">
                           <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">1.2s</p>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">LATENCY</p>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     {[
                        { label: 'Blockchain Verification', status: 'Optimal' },
                        { label: 'Database Backup', status: 'Secured' },
                        { label: 'Cloud Sync', status: 'Active' },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                           <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.label}</span>
                           <div className="flex items-center gap-2 text-emerald-500">
                              <CheckCircle2 size={14} />
                              <span className="text-[10px] font-black uppercase">{item.status}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* Quick Links / Actions */}
         <div className="space-y-6">
            <Card className="border-none bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute -top-6 -right-6 p-10 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-0">
                  <Settings size={180} />
               </div>
               <div className="relative z-10 space-y-8">
                  <div>
                     <h5 className="text-xl font-black uppercase tracking-tighter mb-1.5">Administrative Hub</h5>
                     <p className="text-blue-100 text-xs font-bold uppercase tracking-wider opacity-70">Master Registry Controls</p>
                  </div>
                  <div className="space-y-3">
                     <Button className="w-full h-12 bg-white text-blue-900 hover:bg-blue-50 font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-all">
                        Onboard Faculty
                     </Button>
                     <Button variant="ghost" className="w-full h-12 text-white border border-white/20 hover:bg-white/10 font-black text-[10px] uppercase tracking-widest rounded-xl transition-all">
                        System Configuration
                     </Button>
                  </div>
               </div>
            </Card>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-5 group cursor-pointer hover:border-blue-500 transition-all">
               <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 shadow-inner group-hover:scale-110 transition-transform">
                  <Activity size={24} />
               </div>
               <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Traffic Monitor</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none italic">+14% Usage today</p>
               </div>
               <ChevronRight className="text-slate-300 group-hover:text-blue-600 transition-colors" />
            </div>
         </div>
      </div>
    </div>
  );
}
