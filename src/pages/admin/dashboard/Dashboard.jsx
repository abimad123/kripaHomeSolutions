import React from 'react';
import { Package, Users, Eye, TrendingUp, UserCheck, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back. Here's what's happening at Kripa Home Solutions today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Products', value: '1,248', icon: <Package size={20} className="text-blue-500" />, bg: 'bg-blue-50 dark:bg-blue-500/10', trend: '+12%' },
          { label: 'New Inquiries', value: '42', icon: <Users size={20} className="text-brand-red" />, bg: 'bg-red-50 dark:bg-red-500/10', trend: '+5%' },
          { label: 'Site Visits', value: '8,502', icon: <Eye size={20} className="text-emerald-500" />, bg: 'bg-emerald-50 dark:bg-emerald-500/10', trend: '+18%' },
          { label: 'Subscribers', value: '430', icon: <UserCheck size={20} className="text-amber-500" />, bg: 'bg-amber-50 dark:bg-amber-500/10', trend: '+2%' },
        ].map((stat, i) => (
          <div key={i} className="p-6 transition-shadow bg-white border rounded-xl dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
              </div>
              <div className={`p-2.5 rounded-lg ${stat.bg}`}>
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4 text-xs font-medium text-emerald-600 dark:text-emerald-400">
               <TrendingUp size={14} />
               <span>{stat.trend} from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Inquiries List */}
        <div className="col-span-2 p-6 bg-white border border-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-800">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-base font-bold text-slate-900 dark:text-white">Recent Inquiries</h3>
             <button className="text-sm font-medium text-brand-red hover:underline">View All</button>
           </div>
           
           <div className="space-y-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 transition-colors border rounded-lg border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                   <div className="flex items-center gap-4">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                       {i % 2 === 0 ? <Users size={18} /> : <AlertCircle size={18} />}
                     </div>
                     <div>
                       <p className="text-sm font-semibold text-slate-900 dark:text-white">New product enquiry</p>
                       <p className="text-sm text-slate-500 dark:text-slate-400">Visitor asked about Premium Handles...</p>
                     </div>
                   </div>
                   <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{i + 2} hours ago</span>
                </div>
              ))}
           </div>
        </div>

        {/* System Status Mini Widget */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-800 flex flex-col">
           <h3 className="mb-6 text-base font-bold text-slate-900 dark:text-white">System Status</h3>
           <div className="flex items-center gap-3 p-3.5 mb-5 border rounded-lg border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">All Systems Operational</span>
           </div>
           
           <div className="flex-1">
              <div className="space-y-5">
                 <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-500 dark:text-slate-400">Database Storage</span>
                    <span className="font-semibold text-slate-900 dark:text-white">45%</span>
                 </div>
                 <div className="w-full h-1.5 overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-blue-500 w-[45%] rounded-full"></div>
                 </div>
                 
                 <div className="flex justify-between text-sm pt-1">
                    <span className="font-medium text-slate-500 dark:text-slate-400">Media Uploads</span>
                    <span className="font-semibold text-slate-900 dark:text-white">82%</span>
                 </div>
                 <div className="w-full h-1.5 overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-brand-red w-[82%] rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
