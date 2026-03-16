import React from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/**
 * Premium Page Loader component using Lottie animation
 * Centered, responsive, and dark-mode compatible
 */
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-700 bg-white dark:bg-brand-dark">
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Decorative pulse effect behind the truck */}
      <div className="absolute inset-0 transition-opacity rounded-full bg-brand-red/5 blur-3xl animate-pulse"></div>
      
      <DotLottieReact
        src="/loading/LoadingWebtruck.lottie"
        autoplay
        loop
        className="relative z-10 w-full h-full"
      />
    </div>

    <div className="flex flex-col items-center mt-8">
      <span className="text-xs font-black tracking-[0.4em] text-slate-400 uppercase animate-pulse">
        Preparing your showroom experience
      </span>
      <div className="mt-4 flex gap-1">
        <div className="w-1 h-1 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-1 h-1 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-1 h-1 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  </div>
);

export default PageLoader;
