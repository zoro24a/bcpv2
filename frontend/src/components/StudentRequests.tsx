import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Eye, 
  MoreHorizontal, 
  Filter, 
  Search, 
  FileText, 
  Edit3, 
  Building2, 
  Calendar as CalendarIcon,
  AlertCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { notifications } from '@mantine/notifications';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  type: z.string({
    required_error: "Please select a certificate type.",
  }),
  subType: z.string().optional(),
  reason: z.string().min(10, {
    message: "Reason must be at least 10 characters.",
  }),
  companyName: z.string().optional(),
  duration: z.string().optional(),
}).refine((data) => {
  if (data.type === 'bonafide_internship') {
    return !!data.companyName && !!data.duration;
  }
  return true;
}, {
  message: "Company name and duration are required for Internship Application.",
  path: ["companyName"],
});

type FormValues = z.infer<typeof formSchema>;

export function StudentRequests() {
  const [requests, setRequests] = useState([
    { 
      id: '1', 
      type: 'bonafide_general', 
      typeName: 'General Bonafide',
      subType: 'Scholarship', 
      reason: 'To apply for state scholarship', 
      status: 'Approved', 
      date: '2024-03-10' 
    },
    { 
      id: '2', 
      type: 'bonafide_internship', 
      typeName: 'Internship Bonafide',
      subType: '-', 
      reason: 'For Google Summer of Code', 
      status: 'Pending Tutor Approval', 
      date: '2024-03-12',
      companyName: 'Google India',
      duration: '2 Months'
    },
    { 
      id: '3', 
      type: 'bonafide_loan', 
      typeName: 'Bank Loan Bonafide',
      subType: 'Educational Loan', 
      reason: 'For payment of semester fee', 
      status: 'Rejected', 
      date: '2024-03-08' 
    },
  ]);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingRequest, setEditingRequest] = useState<any>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      subType: "",
      reason: "",
      companyName: "",
      duration: "",
    },
  });

  const watchType = form.watch("type");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-emerald-500/10 text-emerald-600 border-emerald-200';
      case 'Pending Tutor Approval': return 'bg-amber-500/10 text-amber-600 border-amber-200';
      case 'Rejected': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'HOD Approval':
      case 'Principal Approval': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      default: return 'bg-slate-500/10 text-slate-600 border-slate-200';
    }
  };

  const handleEdit = (request: any) => {
    setEditingRequest(request);
    form.reset({
      type: request.type,
      subType: request.subType === '-' ? '' : request.subType,
      reason: request.reason,
      companyName: request.companyName || '',
      duration: request.duration || '',
    });
    setIsEditOpen(true);
  };

  const onSave = (values: FormValues) => {
    setRequests(prev => prev.map(req => {
      if (req.id === editingRequest.id) {
        return {
          ...req,
          type: values.type,
          typeName: values.type.replace('bonafide_', '').replace('_', ' ').toUpperCase(),
          subType: values.subType || '-',
          reason: values.reason,
          companyName: values.companyName,
          duration: values.duration
        };
      }
      return req;
    }));

    notifications.show({
      title: 'Update Successful',
      message: 'Request protocol has been synchronized.',
      color: 'blue',
    });
    setIsEditOpen(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-2xl shadow-xl shadow-indigo-100 dark:shadow-none">
              <FileText size={24} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">Registry Ledger</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-sm italic uppercase tracking-wider opacity-70">Personal Application Tracking</p>
           </div>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900/40 border-2">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b dark:border-slate-800 p-8 sm:p-10">
           <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
              <div className="relative w-full xl:w-[400px] group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                 <Input placeholder="Search Registry Protocols..." className="pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-sm tracking-tight shadow-sm rounded-2xl focus:ring-indigo-600 transition-all" />
              </div>
              <div className="flex items-center gap-3">
                 <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 font-black text-[10px] uppercase tracking-widest shadow-md hover:bg-slate-50 transition-all">
                    <Filter size={16} className="mr-3" /> Filter Log
                 </Button>
              </div>
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 dark:bg-slate-900/80 hover:bg-transparent h-20 border-slate-100 dark:border-slate-800">
                <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pl-10">Type ID</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Variant</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 max-w-[300px]">Logic/Reason</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Execution Status</TableHead>
                <TableHead className="text-right font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 pr-10">Operations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-80 text-center">
                    <div className="flex flex-col items-center justify-center space-y-4 opacity-30">
                       <FileText size={64} className="text-slate-300" />
                       <div className="space-y-1">
                          <p className="text-xl font-black uppercase tracking-tighter text-slate-900">Void Ledger</p>
                          <p className="text-xs font-bold uppercase tracking-widest">No request instances found in the registry</p>
                       </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                requests.map((request) => (
                  <TableRow key={request.id} className="group hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-all border-slate-100 dark:border-slate-800 h-24">
                    <TableCell className="pl-10">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                             {request.id.padStart(2, '0')}
                          </div>
                          <span className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight text-sm leading-none">{request.typeName}</span>
                       </div>
                    </TableCell>
                    <TableCell>
                       <span className="text-xs font-bold text-slate-500 uppercase tracking-widest opacity-80">{request.subType}</span>
                    </TableCell>
                    <TableCell className="max-w-[300px] truncate" title={request.reason}>
                       <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 italic">"{request.reason}"</p>
                    </TableCell>
                    <TableCell>
                      <Badge className={cn("font-black text-[9px] uppercase tracking-[0.1em] px-3 h-6 rounded-full border shadow-sm", getStatusColor(request.status))} variant="outline">
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-10">
                      <div className="flex items-center justify-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 rounded-xl hover:bg-white dark:hover:bg-slate-800 shadow-sm active:scale-95 transition-all text-slate-400 hover:text-indigo-600 border border-transparent hover:border-slate-100"
                        >
                          <Eye size={18} />
                        </Button>
                        
                        {request.status === 'Approved' && (
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-10 w-10 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 shadow-sm active:scale-95 transition-all text-emerald-600 border border-transparent hover:border-emerald-100"
                           >
                             <Download size={18} />
                           </Button>
                        )}

                        <Button 
                          onClick={() => handleEdit(request)}
                          disabled={request.status !== 'Pending Tutor Approval'}
                          variant="ghost" 
                          size="icon" 
                          className={cn(
                            "h-10 w-10 rounded-xl shadow-sm active:scale-95 transition-all border border-transparent hover:border-blue-100",
                            request.status === 'Pending Tutor Approval' 
                              ? "text-blue-600 hover:bg-blue-50" 
                              : "text-slate-200 cursor-not-allowed opacity-30 grayscale"
                          )}
                        >
                          <Edit3 size={18} />
                        </Button>
                        
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-300 hover:text-slate-500">
                          <MoreHorizontal size={18} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Modal */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[700px] rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-3xl p-0 overflow-hidden bg-white dark:bg-slate-950">
           <DialogHeader className="p-10 bg-indigo-600 text-white relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                 <Edit3 size={120} />
              </div>
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xl">
                    <Edit3 size={32} />
                 </div>
                 <div>
                    <DialogTitle className="text-2xl font-black uppercase tracking-tighter mb-1">Update Registry Protocol</DialogTitle>
                    <DialogDescription className="text-white font-bold uppercase text-[10px] tracking-[0.2em] opacity-80">Synchronize request parameters for ID: {editingRequest?.id}</DialogDescription>
                 </div>
              </div>
           </DialogHeader>

           <div className="p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSave)} className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Protocol Type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 font-bold text-sm">
                                  <SelectValue placeholder="Select Application Schema" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800">
                                <SelectItem value="bonafide_general">General Purpose</SelectItem>
                                <SelectItem value="bonafide_internship">Internship Application</SelectItem>
                                <SelectItem value="bonafide_loan">Financial Assistance</SelectItem>
                                <SelectItem value="bonafide_passport">External Travel</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subType"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Variant (Optional)</FormLabel>
                            <FormControl>
                              <Input className="h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 font-bold text-sm" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                   </div>

                   {/* Conditional Internship Fields */}
                   {watchType === 'bonafide_internship' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top-4 duration-500 bg-indigo-50/30 dark:bg-indigo-900/10 p-8 rounded-[2rem] border border-indigo-100 dark:border-indigo-900/20">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-indigo-600 pl-1">Target Organization</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300" />
                                <Input className="h-14 pl-12 rounded-2xl border-2 border-indigo-100 bg-white font-bold text-sm" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage className="text-[9px] font-black uppercase text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-indigo-600 pl-1">Duration Cycle</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300" />
                                <Input className="h-14 pl-12 rounded-2xl border-2 border-indigo-100 bg-white font-bold text-sm" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage className="text-[9px] font-black uppercase text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                   <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Authorization Logic</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[140px] rounded-[1.5rem] border-2 border-slate-100 dark:border-slate-800 p-6 font-bold text-sm resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                    <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[10px] font-bold text-amber-800 dark:text-amber-400 leading-relaxed italic">
                      Updates are permitted while the request is in the Tutor Approval phase. Once advanced to high-level review, the parameters become immutable.
                    </p>
                  </div>
                </form>
              </Form>
           </div>

           <DialogFooter className="p-10 bg-slate-50/50 dark:bg-slate-900/50 border-t dark:border-slate-800">
              <Button variant="ghost" onClick={() => setIsEditOpen(false)} className="h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500">
                 Abort Update
              </Button>
              <Button 
                onClick={form.handleSubmit(onSave)}
                className="h-12 px-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all"
              >
                 Synchronize Registry
              </Button>
           </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
