import React from 'react';
import { Youtube, Instagram, Plus, Trash2, Link as LinkIcon } from 'lucide-react';

const MediaManager = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Media Library</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Manage showcased videos and social reels across the website.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* YouTube Section */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-800">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-3 bg-red-100 rounded-xl text-brand-red dark:bg-red-500/10">
               <Youtube size={24} />
             </div>
             <div>
               <h2 className="text-xl font-bold text-slate-800 dark:text-white">Expert Video Series</h2>
               <p className="text-xs text-slate-500 dark:text-slate-400">Manage YouTube embeds</p>
             </div>
           </div>

           <div className="flex gap-2 mb-6">
             <div className="relative flex-1">
               <LinkIcon className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" size={16} />
               <input 
                 type="text" 
                 placeholder="Paste YouTube Video ID (e.g. dQw4w9WgXcQ)"
                 className="w-full py-2.5 pl-9 pr-4 text-sm transition-colors border outline-none bg-slate-50 dark:bg-slate-950 rounded-lg border-slate-200 dark:border-slate-700 focus:border-brand-red text-slate-900 dark:text-slate-100"
               />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
               <Plus size={16} /> Add Video
             </button>
           </div>

           <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 transition-colors border rounded-xl border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.02] group">
                  <div className="w-32 aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden relative flex items-center justify-center">
                     <Youtube size={24} className="text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 dark:text-white line-clamp-1">Kripa Architecture Spotlight Ep. {i+1}</p>
                    <p className="text-xs text-slate-500">ID: aX9f_2mPlq</p>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
           </div>
        </div>

        {/* Instagram Reels Section */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-800">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-3 rounded-xl text-white bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600">
               <Instagram size={24} />
             </div>
             <div>
               <h2 className="text-xl font-bold text-slate-800 dark:text-white">"See Us In Action"</h2>
               <p className="text-xs text-slate-500 dark:text-slate-400">Manage Instagram Reels URLs</p>
             </div>
           </div>

           <div className="flex gap-2 mb-6">
             <div className="relative flex-1">
               <LinkIcon className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" size={16} />
               <input 
                 type="text" 
                 placeholder="Paste Instagram Reel URL"
                 className="w-full py-2.5 pl-9 pr-4 text-sm transition-colors border outline-none bg-slate-50 dark:bg-slate-950 rounded-lg border-slate-200 dark:border-slate-700 focus:border-brand-red text-slate-900 dark:text-slate-100"
               />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
               <Plus size={16} /> Add Reel
             </button>
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="relative aspect-[9/16] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden group">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Instagram size={32} className="text-slate-400/50" />
                   </div>
                   <div className="absolute inset-0 transition-opacity opacity-0 bg-black/60 group-hover:opacity-100 flex items-center justify-center">
                     <button className="p-3 text-white bg-red-600 rounded-full hover:scale-110 transition-transform shadow-xl">
                       <Trash2 size={20} />
                     </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default MediaManager;
