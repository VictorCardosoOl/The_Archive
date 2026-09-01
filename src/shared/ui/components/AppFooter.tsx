import React from 'react';

export const AppFooter: React.FC = () => {
  return (
    <div className="mt-24 border-t border-[#e0e0e0] flex flex-col items-center justify-center relative overflow-hidden min-h-[40vh] xl:min-h-[50vh] w-full">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-editorial-black/[0.03] to-transparent pointer-events-none"></div>
       <div className="font-sans font-black text-[15vw] leading-none tracking-tighter uppercase text-editorial-black/[0.04] select-none text-center mix-blend-darken">
          AntiGravity.
       </div>
       <div className="absolute bottom-16 font-serif italic text-2xl text-editorial-gray">
          Design is thinking made visual.
       </div>
    </div>
  );
};
