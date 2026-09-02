import React, { useMemo } from 'react';
import { Template } from '@/core/domain/types';
import { EditorialCard } from '@/modules/templates/components/EditorialCard';
import { CATEGORIES } from '@/core/domain/constants';
import { AppHeader } from '@/shared/ui/components/AppHeader';
import { AppFooter } from '@/shared/ui/components/AppFooter';
import { HeroSection } from '@/modules/templates/components/HeroSection';

interface EditorialFeedProps {
  pinnedTemplates: Template[];
  otherTemplates: Template[];
  setSelectedTemplate: (t: Template) => void;
  selectedCategory: string;
  onPin: (id: string) => void;
  pinnedIds: string[];
  scrollRef?: React.RefObject<HTMLDivElement>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

export const EditorialFeed: React.FC<EditorialFeedProps> = ({ 
  pinnedTemplates, otherTemplates, setSelectedTemplate, selectedCategory, onPin, pinnedIds,
  searchQuery, setSearchQuery, searchInputRef
}) => {
  const isAllCategory = selectedCategory === 'all';
  
  // Get up to 3 hero templates if in 'all' category
  const heroTemplates = useMemo(() => {
    if (!isAllCategory) return [];
    if (pinnedTemplates.length >= 3) return pinnedTemplates.slice(0, 3);
    const combined = [...pinnedTemplates, ...otherTemplates];
    return combined.slice(0, 3);
  }, [isAllCategory, pinnedTemplates, otherTemplates]);

  const listTemplates = useMemo(() => {
    if (!isAllCategory) return [...pinnedTemplates, ...otherTemplates];
    
    // If we are showing heroes, we need to remove those specific items from the list
    const heroIds = heroTemplates.map(t => t.id);
    return otherTemplates.filter(t => !heroIds.includes(t.id));
  }, [isAllCategory, pinnedTemplates, otherTemplates, heroTemplates]);

  const categoryName = isAllCategory 
    ? 'The Archive' 
    : CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Coleção';

  const feedItems = isAllCategory ? listTemplates.slice(3) : listTemplates;

  return (
    <div className="flex flex-col w-full bg-editorial-bg min-h-screen">
      {/* Main Content (Header + Feed) */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 2xl:p-20 3xl:p-24 4xl:p-32 w-full max-w-[2400px] mx-auto relative">
        
        <AppHeader 
          categoryInfo={{
            title: categoryName,
            subtitle: isAllCategory ? `— ${new Date().getFullYear()} / Q2 Collection` : 'Visualizando entradas da coleção indexada.'
          }}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchInputRef={searchInputRef}
        />

        {/* Hero Section (Only if No Search) */}
        {!searchQuery && isAllCategory && (
          <HeroSection 
            heroTemplates={heroTemplates}
            listTemplates={listTemplates}
            setSelectedTemplate={setSelectedTemplate}
            onPin={onPin}
            pinnedIds={pinnedIds}
          />
        )}

        {/* Grid Feed - Cinema Style Fluid Expansion */}
        <div id="editorial-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 md:gap-8 xl:gap-10 3xl:gap-12 py-4 2xl:py-8 3xl:py-12">
          {feedItems.map((template, idx) => {
            const displayIdx = isAllCategory ? idx + 3 : idx;
            
            return (
              <EditorialCard 
                key={template.id} 
                template={template} 
                onClick={() => setSelectedTemplate(template)} 
                onPin={onPin}
                isPinned={pinnedIds.includes(template.id)}
                index={displayIdx}
                isHero={false}
              />
            );
          })}
        </div>

        <AppFooter />
      </div>
    </div>
  );
};

