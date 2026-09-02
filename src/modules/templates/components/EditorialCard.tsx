import React from 'react';
import { Template } from '@/core/domain/types';
import { Pin, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, animate } from 'framer-motion';
import { useTemplateCopier } from '@/modules/templates/hooks/useTemplateCopier';

interface EditorialCardProps {
  template: Template;
  onClick: () => void;
  onPin: (id: string) => void;
  isPinned: boolean;
  index: number;
  isHero?: boolean;
}

export const EditorialCard: React.FC<EditorialCardProps> = ({ template, onClick, onPin, isPinned, index, isHero }) => {
  const { copyToClipboard, isCopied } = useTemplateCopier();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    copyToClipboard(template.content, template.id);
  };

  const handlePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPin(template.id);
    
    // Animate the icon
    const icon = e.currentTarget.querySelector('svg');
    if (icon) {
      animate(icon, { scale: [1, 1.35, 1] }, { duration: 0.3, ease: "easeInOut" });
    }
  };

  const handleOpenInNewTab = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}?template=${encodeURIComponent(template.id)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  if (isHero) {
    return (
      <motion.article 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label={`Visualizar modelo em destaque: ${template.title}`}
        className="group relative flex flex-col w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-black transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]"
        style={{ willChange: "transform, opacity" }}
      >
        <div aria-hidden="true" className="absolute -inset-10 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[100px] shadow-[0_0_80px_rgba(255,255,255,0.4)]"></div>
        
        <div className="editorial-card-hero">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
               <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] bg-editorial-black text-white px-4 py-1.5 rounded-full">
                 Destaque Principal
               </span>
               {isPinned && <Pin size={16} className="fill-editorial-black text-editorial-black" aria-label="Fixado" />}
            </div>
            <time dateTime={new Date().toISOString()} className="font-serif italic text-base md:text-lg text-editorial-black/60">
              {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </time>
          </div>

          <h2 className="font-serif font-semibold text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 max-w-4xl text-editorial-black group-hover:text-editorial-gray transition-colors duration-700">
            {template.title}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 items-end mt-auto">
             <p className="font-serif font-normal text-lg md:text-2xl leading-[1.55] text-editorial-black/85 flex-1 max-w-2xl line-clamp-3">
               {template.description || template.content.substring(0, 500) + "..."}
             </p>
             
             <div 
               className="flex items-center gap-3 shrink-0 opacity-100 lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
               style={{ willChange: "transform, opacity" }}
             >
                <button 
                  onClick={handlePin}
                  aria-pressed={isPinned}
                  aria-label={isPinned ? "Desafixar modelo" : "Fixar modelo"}
                  className="icon-btn-hero"
                  title={isPinned ? "Desafixar" : "Fixar"}
                >
                  <Pin size={20} className={isPinned ? "fill-current" : ""} />
                </button>
                <button 
                  onClick={handleCopy}
                  aria-label="Copiar conteúdo do modelo"
                  className="icon-btn-hero"
                  title="Copiar"
                >
                  {isCopied(template.id) ? <Check size={20} /> : <Copy size={20} />}
                </button>
                <button 
                  onClick={handleOpenInNewTab}
                  aria-label="Abrir modelo em nova guia"
                  className="icon-btn-hero"
                  title="Abrir em nova guia"
                >
                  <ExternalLink size={20} />
                </button>
                <span 
                  aria-hidden="true"
                  className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.1em] bg-editorial-black text-white px-7 py-3.5 rounded-full hover:bg-editorial-gray transition-colors duration-500"
                >
                  Visualizar <ArrowRight size={16} />
                </span>
             </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <article 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Visualizar modelo: ${template.title}`}
      className="group editorial-card justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)] cursor-pointer"
      style={{ willChange: "transform, box-shadow" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-editorial-black transform scale-y-0 origin-bottom group-hover:scale-y-[0.02] transition-transform duration-[400ms] ease-out pointer-events-none"></div>

      <div>
        <div className="flex items-center justify-between mb-2.5 relative z-10 w-full">
          <span aria-hidden="true" className="font-serif italic text-2xl md:text-3xl text-editorial-black/30 group-hover:text-editorial-black transition-colors duration-500 font-light">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <div className="flex items-center gap-2.5">
             {isPinned && <Pin size={14} className="fill-editorial-black text-editorial-black" aria-label="Fixado" />}
             <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-editorial-black bg-editorial-black/5 border border-editorial-black/10 px-2.5 py-0.5 rounded-full">
               {template.category}
             </span>
          </div>
        </div>
        
        <h3 className="font-serif font-semibold text-lg md:text-[1.35rem] leading-[1.2] mb-1.5 group-hover:text-editorial-gray transition-colors duration-500 relative z-10 w-full break-words text-editorial-black line-clamp-2">
          {template.title}
        </h3>
        
        <p className="font-serif font-normal text-sm md:text-[0.95rem] leading-[1.45] text-editorial-black/75 line-clamp-2 mb-2 relative z-10 w-full">
          {template.description || template.content.substring(0, 300) + "..."}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-3 relative z-10 border-t border-black/[0.06]">
        <div 
          className="flex items-center gap-2 opacity-100 lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ willChange: "transform, opacity" }}
        >
           <button 
             onClick={handlePin}
             aria-pressed={isPinned}
             aria-label={isPinned ? "Desafixar modelo" : "Fixar modelo"}
             className="p-2.5 bg-editorial-bg hover:bg-editorial-gray/10 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-black"
             title={isPinned ? "Desafixar" : "Fixar"}
           >
             <Pin size={16} className={isPinned ? "fill-editorial-black" : ""} />
           </button>
           <button 
             onClick={handleCopy}
             aria-label="Copiar conteúdo do modelo"
             className="p-2.5 bg-editorial-bg hover:bg-editorial-gray/10 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-black"
             title="Copiar"
           >
             {isCopied(template.id) ? <Check size={16} /> : <Copy size={16} />}
           </button>
           <button 
             onClick={handleOpenInNewTab}
             aria-label="Abrir modelo em nova guia"
             className="p-2.5 bg-editorial-bg hover:bg-editorial-gray/10 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-black"
             title="Abrir em nova guia"
           >
             <ExternalLink size={16} />
           </button>
        </div>
        
        <div aria-hidden="true" className="flex items-center gap-3 overflow-hidden ml-auto">
           <span 
             className="hidden lg:inline-block font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-editorial-black transform lg:translate-x-12 opacity-0 lg:group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
             style={{ willChange: "transform, opacity" }}
           >
             Explorar
           </span>
           <div 
             className="w-9 h-9 rounded-full border border-editorial-gray/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#111111] group-hover:border-[#111111]"
             style={{ willChange: "background-color, border-color" }}
           >
               <ArrowRight 
                 size={15} 
                 className="text-editorial-black -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                 style={{ willChange: "transform, color" }}
               />
           </div>
        </div>
      </div>
    </article>
  );
};
