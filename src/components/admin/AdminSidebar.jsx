import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  PackageSearch,
  MessageSquareQuote,
  Video,
  Users,
  LogOut,
  X
} from 'lucide-react';
import logoImg from '/Kripalogo.png';

const AdminSidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Products Catalog', icon: <PackageSearch size={20} />, path: '/admin/products' },
    { name: 'Inquiries', icon: <MessageSquareQuote size={20} />, path: '/admin/inquiries' },
    { name: 'Media Library', icon: <Video size={20} />, path: '/admin/media' },
    { name: 'Audience & Subscribers', icon: <Users size={20} />, path: '/admin/subscribers' },
  ];

  return (
    <aside className="flex flex-col h-full bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-white/5 shadow-xl md:shadow-none transition-colors duration-500">
      
      {/* Logo Area */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100 dark:border-white/5">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Kripa Home Solutions" className="w-auto h-8 drop-shadow-sm" />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-800 dark:text-white leading-none">Kripa Admin</span>
          </div>
        </div>
        
        <button className="md:hidden text-slate-400 hover:text-white" onClick={onClose}>
           <X size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        <div className="px-4 mb-3 text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
          Management
        </div>
        
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin'} // Exact match only for root dashboard
            onClick={() => {
              if (window.innerWidth < 768) onClose();
            }}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium
              ${isActive 
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
              }
            `}
          >
            {({ isActive }) => (
              <>
                 <div className={`${isActive ? 'text-brand-red' : 'text-slate-400 dark:text-slate-500'}`}>
                    {item.icon}
                 </div>
                 {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-100 dark:border-white/5">
        <button 
          onClick={handleLogout}
          className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors rounded-lg dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
        >
           <LogOut size={16} />
           Sign Out
        </button>
      </div>

    </aside>
  );
};

export default AdminSidebar;
