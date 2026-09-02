import React from 'react';
import { Template } from '@/core/domain/types';
import { EditorialCard } from '@/modules/templates/components/EditorialCard';
import { ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  heroTemplates: Template[];
  listTemplates: Template[];
  setSelectedTemplate: (t: Template) => void;
  onPin: (id: string) => void;
  pinnedIds: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroTemplates,
  listTemplates,
  setSelectedTemplate,
  onPin,
  pinnedIds
}) => {
  if (heroTemplates.length === 0) return null;

  const handleOpenInNewTab = (e: React.MouseEvent, templateId: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}?template=${encodeURIComponent(templateId)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToGrid = () => {
    const gridEl = document.getElementById('editorial-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-10 2xl:mb-16 3xl:mb-20 pb-10 2xl:pb-16 3xl:pb-20 border-b border-[#e0e0e0] mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] 3xl:grid-cols-[3fr_1.2fr] gap-8 lg:gap-12 xl:gap-16 3xl:gap-24 items-start">
        {/* Hero Column */}
        <div className="flex flex-col gap-8 lg:gap-12 3xl:gap-16 group relative">
          {heroTemplates.map((template, hIdx) => (
            <EditorialCard 
              key={template.id} 
              template={template} 
              onClick={() => setSelectedTemplate(template)} 
              onPin={onPin}
              isPinned={pinnedIds.includes(template.id)}
              index={hIdx} 
              isHero={hIdx === 0} 
            />
          ))}
        </div>

        {/* Secondary Column (Desktop Only) - Featured Articles */}
        <div className="hidden lg:flex flex-col gap-8 xl:gap-10 3xl:gap-14 border-l border-[#e0e0e0] pl-8 xl:pl-12 3xl:pl-16">
           <div className="font-serif italic text-3xl 2xl:text-4xl 3xl:text-5xl mb-2 2xl:mb-4 font-light text-editorial-black">Selecionados</div>
           {listTemplates.slice(0, 3).map((template, idx) => (
              <div key={template.id} onClick={() => setSelectedTemplate(template)} className="group cursor-pointer border-b border-[#e0e0e0] pb-6 2xl:pb-8 last:border-none relative">
                 <div className="flex items-center justify-between mb-2.5">
                     <div className="flex items-center gap-4 flex-1">
                       <div className="font-sans font-medium text-xs 2xl:text-sm text-editorial-gray">No. {(idx + 1).toString().padStart(2, '0')}</div>
                       <div className="flex-1 h-[1px] bg-[#e0e0e0] group-hover:bg-editorial-black transition-colors duration-500 mr-2"></div>
                     </div>
                     <button 
                       onClick={(e) => handleOpenInNewTab(e, template.id)} 
                       className="p-1.5 rounded-full hover:bg-black/5 text-editorial-gray hover:text-editorial-black transition-colors opacity-0 group-hover:opacity-100" 
                       title="Abrir em nova guia"
                       aria-label="Abrir em nova guia"
                     >
                       <ExternalLink size={14} />
                     </button>
                 </div>
                 <h3 className="font-serif font-semibold text-lg xl:text-xl 3xl:text-2xl leading-tight mb-2 group-hover:text-editorial-gray transition-colors duration-500 text-editorial-black">{template.title}</h3>
                 <p className="font-serif font-normal text-sm xl:text-base 3xl:text-lg text-editorial-black/80 line-clamp-2">{template.description}</p>
              </div>
           ))}
           <button 
             onClick={handleScrollToGrid}
             className="mt-auto flex items-center justify-between gap-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] group hover:text-editorial-gray transition-colors self-start border border-editorial-black px-6 py-3 rounded-full overflow-hidden relative cursor-pointer"
           >
              <span className="relative z-10 transition-colors group-hover:text-white">Explorar Índices</span>
              <div className="absolute inset-0 bg-editorial-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
           </button>
        </div>
      </div>
    </div>
  );
};
