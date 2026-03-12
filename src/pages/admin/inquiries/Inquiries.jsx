import React from 'react';
import { Mail, Phone, Calendar, Search, Filter, CheckCircle2, AlertCircle } from 'lucide-react';

const Inquiries = () => {
  const inquiries = [
    { id: '1', name: 'Rahul Sharma', email: 'rahul.s@example.com', phone: '+91 98765 43210', subject: 'Modular Kitchen Pricing', date: '2026-03-12', status: 'Unread', type: 'Product Inquiry' },
    { id: '2', name: 'Priya Patel', email: 'priya.design@example.com', phone: '+91 91234 56789', subject: 'Bulk order for Brass Hardware', date: '2026-03-11', status: 'Read', type: 'Sales' },
    { id: '3', name: 'Anand Kumar', email: 'anand.k@example.com', phone: '+91 99887 76655', subject: 'Store directions & timing', date: '2026-03-10', status: 'Responded', type: 'General' },
    { id: '4', name: 'Sneha Reddy', email: 'sneha.r@example.com', phone: '+91 98765 12345', subject: 'Architectural consultation', date: '2026-03-09', status: 'Unread', type: 'Consultation' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Customer Inquiries</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">View and manage messages from the website contact forms.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-slate-200 dark:bg-slate-950 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
             <Filter size={16} /> Filter Unread
          </button>
        </div>
      </div>

      <div className="bg-white border rounded-xl dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="relative w-full max-w-md">
            <Search className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, email, or subject..." 
              className="w-full py-2 pl-9 pr-4 text-sm transition-colors border outline-none bg-slate-50 dark:bg-slate-950 rounded-lg border-slate-200 dark:border-slate-700 focus:border-brand-red text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
           {inquiries.map((inquiry) => (
             <div key={inquiry.id} className={`p-6 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${inquiry.status === 'Unread' ? 'bg-slate-50 dark:bg-slate-800/30' : ''}`}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                   <div className="flex-1 space-y-4">
                      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                         <h3 className={`text-lg dark:text-white ${inquiry.status === 'Unread' ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>
                           {inquiry.subject}
                         </h3>
                         <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                           {inquiry.type}
                         </span>
                         {inquiry.status === 'Unread' && (
                           <span className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-md bg-brand-red/10 text-brand-red border border-brand-red/20">
                             <AlertCircle size={12} /> New
                           </span>
                         )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                         <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                               {inquiry.name.charAt(0)}
                            </div>
                            <span className="font-medium text-slate-700 dark:text-slate-300">{inquiry.name}</span>
                         </div>
                         <div className="flex items-center gap-1.5"><Mail size={14} /> {inquiry.email}</div>
                         <div className="flex items-center gap-1.5"><Phone size={14} /> {inquiry.phone}</div>
                         <div className="flex items-center gap-1.5"><Calendar size={14} /> {inquiry.date}</div>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3">
                      <button className="px-4 py-2 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 dark:bg-[#0f172a] dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5 shadow-sm transition-colors">
                         View Details
                      </button>
                      {inquiry.status === 'Unread' && (
                        <button className="p-2 text-emerald-600 bg-emerald-50 rounded-xl hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20 transition-colors" title="Mark as Read">
                           <CheckCircle2 size={20} />
                        </button>
                      )}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
