import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, Calendar, BookOpen, UserCheck, Shield, GraduationCap, Edit, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StudentProfile() {
  const student = {
    name: 'Student Name',
    registerNumber: '2021BCS042',
    email: 'student.21cs@adhiyamaan.ac.in',
    mobile: '+91 98765 43210',
    gender: 'Male',
    semester: '6th Semester',
    department: 'Computer Science and Engineering',
    batch: '2021-2025',
    tutor: 'Dr. Karuna',
    hod: 'Dr. G. Fathima',
  };

  const DetailItem = ({ icon: Icon, label, value, className }: any) => (
    <div className={cn("flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors", className)}>
      <div className="bg-blue-50 dark:bg-blue-900/30 p-2.5 rounded-lg text-blue-600 dark:text-blue-400">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</p>
        <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border">
         <div className="relative group">
            <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-black shadow-xl ring-8 ring-blue-50 dark:ring-slate-800">
               S
            </div>
            <Button size="icon" className="absolute -bottom-2 -right-2 rounded-xl bg-white text-slate-900 border shadow-lg hover:bg-slate-50">
               <Camera size={18} />
            </Button>
         </div>
         <div className="flex-1 text-center md:text-left space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{student.name}</h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
               <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-sm font-bold tracking-wide">
                  {student.registerNumber}
               </span>
               <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 rounded-full text-sm font-medium">
                  {student.department}
               </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
               <Button className="bg-blue-600 hover:bg-blue-700 shadow-md px-6">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
               </Button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-md overflow-hidden bg-white dark:bg-slate-900">
          <CardHeader className="border-b bg-slate-50/50 dark:bg-slate-800/50">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Verify your academic and contact details.</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <DetailItem icon={User} label="Gender" value={student.gender} />
               <DetailItem icon={Calendar} label="Semester" value={student.semester} />
               <DetailItem icon={Mail} label="Email Address" value={student.email} />
               <DetailItem icon={Phone} label="Mobile Number" value={student.mobile} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md overflow-hidden bg-white dark:bg-slate-900">
           <CardHeader className="border-b bg-slate-50/50 dark:bg-slate-800/50">
             <CardTitle>Academic Support</CardTitle>
             <CardDescription>Your designated faculty members.</CardDescription>
           </CardHeader>
           <CardContent className="p-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center text-center space-y-2 border">
                 <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                    K
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Class Tutor</p>
                    <p className="text-sm font-bold">{student.tutor}</p>
                 </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center text-center space-y-2 border">
                 <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                    F
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Head of Dept</p>
                    <p className="text-sm font-bold">{student.hod}</p>
                 </div>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                 <Button variant="outline" className="w-full text-xs h-8">Contact Tutor</Button>
                 <Button variant="outline" className="w-full text-xs h-8">Submit Grievance</Button>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
