import { 
  Users, 
  Clock, 
  Layers,
  ArrowRight,
  UserCheck,
  Building
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function HODDashboard() {
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Pending Requests', 
      value: '28', 
      icon: Clock, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50 dark:bg-amber-900/10',
      border: 'border-amber-100 dark:border-amber-900/20'
    },
    { 
      label: 'Total Students', 
      value: '1,240', 
      icon: Users, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 dark:bg-blue-900/10',
      border: 'border-blue-100 dark:border-blue-900/20'
    },
    { 
      label: 'Active Batches', 
      value: '16', 
      icon: Layers, 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50 dark:bg-indigo-900/10',
      border: 'border-indigo-100 dark:border-indigo-900/20'
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Department Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Overview of certificate requests and student metrics for CSE Dept.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800">
              Department Reports
           </Button>
           <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-semibold px-6" onClick={() => navigate('/hod/pending')}>
              Review Pending
           </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <Card key={stat.label} className={`border ${stat.border} shadow-sm bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden transition-all hover:shadow-md`}>
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.value}</h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                     Updated just now
                  </div>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3.5 rounded-lg border ${stat.border}`}>
                  <stat.icon size={26} strokeWidth={2.5} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Quick Review Table */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/50 overflow-hidden">
           <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-900/50">
              <div>
                 <h4 className="text-base font-bold text-slate-800 dark:text-white">Recent Tenders for Approval</h4>
                 <p className="text-xs text-slate-500 mt-0.5">Quick lookup of latest high-priority requests</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 text-xs font-bold gap-1.5 hover:text-blue-700" onClick={() => navigate('/hod/pending')}>
                 See All <ArrowRight size={14} />
              </Button>
           </div>
           <CardContent className="p-0">
             <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { name: 'David Miller', reg: '2021BCS102', tutor: 'Dr. Robert', date: 'March 13, 2024' },
                  { name: 'Emma Watson', reg: '2021BCS045', tutor: 'Dr. Sarah', date: 'March 12, 2024' },
                  { name: 'Michael Chen', reg: '2022BCS021', tutor: 'Prof. James', date: 'March 12, 2024' },
                ].map((item, i) => (
                  <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                     <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold border border-slate-200 dark:border-slate-700 transition-colors group-hover:border-blue-500">
                           {item.name.charAt(0)}
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-none">{item.name}</p>
                           <p className="text-xs text-slate-500 mt-1.5 font-medium">{item.reg} • {item.tutor}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.date}</p>
                        <Button variant="link" className="h-auto p-0 text-blue-600 text-[11px] font-bold mt-1" onClick={() => navigate('/hod/pending')}>
                           Review Now
                        </Button>
                     </div>
                  </div>
                ))}
             </div>
           </CardContent>
        </Card>

        {/* Academic Status */}
        <div className="space-y-8">
           <Card className="border-none shadow-sm bg-slate-900 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <Building size={160} />
              </div>
              <div className="relative z-10 space-y-6">
                 <div>
                    <h4 className="text-xl font-extrabold tracking-tight">Department Status</h4>
                    <p className="text-slate-400 text-sm mt-1">Academic Year 2023-24</p>
                 </div>
                 
                 <div className="space-y-5">
                    {[
                      { label: 'Approval Turnaround', value: '0.8 Days', color: 'bg-emerald-500' },
                      { label: 'Request Volume', value: 'High', color: 'bg-indigo-500' },
                      { label: 'System Health', value: 'Stable', color: 'bg-blue-500' },
                    ].map((m, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-slate-800 transition-hover hover:bg-slate-800">
                         <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${m.color}`}></div>
                            <span className="text-sm font-semibold">{m.label}</span>
                         </div>
                         <span className="text-sm font-bold text-slate-300">{m.value}</span>
                      </div>
                    ))}
                 </div>

                 <Button variant="secondary" className="w-full h-11 bg-white text-slate-900 hover:bg-slate-100 font-bold">
                    Go to Settings
                 </Button>
              </div>
           </Card>

           <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                 <div className="p-3 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 rounded-lg">
                    <UserCheck size={20} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Tutors Active</p>
                    <p className="text-xl font-extrabold">24 / 24</p>
                 </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                 <div className="p-3 bg-blue-50 dark:bg-blue-900/10 text-blue-600 rounded-lg">
                    <Building size={20} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Offices Sync</p>
                    <p className="text-xl font-extrabold">Online</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
