import React, { useMemo } from 'react';
import { Template } from '@/core/domain/types';
import { EditorialCard } from '@/modules/templates/components/EditorialCard';
import { CATEGORIES } from '@/core/domain/constants';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useWindowColumns } from '@/shared/utils/useWindowColumns';
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
  pinnedTemplates, otherTemplates, setSelectedTemplate, selectedCategory, onPin, pinnedIds, scrollRef,
  searchQuery, setSearchQuery, searchInputRef
}) => {
  const isAllCategory = selectedCategory === 'all';
  
  // Get up to 2 hero templates if in 'all' category
  const heroTemplates = useMemo(() => {
    if (!isAllCategory) return [];
    if (pinnedTemplates.length >= 2) return pinnedTemplates.slice(0, 2);
    if (pinnedTemplates.length === 1) return [pinnedTemplates[0], otherTemplates[0]];
    return otherTemplates.slice(0, 2);
  }, [isAllCategory, pinnedTemplates, otherTemplates]);

  const listTemplates = useMemo(() => {
    if (!isAllCategory) return [...pinnedTemplates, ...otherTemplates];
    
    // If we are showing heroes, we need to remove those specific items from the list
    const heroIds = heroTemplates.map(t => t.id);
    return otherTemplates.filter(t => !heroIds.includes(t.id));
  }, [isAllCategory, pinnedTemplates, otherTemplates, heroTemplates]);

  const categoryName = isAllCategory 
    ? 'The Archive.' 
    : CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Coleção';

  // --- VIRTUALIZATION LOGIC ---
  const cols = useWindowColumns();
  const feedItems = isAllCategory ? listTemplates.slice(3) : listTemplates;
  const rowCount = Math.ceil(feedItems.length / cols);
  
  const gapY = cols >= 3 ? 80 : 64; // Reduced from 112/96
  
  // eslint-disable-next-line react-hooks/incompatible-library
  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => scrollRef?.current || null,
    estimateSize: () => 350 + gapY, // Reduced from 400
    overscan: 2,
  });

  return (
    <div className="flex flex-col w-full bg-editorial-bg min-h-screen">
      {/* Main Content (Header + Feed) */}
      <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-12 xl:p-20 w-full mx-auto relative">
        
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

        {/* Virtualized Grid Feed */}
        <div 
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const rowIndex = virtualRow.index;
            const itemsInRow = feedItems.slice(rowIndex * cols, rowIndex * cols + cols);
            
            return (
              <div
                key={virtualRow.key}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size - gapY}px`, // Subtract gap from size if we want
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-12 gap-y-0 xl:gap-x-16`}
              >
                {itemsInRow.map((template, colIdx) => {
                  const absoluteIdx = rowIndex * cols + colIdx;
                  const displayIdx = isAllCategory ? absoluteIdx + 3 : absoluteIdx;
                  
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
            );
          })}
        </div>

        <AppFooter />
      </div>
    </div>
  );
};

