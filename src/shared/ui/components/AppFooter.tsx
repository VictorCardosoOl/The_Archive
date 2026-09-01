import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';

export const AppFooter: React.FC = () => {
  return (
    <footer className="mt-32 pt-12 flex flex-col relative w-full overflow-hidden mb-16">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-editorial-black/[0.02] to-transparent pointer-events-none -z-10"></div>
       
       <div className="w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
          {/* Top Line: THE + Icons */}
          <div className="flex items-end justify-between w-full">
             <div className="font-panchang font-bold text-[clamp(5rem,11vw,22rem)] leading-[0.75] tracking-tight uppercase text-editorial-black select-none">
                THE
             </div>
             
             {/* Social Icons flush right */}
             <div className="flex items-center gap-4 md:gap-6 text-editorial-black pb-4 md:pb-6 lg:pb-10 pr-2">
                 <a href="#" className="hover:text-editorial-gray hover:-translate-y-1 transition-all duration-300" aria-label="WhatsApp">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                     <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                   </svg>
                 </a>
                 <a href="#" className="hover:text-editorial-gray hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
                   <Instagram strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                 </a>
                 <a href="#" className="hover:text-editorial-gray hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                   <Linkedin strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                 </a>
                 <a href="#" className="hover:text-editorial-gray hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
                   <Github strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                 </a>
             </div>
          </div>
          
          {/* Bottom Line: ARCHIVE + Copyright */}
          <div className="flex items-end justify-between w-full">
             <div className="font-panchang font-bold text-[clamp(5rem,11vw,22rem)] leading-[0.8] tracking-tight uppercase text-editorial-black select-none">
                ARCHIVE
             </div>
             
             {/* Copyright flush right */}
             <div className="flex flex-col items-end gap-1 text-right pb-4 md:pb-6 lg:pb-10 pr-2">
                <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-editorial-gray">
                   &copy; {new Date().getFullYear()} The Archive. Todos os direitos reservados.
                </span>
                <span className="font-sans italic capitalize tracking-normal text-xs sm:text-sm text-editorial-gray opacity-60">
                  Design is thinking made visual.
                </span>
             </div>
          </div>
       </div>
    </footer>
  );
};
