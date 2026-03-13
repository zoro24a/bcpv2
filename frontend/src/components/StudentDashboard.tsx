import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowRight,
  TrendingUp,
  History
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function StudentDashboard() {
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Total Requests', 
      value: '12', 
      icon: FileText, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'lifetime submissions'
    },
    { 
      label: 'Approved', 
      value: '8', 
      icon: CheckCircle, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      description: 'ready to download'
    },
    { 
      label: 'Pending / Returned', 
      value: '4', 
      icon: Clock, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      description: 'under review'
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome, Student!</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here is what's happening with your certificate requests.</p>
        </div>
        <Button 
          onClick={() => navigate('/student/new-request')}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25"
        >
          <FileText className="mr-2 h-5 w-5" />
          Request New Certificate
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-md bg-white dark:bg-slate-900 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-4xl font-bold tracking-tight">{stat.value}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-slate-500">
                    <TrendingUp size={12} />
                    {stat.description}
                  </p>
                </div>
                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={28} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
           <CardHeader>
              <div className="flex items-center justify-between">
                 <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your last 3 request status updates</CardDescription>
                 </div>
                 <History className="text-slate-400" size={20} />
              </div>
           </CardHeader>
           <CardContent className="space-y-6">
              {[
                { type: 'Bonafide - Internship', date: '2 hours ago', status: 'In Review', color: 'bg-blue-500' },
                { type: 'Bonafide - Bank Loan', date: 'Yesterday', status: 'Approved', color: 'bg-emerald-500' },
                { type: 'Bonafide - Passport', date: '3 days ago', status: 'Returned', color: 'bg-red-500' },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${activity.color} ring-4 ring-slate-100 dark:ring-slate-900`} />
                  <div className="flex-1">
                    <p className="font-semibold text-sm leading-none">{activity.type}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.date}</p>
                  </div>
                  <div className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">
                    {activity.status}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2" onClick={() => navigate('/student/requests')}>
                View All Requests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
           </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
              <AlertCircle size={160} />
           </div>
           <CardHeader>
              <CardTitle className="text-2xl">Need Help?</CardTitle>
              <CardDescription className="text-blue-100">Quick guide to the process</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4 relative z-10">
              <div className="space-y-3">
                 <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">1</div>
                    <p className="text-sm font-medium">Submit your request with proper details</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">2</div>
                    <p className="text-sm font-medium">Wait for Tutor & HOD approval</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">3</div>
                    <p className="text-sm font-medium">Download digitally signed copies</p>
                 </div>
              </div>
              <Button variant="secondary" className="w-full bg-white text-blue-700 hover:bg-slate-100">
                Read documentation
              </Button>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
