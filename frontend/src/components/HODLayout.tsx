import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Clock, 
  History, 
  User, 
  LogOut, 
  Bell, 
  Menu, 
  ChevronLeft, 
  ChevronRight,
  Sun,
  Moon,
  GraduationCap,
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

interface HODLayoutProps {
  children: React.ReactNode;
}

export function HODLayout({ children }: HODLayoutProps) {
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
    { label: 'Dashboard', icon: LayoutDashboard, path: '/hod/dashboard' },
    { label: 'Pending Requests', icon: Clock, path: '/hod/pending' },
    { label: 'Request History', icon: History, path: '/hod/history' },
    { label: 'Profile', icon: User, path: '/hod/profile' },
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

  const currentPageTitle = menuItems.find(item => item.path === location.pathname)?.label || 'HOD Portal';

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex font-sans">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out lg:static",
          isCollapsed ? "w-20" : "w-64",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center px-6 border-b border-slate-800">
          <div className={cn("flex items-center gap-3 transition-opacity", isCollapsed ? "opacity-0 invisible w-0" : "opacity-100 visible")}>
             <div className="bg-blue-600 p-1.5 rounded shadow-sm">
                <GraduationCap className="h-5 w-5 text-white" />
             </div>
             <span className="font-bold text-white text-lg tracking-tight whitespace-nowrap">HOD Portal</span>
          </div>
          {isCollapsed && (
             <div className="mx-auto">
                <GraduationCap className="h-6 w-6 text-blue-500" />
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
                  "flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 group relative",
                  isActive 
                    ? "bg-slate-800 text-white border-l-4 border-blue-500" 
                    : "hover:text-white hover:bg-slate-800/50"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-blue-400" : "group-hover:text-blue-400")} />
                {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
                {isCollapsed && (
                   <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap shadow-xl">
                      {item.label}
                   </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-3 text-slate-400 hover:text-white hover:bg-slate-800/50 px-3 py-2.5 rounded transition-colors"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!isCollapsed && <span className="text-sm">Collapse Sidebar</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40 transition-colors">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="lg:hidden text-slate-500">
              <Menu size={20} />
            </Button>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white tracking-tight">
              {currentPageTitle}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </Button>
            
            <Button variant="ghost" size="icon" className="relative text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell size={19} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-600 rounded-full border-2 border-white dark:border-slate-900"></span>
            </Button>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 pl-2 hover:bg-slate-100 dark:hover:bg-slate-800 group">
                   <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-700 transition-colors group-hover:border-blue-500">
                      HOD
                   </div>
                   <div className="hidden sm:block text-left">
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-none">Prof. Winston</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">CSE Department</p>
                   </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <DropdownMenuLabel className="font-semibold text-xs text-slate-500 uppercase tracking-wider">Account Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/hod/profile')} className="cursor-pointer">
                   <User className="mr-2 h-4 w-4" />
                   <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                   <Building2 className="mr-2 h-4 w-4" />
                   <span>Department Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 focus:text-red-600 cursor-pointer">
                   <LogOut className="mr-2 h-4 w-4" />
                   <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-10 overflow-auto bg-[#f8fafc] dark:bg-slate-950 transition-colors">
           <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
              {children}
           </div>
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-all"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
}
