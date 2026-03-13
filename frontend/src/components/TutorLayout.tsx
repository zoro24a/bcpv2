import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Clock, 
  History, 
  Users, 
  User, 
  LogOut, 
  Bell, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Sun,
  Moon,
  GraduationCap
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

interface TutorLayoutProps {
  children: React.ReactNode;
}

export function TutorLayout({ children }: TutorLayoutProps) {
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
    { label: 'Dashboard', icon: LayoutDashboard, path: '/tutor/dashboard' },
    { label: 'Pending Requests', icon: Clock, path: '/tutor/pending' },
    { label: 'Request History', icon: History, path: '/tutor/history' },
    { label: 'My Students', icon: Users, path: '/tutor/students' },
    { label: 'Profile', icon: User, path: '/tutor/profile' },
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 ease-in-out lg:static",
          isCollapsed ? "w-20" : "w-64",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className={cn("flex items-center gap-2 overflow-hidden whitespace-nowrap", isCollapsed && "lg:hidden")}>
             <div className="bg-white/20 p-1.5 rounded-lg">
                <GraduationCap className="h-6 w-6" />
             </div>
             <span className="font-bold text-lg tracking-tight">Tutor Portal</span>
          </div>
          {isCollapsed && (
             <div className="hidden lg:flex w-full justify-center">
                <GraduationCap className="h-8 w-8 text-blue-200" />
             </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="hidden lg:flex text-blue-200 hover:text-white hover:bg-white/10"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="lg:hidden text-blue-200"
          >
            <X size={20} />
          </Button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                  isActive 
                    ? "bg-white/20 text-white shadow-xl shadow-black/10" 
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "group-hover:text-white")} />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
                {isCollapsed && (
                   <span className="absolute left-full ml-2 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 bg-slate-800 text-white text-xs px-2 py-1 rounded pointer-events-none transition-all duration-200 z-[60]">
                      {item.label}
                   </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-3 text-blue-100 hover:text-red-400 hover:bg-red-950/20 px-3 py-2.5 rounded-lg transition-colors"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <header className="h-16 border-b bg-white dark:bg-slate-900 flex items-center justify-between px-4 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="lg:hidden">
              <Menu size={20} />
            </Button>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white uppercase tracking-wide">
              {menuItems.find(item => item.path === location.pathname)?.label || 'BCP v2'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-slate-600 dark:text-slate-400">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button variant="ghost" size="icon" className="relative text-slate-600 dark:text-slate-400">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 pl-2">
                   <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xs shadow-sm">
                      T
                   </div>
                   <div className="hidden sm:block text-left">
                      <p className="text-xs font-semibold leading-none text-slate-900 dark:text-white">Tutor Name</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">CSE Dept</p>
                   </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/tutor/profile')}>
                   <User className="mr-2 h-4 w-4" />
                   <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 focus:text-red-600">
                   <LogOut className="mr-2 h-4 w-4" />
                   <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
           {children}
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
}
