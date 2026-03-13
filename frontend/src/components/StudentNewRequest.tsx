import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { FileText, Send, RotateCcw, AlertCircle, Building2, Calendar, ClipboardCheck } from 'lucide-react';
import { notifications } from '@mantine/notifications';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  studentName: z.string().readonly(),
  regNumber: z.string().readonly(),
  fatherName: z.string().readonly(),
  department: z.string().readonly(),
  batch: z.string().readonly(),
  academicYear: z.string().readonly(),
  certType: z.string({
    required_error: "Please select a certificate type.",
  }),
  subType: z.string().optional(),
  reason: z.string().min(10, {
    message: "Reason must be at least 10 characters.",
  }),
  companyName: z.string().optional(),
  duration: z.string().optional(),
}).refine((data) => {
  if (data.certType === 'bonafide_internship') {
    return !!data.companyName && !!data.duration;
  }
  return true;
}, {
  message: "Company name and duration are required for Internship Application.",
  path: ["companyName"], // Setting path to companyName for simplicity in error display
});

type FormValues = z.infer<typeof formSchema>;

export function StudentNewRequest() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "Arun Kumar",
      regNumber: "204361761492108",
      fatherName: "Raj Kumar",
      department: "Computer Science and Engineering",
      batch: "2024-2028",
      academicYear: "2024-2025",
      certType: "",
      subType: "",
      reason: "",
      companyName: "",
      duration: "",
    },
  });

  const watchCertType = form.watch("certType");

  const onSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
    notifications.show({
      title: 'Request Submitted',
      message: 'Your bonafide request has been successfully recorded in the registry.',
      color: 'blue',
    });
    form.reset({
      ...form.getValues(),
      certType: "",
      subType: "",
      reason: "",
      companyName: "",
      duration: "",
    });
  };

  const handleReset = () => {
    form.reset({
      ...form.getValues(),
      certType: "",
      subType: "",
      reason: "",
      companyName: "",
      duration: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 overflow-hidden rounded-[2rem]">
        <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-10 relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <ClipboardCheck size={120} />
          </div>
          <div className="flex items-center gap-5 relative z-10">
             <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-inner">
                <FileText size={32} />
             </div>
             <div>
                <CardTitle className="text-3xl font-black uppercase tracking-tighter">Request Terminal</CardTitle>
                <CardDescription className="text-blue-100 font-bold uppercase text-[10px] tracking-[0.2em] opacity-80">Official Bonafide Authorization Request</CardDescription>
             </div>
          </div>
        </CardHeader>
        <CardContent className="p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Readonly Fields Block */}
                <div className="space-y-8 bg-slate-50/50 dark:bg-slate-800/30 p-8 rounded-[1.5rem] border border-slate-100 dark:border-slate-800">
                   <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                         <Calendar size={16} />
                      </div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Student Identity Matrix</h4>
                   </div>
                   
                   {[
                      { name: "studentName" as const, label: "Formal Name" },
                      { name: "regNumber" as const, label: "Registration ID" },
                      { name: "fatherName" as const, label: "Guardian Identity" },
                      { name: "department" as const, label: "Academic Unit" },
                      { name: "batch" as const, label: "Batch Cycle" },
                      { name: "academicYear" as const, label: "Reference Year" },
                   ].map((field) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        render={({ field: fieldProps }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">{field.label}</FormLabel>
                            <FormControl>
                              <Input 
                                {...fieldProps} 
                                readOnly 
                                className="h-12 bg-slate-100/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-bold text-sm rounded-xl cursor-not-allowed" 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                   ))}
                </div>

                {/* Input Fields Block */}
                <div className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3 mb-6 font-mono">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                         <FileText size={16} />
                      </div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Request Configuration</h4>
                   </div>

                   <FormField
                    control={form.control}
                    name="certType"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Protocol Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 font-bold text-sm focus:ring-blue-600 shadow-sm transition-all">
                              <SelectValue placeholder="Select Application Schema" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-2xl border-slate-200 dark:border-slate-800 shadow-2xl p-2">
                            <SelectItem value="bonafide_general" className="rounded-xl py-3 focus:bg-blue-50">General Purpose Bonafide</SelectItem>
                            <SelectItem value="bonafide_internship" className="rounded-xl py-3 focus:bg-blue-50">Internship Application</SelectItem>
                            <SelectItem value="bonafide_loan" className="rounded-xl py-3 focus:bg-blue-50">Financial Assistance / Loan</SelectItem>
                            <SelectItem value="bonafide_passport" className="rounded-xl py-3 focus:bg-blue-50">External Travel / Passport</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-[10px] font-black uppercase" />
                      </FormItem>
                    )}
                  />

                  {/* Internship Conditional Fields */}
                  {watchCertType === 'bonafide_internship' && (
                    <div className="space-y-8 animate-in slide-in-from-top-4 duration-500 bg-indigo-50/30 dark:bg-indigo-900/10 p-6 rounded-[1.5rem] border border-indigo-100 dark:border-indigo-900/20">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-indigo-600 pl-1">Target Organization</FormLabel>
                            <FormControl>
                              <div className="relative group">
                                <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300 group-focus-within:text-indigo-600 transition-colors" />
                                <Input placeholder="e.g. Google India" className="h-14 pl-12 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900/50 bg-white dark:bg-slate-950 font-bold text-sm" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage className="text-[10px] font-black uppercase text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-indigo-600 pl-1">Execution Duration</FormLabel>
                            <FormControl>
                              <div className="relative group">
                                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300 group-focus-within:text-indigo-600 transition-colors" />
                                <Input placeholder="e.g. 2 Months (June–July)" className="h-14 pl-12 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900/50 bg-white dark:bg-slate-950 font-bold text-sm" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage className="text-[10px] font-black uppercase text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  <FormField
                    control={form.control}
                    name="subType"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Credential Variant (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Specify if any (e.g. Scholarship)" className="h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 font-bold text-sm" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Authorization Context / Reason</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Briefly describe the institutional requirement for this certificate..." 
                        className="min-h-[160px] rounded-[1.5rem] border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 font-bold text-sm resize-none focus:ring-blue-600 shadow-inner" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] font-black uppercase" />
                  </FormItem>
                )}
              />

              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-[1.5rem] flex items-start gap-4 border border-blue-100 dark:border-blue-900/30">
                 <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="text-blue-600 dark:text-blue-400" size={20} />
                 </div>
                 <div className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-tight text-blue-900 dark:text-blue-300">Integrity Check</p>
                    <p className="text-[10px] text-blue-800 dark:text-blue-400 leading-relaxed font-semibold italic">
                       Verify all identity parameters before submission. Once initiated, the request protocol cannot be modified until reviewed by the Academic Tutor.
                    </p>
                 </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row justify-end gap-5">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleReset}
                  className="h-14 px-8 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 font-black text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3"
                >
                   <RotateCcw size={16} />
                   Reset Console
                </Button>
                <Button 
                  type="submit" 
                  className="h-14 px-12 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-black text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center gap-3"
                >
                   <Send size={16} />
                   Submit Protocol
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {/* Visual Footer decoration */}
      <div className="mt-10 flex justify-center items-center gap-8 opacity-30 grayscale">
         <div className="h-px w-20 bg-slate-400" />
         <span className="text-[9px] font-black uppercase tracking-[0.4em]">Official Institutional Registry Portal</span>
         <div className="h-px w-20 bg-slate-400" />
      </div>
    </div>
  );
}
