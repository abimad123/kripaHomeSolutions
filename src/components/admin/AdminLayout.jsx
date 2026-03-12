import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { Menu, Bell, Search, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Auth Check
const isAuthenticated = () => {
  return localStorage.getItem('adminAuth') === 'true';
};

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  if (!isAuthenticated() && location.pathname !== '/admin/login') {
    return <Navigate to="/admin/login" replace />;
  }

  // If on login page, don't show layout
  if (location.pathname === '/admin/login') {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans">
      
      {/* Sidebar Wrapper */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 w-72`}>
         <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
          <div className="flex items-center gap-4">
             <button 
               onClick={() => setSidebarOpen(!sidebarOpen)}
               className="p-2 transition-colors rounded-lg md:hidden hover:bg-slate-100 dark:hover:bg-white/5"
             >
               <Menu size={24} />
             </button>
             
             {/* Global Search */}
             <div className="relative hidden sm:block w-72">
                <Search size={18} className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full py-2 pl-10 pr-4 text-sm transition-all border outline-none bg-slate-100 dark:bg-slate-800 rounded-lg border-transparent focus:border-brand-red dark:focus:border-brand-red text-slate-900 dark:text-slate-100 placeholder:text-slate-500"
                />
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="relative p-2 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5">
                <Bell size={20} className="text-slate-600 dark:text-slate-300" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-white dark:border-[#0f172a]"></span>
             </button>
             
             <div className="w-px h-6 bg-slate-200 dark:bg-white/10"></div>
             
             <button className="flex items-center gap-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 p-1.5 rounded-xl">
                <div className="hidden text-right sm:block">
                   <p className="text-sm font-semibold leading-none text-slate-900 dark:text-white">Admin User</p>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Workspace</p>
                </div>
                <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-brand-navy dark:bg-brand-red">
                  <UserCircle size={20} />
                </div>
             </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
           <AnimatePresence mode="wait">
             <motion.div
               key={location.pathname}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
               className="max-w-7xl mx-auto h-full"
             >
                <Outlet />
             </motion.div>
           </AnimatePresence>
        </main>

      </div>
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
