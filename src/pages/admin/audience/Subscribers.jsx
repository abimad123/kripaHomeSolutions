import React from 'react';
import { Mail, Search, Download, Copy, Check } from 'lucide-react';

const Subscribers = () => {
  const [copiedIndex, setCopiedIndex] = React.useState(null);

  const subscribers = [
    { id: 1, email: 'john.doe@example.com', date: '2026-03-12', source: 'Footer' },
    { id: 2, email: 'arch.studio.kerala@example.com', date: '2026-03-11', source: 'Footer' },
    { id: 3, email: 'interior.designs@example.com', date: '2026-03-10', source: 'Footer' },
    { id: 4, email: 'builder.raj@example.com', date: '2026-03-08', source: 'Footer' },
    { id: 5, email: 'contact_me_please@example.com', date: '2026-03-05', source: 'Footer' },
  ];

  const handleCopy = (email, idx) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Audience & Subscribers</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Manage email addresses collected from the "Stay Updated" newsletter form.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
          <Download size={16} />
          Export CSV
        </button>
      </div>

      <div className="bg-white border rounded-xl dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 p-4 border-b sm:flex-row sm:items-center sm:justify-between border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="relative max-w-sm w-full">
            <Search className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" size={16} />
            <input 
              type="text" 
              placeholder="Search subscribers..." 
              className="w-full py-2 pl-9 pr-4 text-sm transition-colors border outline-none bg-slate-50 dark:bg-slate-950 rounded-lg border-slate-200 dark:border-slate-700 focus:border-brand-red text-slate-900 dark:text-slate-100"
            />
          </div>
          <div className="text-sm font-bold text-slate-500 dark:text-slate-400">
             Total: <span className="text-brand-red">{subscribers.length} Emails</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold tracking-wider uppercase bg-slate-50 dark:bg-slate-900/50">
                <th className="p-4 font-semibold">Email Address</th>
                <th className="p-4 font-semibold">Subscribed Date</th>
                <th className="p-4 font-semibold">Source</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {subscribers.map((sub, idx) => (
                <tr key={sub.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 text-sm font-semibold text-slate-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        <Mail size={14} />
                      </div>
                      {sub.email}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{sub.date}</td>
                  <td className="p-4">
                     <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-semibold tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                       {sub.source}
                     </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleCopy(sub.email, idx)}
                      className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-semibold transition-colors border rounded-md shadow-sm ${
                        copiedIndex === idx 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' 
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800'
                      }`}
                    >
                      {copiedIndex === idx ? (
                        <><Check size={14} /> Copied</>
                      ) : (
                        <><Copy size={14} /> Copy Email</>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
