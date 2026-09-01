import React from 'react';
import { Template } from '@/core/domain/types';
import { EditorialCard } from '@/modules/templates/components/EditorialCard';

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

  return (
    <div className="mb-10 pb-10 border-b border-[#e0e0e0] mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-8 lg:gap-12 xl:gap-20 items-start">
        {/* Hero Column */}
        <div className="flex flex-col gap-8 lg:gap-12 group relative">
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
        <div className="hidden lg:flex flex-col gap-10 border-l border-[#e0e0e0] pl-10 xl:pl-16">
           <div className="font-serif italic text-4xl mb-4 font-light text-editorial-black">Selecionados</div>
           {listTemplates.slice(0, 3).map((template, idx) => (
              <div key={template.id} onClick={() => setSelectedTemplate(template)} className="group cursor-pointer border-b border-[#e0e0e0] pb-8 last:border-none">
                 <div className="flex items-center gap-4 mb-3">
                     <div className="font-sans font-medium text-sm text-editorial-gray">No. {(idx + 1).toString().padStart(2, '0')}</div>
                     <div className="flex-1 h-[1px] bg-[#e0e0e0] group-hover:bg-editorial-black transition-colors duration-500"></div>
                 </div>
                 <h3 className="font-sans font-bold text-xl xl:text-2xl leading-tight mb-3 group-hover:text-editorial-gray transition-colors duration-500">{template.title}</h3>
                 <p className="font-serif text-lg text-editorial-gray opacity-80 line-clamp-2">{template.description}</p>
              </div>
           ))}
           <button className="mt-auto flex items-center justify-between gap-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] group hover:text-editorial-gray transition-colors self-start border border-editorial-black px-6 py-3 rounded-full overflow-hidden relative">
              <span className="relative z-10 transition-colors group-hover:text-white">Explorar Índices</span>
              <div className="absolute inset-0 bg-editorial-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
           </button>
        </div>
      </div>
    </div>
  );
};
