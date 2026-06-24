import { RiGithubFill, RiLinkedinBoxFill, RiFacebookBoxFill, RiTwitterXFill } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">
              SURYA
            </span>
            
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-xs">Building digital products, brands, and experiences that matter.</p>
        </div>

        {/* Right: Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent dark:border-slate-800">
              <RiGithubFill size={20} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 dark:hover:shadow-blue-900/30 hover:-translate-y-1 transition-all duration-300 border border-transparent dark:border-slate-800">
              <RiLinkedinBoxFill size={20} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white hover:bg-blue-500 dark:hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-900/30 hover:-translate-y-1 transition-all duration-300 border border-transparent dark:border-slate-800">
              <RiFacebookBoxFill size={20} />
            </a>
            <a href="#" className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent dark:border-slate-800">
              <RiTwitterXFill size={20} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Surya Joshi
            </p>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <p className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest">
              All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
