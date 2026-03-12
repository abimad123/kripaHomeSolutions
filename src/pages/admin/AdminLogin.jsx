import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, ArrowRight, Home, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '/Kripalogo.png';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Dummy authentication (accepts anything with password "admin")
    setTimeout(() => {
      if (password === 'admin') {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin');
      } else {
        setError('Invalid credentials. Hint: try "admin"');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-brand-surface font-sans">
      
      {/* Left Panel - Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a1128] overflow-hidden text-white flex-col justify-between p-12 lg:p-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
           <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37] blur-[120px] mix-blend-screen"></div>
           <div className="absolute top-[40%] text-[#D4AF37] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500 blur-[120px] mix-blend-screen"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

        <div className="relative z-10 flex items-center gap-4">
           <div className="relative flex flex-col items-start p-2.5 rounded-xl backdrop-blur-sm border border-white/10">
             <img src={logoImg} alt="Kripa Logo" className="h-14" />
           </div>
           <div>
             <span className="block text-xl font-bold tracking-tight leading-none text-white">Admin</span>
                        </div>
        </div>

        <div className="relative z-10 max-w-lg mt-12 mb-auto pt-24">
          
           <h2 className="mb-6 text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-200">
             Manage your entire home solutions empire from one place.
           </h2>
           <p className="text-lg font-medium text-blue-100/80 leading-relaxed">
             Oversee your product catalog, review prospective client inquiries, and curate your showcase media in a unified, beautifully designed dashboard.
           </p>
        </div>
        
        <div className="relative z-10 flex items-center justify-between text-sm font-medium text-blue-200/60 mt-12">
          <span>&copy; {new Date().getFullYear()} Kripa Home Solutions.</span>
          <span className="hidden xl:inline-block">All rights reserved.</span>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="relative flex flex-col justify-center flex-1 px-8 py-12 sm:px-12 lg:px-24 bg-white dark:bg-slate-900">
        <Link to="/" className="absolute flex items-center gap-2 text-sm font-semibold transition-colors top-8 right-8 text-slate-500 hover:text-[#0a1128] dark:hover:text-white">
          <Home size={18} /> Return to Website
        </Link>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-sm mx-auto"
        >
          {/* Mobile Logo */}
          <div className="mb-10 lg:hidden flex items-center gap-3">
             <div className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
               <img src={logoImg} alt="Kripa Logo" className="h-8 dark:brightness-200" />
             </div>
             <div>
               <span className="block text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">Kripa Admin</span>
             </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Sign in</h1>
            <p className="mt-2.5 text-[15px] font-medium text-slate-500 dark:text-slate-400">Enter your administrative credentials to continue to the dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
             <div className="space-y-5">
               <div className="space-y-2">
                 <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Username</label>
                 <div className="relative">
                   <Mail className="absolute text-slate-400 left-3.5 top-1/2 -translate-y-1/2" size={18} />
                   <input 
                     type="text" 
                     placeholder="admin@kripa.com" 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="w-full py-3 pl-10 pr-4 text-sm font-medium transition-colors bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 outline-none rounded-xl focus:border-blue-950 dark:focus:border-brand-gold focus:ring-4 focus:ring-blue-950/10 dark:focus:ring-brand-gold/10 text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                     required
                   />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <div className="flex items-center justify-between ml-1 mr-1">
                   <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                   <span className="text-xs text-brand-gold font-semibold tracking-wide">Hint: admin</span>
                 </div>
                 <div className="relative">
                   <Lock className="absolute text-slate-400 left-3.5 top-1/2 -translate-y-1/2" size={18} />
                   <input 
                     type="password" 
                     placeholder="••••••••" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full py-3 pl-10 pr-4 text-sm font-medium transition-colors bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 outline-none rounded-xl focus:border-blue-950 dark:focus:border-brand-gold focus:ring-4 focus:ring-blue-950/10 dark:focus:ring-brand-gold/10 text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                     required
                   />
                 </div>
               </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20"
              >
                <AlertCircle size={18} className="flex-shrink-0" />
                {error}
              </motion.div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="flex items-center justify-center w-full gap-2 py-3.5 mt-2 text-sm font-bold text-white transition-all rounded-xl bg-[#0a1128] hover:bg-[#070b1a] dark:bg-[#D4AF37] dark:text-[#0a1128] dark:hover:bg-[#c4a132] disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.98]"
            >
               {isLoading ? 'Verifying Credentials...' : 'Sign In'}
               {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>
          
        </motion.div>
      </div>

    </div>
  );
};

export default AdminLogin;
