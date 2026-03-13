import { 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function TutorDashboard() {
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Total Students', 
      value: '42', 
      icon: Users, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'assigned to your batches'
    },
    { 
      label: 'Pending Requests', 
      value: '8', 
      icon: Clock, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      description: 'require your review'
    },
    { 
      label: 'Approved Requests', 
      value: '156', 
      icon: CheckCircle, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      description: 'in current academic year'
    },
    { 
      label: 'Rejected Requests', 
      value: '12', 
      icon: XCircle, 
      color: 'text-red-600', 
      bg: 'bg-red-50 dark:bg-red-900/20',
      description: 'returned for corrections'
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back, Tutor!</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage student requests and track certificate approvals.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-md bg-white dark:bg-slate-900 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-slate-500">
                    <TrendingUp size={12} />
                    {stat.description}
                  </p>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions / Recent activity could go here */}
        <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-sm">
           <CardHeader>
              <div className="flex items-center justify-between">
                 <div>
                    <CardTitle>Recent Pending Requests</CardTitle>
                    <CardDescription>Latest submissions awaiting your action</CardDescription>
                 </div>
                 <Clock className="text-slate-400" size={20} />
              </div>
           </CardHeader>
           <CardContent className="space-y-4">
              {[
                { name: 'John Doe', reg: '2021BCS001', type: 'Bonafide - Internship', date: '1 hour ago' },
                { name: 'Alice Smith', reg: '2021BCS015', type: 'Bonafide - Competition', date: '3 hours ago' },
                { name: 'Bob Wilson', reg: '2021BCS044', type: 'Bonafide - Bank Loan', date: '6 hours ago' },
              ].map((req, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-200 dark:hover:border-blue-900 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                       {req.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{req.name}</p>
                      <p className="text-xs text-slate-400">{req.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">{req.date}</p>
                    <Button variant="link" className="h-auto p-0 text-blue-600 text-xs" onClick={() => navigate('/tutor/pending')}>
                       Review Request
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2" onClick={() => navigate('/tutor/pending')}>
                View All Pending Requests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
           </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none shadow-xl flex flex-col">
           <CardHeader>
              <CardTitle className="text-xl">Batch Performance</CardTitle>
              <CardDescription className="text-slate-400">Monthly overview</CardDescription>
           </CardHeader>
           <CardContent className="flex-1 flex flex-col justify-center gap-6">
              <div className="space-y-4">
                 {[
                   { label: 'Completion Rate', value: '85%', color: 'bg-emerald-500' },
                   { label: 'Approval Speed', value: '1.2 days', color: 'bg-blue-500' },
                   { label: 'Student Satisfaction', value: '4.8/5', color: 'bg-amber-500' },
                 ].map((metric, i) => (
                   <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                         <span>{metric.label}</span>
                         <span className="text-slate-400">{metric.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className={`h-full ${metric.color}`} style={{ width: metric.value.includes('%') ? metric.value : '40%' }}></div>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-slate-400">
                 <Users size={18} />
                 <span className="text-sm">Batch: CSE 2021-2025 (A)</span>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
