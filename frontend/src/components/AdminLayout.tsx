import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  UserSquare2, 
  Users2, 
  UserPlus2, 
  FileJson2, 
  GraduationCap,
  User, 
  LogOut, 
  Bell, 
  Menu, 
  ChevronLeft, 
  ChevronRight,
  Sun,
  Moon,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMantineColorScheme } from '@mantine/core';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDarkMode = colorScheme === 'dark';
  const location = useLocation();
  const navigate = useNavigate();

  // Sync theme with document for Tailwind
  React.useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { label: 'Department Mgmt', icon: Building2, path: '/admin/departments' },
    { label: 'Manage HODs', icon: UserSquare2, path: '/admin/hods' },
    { label: 'Manage Staff (Tutors)', icon: Users2, path: '/admin/tutors' },
    { label: 'Tutor Assignment', icon: UserPlus2, path: '/admin/assignments' },
    { label: 'Template Mgmt', icon: FileJson2, path: '/admin/templates' },
    { label: 'Student Management', icon: GraduationCap, path: '/admin/students' },
    { label: 'Profile', icon: User, path: '/admin/profile' },
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  const currentPageTitle = menuItems.find(item => item.path === location.pathname)?.label || 'System Admin';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans transition-colors duration-300">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-[#0f172a] text-slate-400 transition-all duration-300 ease-in-out lg:static",
          isCollapsed ? "w-20" : "w-64",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center px-6 border-b border-slate-800/50 bg-[#0f172a]">
          <div className={cn("flex items-center gap-3 transition-opacity", isCollapsed ? "opacity-0 invisible w-0" : "opacity-100 visible")}>
             <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg flex items-center justify-center">
                <Settings className="h-5 w-5 text-white" />
             </div>
             <span className="font-bold text-white text-lg tracking-tight whitespace-nowrap">Admin Portal</span>
          </div>
          {isCollapsed && (
             <div className="mx-auto">
                <Settings className="h-6 w-6 text-blue-500 animate-spin-slow" />
             </div>
          )}
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-6 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                    : "hover:text-slate-200 hover:bg-white/5"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-white" : "group-hover:text-blue-400")} />
                {!isCollapsed && <span className="font-semibold text-sm">{item.label}</span>}
                {isCollapsed && (
                   <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap shadow-xl border border-slate-700">
                      {item.label}
                   </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800/50">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-3 text-slate-500 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-xl transition-colors"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!isCollapsed && <span className="text-sm font-semibold">Minimize Sidebar</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40 transition-all">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="lg:hidden text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Menu size={20} />
            </Button>
            <div>
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">BCP v2 System</h2>
               <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">{currentPageTitle}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-10 w-10 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button variant="ghost" size="icon" className="relative text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-10 w-10 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </Button>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-1 h-11 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full group transition-all">
                   <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs border-2 border-white dark:border-slate-800 shadow-md transform transition-transform group-hover:scale-105">
                      AD
                   </div>
                   <div className="hidden sm:block text-left">
                      <p className="text-xs font-black text-slate-900 dark:text-white leading-none">System Admin</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-bold">Standard Account</p>
                   </div>
                   <ChevronRight size={14} className="text-slate-400 group-data-[state=open]:rotate-90 transition-transform hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-2 p-2 rounded-2xl shadow-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 backdrop-blur-xl">
                <DropdownMenuLabel className="px-3 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Administrative Core</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800" />
                <DropdownMenuItem onClick={() => navigate('/admin/profile')} className="cursor-pointer rounded-xl py-3 px-3 mt-1 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 dark:focus:text-blue-400 transition-colors">
                   <User className="mr-3 h-4 w-4" />
                   <span className="text-sm font-bold">Super Admin Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer rounded-xl py-3 px-3 focus:bg-slate-100 dark:focus:bg-slate-800 transition-colors">
                   <Settings className="mr-3 h-4 w-4" />
                   <span className="text-sm font-bold">System Configuration</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800 my-2" />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/10 cursor-pointer rounded-xl py-3 px-3 transition-colors">
                   <LogOut className="mr-3 h-4 w-4" />
                   <span className="text-sm font-black uppercase tracking-tight">Lock Console</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content Section */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto bg-slate-50/30 dark:bg-slate-950/30">
           <div className="max-w-7xl mx-auto">
              {children}
           </div>
        </main>
      </div>
      
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
}
