import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Files, 
  CheckCircle2, 
  ClipboardCheck,
  User, 
  LogOut, 
  Bell, 
  Menu, 
  ChevronLeft, 
  ChevronRight,
  Sun,
  Moon,
  ShieldCheck,
  Building2
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

interface OfficeLayoutProps {
  children: React.ReactNode;
}

export function OfficeLayout({ children }: OfficeLayoutProps) {
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
    { label: 'Dashboard', icon: LayoutDashboard, path: '/office/dashboard' },
    { label: 'All Requests', icon: Files, path: '/office/requests' },
    { label: 'Certificates Ready', icon: ClipboardCheck, path: '/office/ready' },
    { label: 'Issued Certificates', icon: CheckCircle2, path: '/office/issued' },
    { label: 'Profile', icon: User, path: '/office/profile' },
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

  const currentPageTitle = menuItems.find(item => item.path === location.pathname)?.label || 'Office Portal';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans transition-colors duration-300">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-[#1e293b] text-slate-300 transition-all duration-300 ease-in-out lg:static",
          isCollapsed ? "w-20" : "w-64",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center px-6 border-b border-slate-700 bg-[#1e293b]/50">
          <div className={cn("flex items-center gap-3 transition-opacity", isCollapsed ? "opacity-0 invisible w-0" : "opacity-100 visible")}>
             <div className="bg-cyan-600 p-1.5 rounded-lg shadow-lg ring-1 ring-white/10">
                <Building2 className="h-5 w-5 text-white" />
             </div>
             <span className="font-bold text-white text-lg tracking-tight whitespace-nowrap">Office Portal</span>
          </div>
          {isCollapsed && (
             <div className="mx-auto">
                <Building2 className="h-6 w-6 text-cyan-500" />
             </div>
          )}
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 space-y-1.5 px-3 py-6 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                  isActive 
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20" 
                    : "hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-white" : "group-hover:text-cyan-400")} />
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
        <div className="p-4 border-t border-slate-700">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-3 text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-xl transition-colors"
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
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm transition-colors">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="lg:hidden text-slate-500">
              <Menu size={20} />
            </Button>
            <div className="hidden sm:block">
               <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Office Administration</h2>
               <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">
                 {currentPageTitle}
               </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-9 w-9">
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </Button>
            
            <Button variant="ghost" size="icon" className="relative text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-9 w-9">
              <Bell size={19} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-600 rounded-full border-2 border-white dark:border-slate-900"></span>
            </Button>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-1 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full group transition-all">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white font-extrabold text-[10px] border-2 border-white dark:border-slate-950 shadow-md transform transition-transform group-hover:scale-105">
                      OA
                   </div>
                   <div className="hidden sm:block text-left">
                      <p className="text-xs font-black text-slate-900 dark:text-white leading-none">Office Admin</p>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-1 font-bold uppercase tracking-widest leading-none">Staff Terminal</p>
                   </div>
                   <ChevronRight size={14} className="text-slate-400 group-data-[state=open]:rotate-90 transition-transform hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60 mt-2 p-2 rounded-2xl shadow-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 backdrop-blur-xl">
                <DropdownMenuLabel className="px-3 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Administrative Panel</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800" />
                <DropdownMenuItem onClick={() => navigate('/office/profile')} className="cursor-pointer rounded-xl py-2.5 px-3 focus:bg-cyan-50 focus:text-cyan-600 dark:focus:bg-cyan-900/20 dark:focus:text-cyan-400 transition-colors mt-1">
                   <User className="mr-3 h-4 w-4" />
                   <span className="text-sm font-bold">Account Registry</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer rounded-xl py-2.5 px-3 focus:bg-slate-100 dark:focus:bg-slate-800 transition-colors">
                   <ShieldCheck className="mr-3 h-4 w-4" />
                   <span className="text-sm font-bold">Security Protocols</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800 my-1" />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/10 cursor-pointer rounded-xl py-2.5 px-3 transition-colors mb-1">
                   <LogOut className="mr-3 h-4 w-4" />
                   <span className="text-sm font-black uppercase tracking-tight">Lock Terminal</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content Section */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto bg-slate-50/30 dark:bg-slate-950/30 transition-colors">
           <div className="max-w-7xl mx-auto">
              {children}
           </div>
        </main>
      </div>
      
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
}
