import React, { useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/core/application/useAppStore';
import { useFavorites } from '@/core/application/hooks/useFavorites';
import { useSmoothScroll } from '@/shared/ui/hooks/useSmoothScroll';
import { useDebounce } from '@/shared/utils/useDebounce';
import { SearchService } from '@/modules/search/services/SearchService';
import { EditorialFeed } from '@/modules/templates/components/EditorialFeed';
import { Editor } from '@/modules/templates/components/Editor';

const TRANSITION_EASE = [0.16, 1, 0.3, 1];

const pageVariants = {
  listInitial: { opacity: 0, scale: 0.98 },
  listAnimate: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: TRANSITION_EASE } 
  },
  listExit: { 
    opacity: 0, 
    scale: 0.98,
    transition: { duration: 0.3, ease: "easeIn" } 
  },
  editorInitial: { opacity: 0, y: "20px" },
  editorAnimate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: TRANSITION_EASE } 
  },
  editorExit: { 
    opacity: 0,
    y: "20px", 
    transition: { duration: 0.3, ease: "easeIn" } 
  }
};

export const AppRouter: React.FC = () => {
  const {
    selectedCategory,
    selectedTemplate, setSelectedTemplate,
    searchQuery, setSearchQuery,
    templates,
  } = useAppStore();

  const { pinnedIds, togglePin } = useFavorites();
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Smooth scroll logic hooked directly into router's view
  useSmoothScroll({
    scrollContainerRef,
    contentWrapperRef,
    selectedTemplate,
    selectedCategory,
    debouncedSearchQuery,
    pinnedIds
  });

  // Execute Domain Search Logic
  const filteredTemplates = useMemo(() => {
    return SearchService.filterTemplates(templates, debouncedSearchQuery, selectedCategory);
  }, [templates, debouncedSearchQuery, selectedCategory]);

  const pinnedTemplates = useMemo(() => filteredTemplates.filter(t => pinnedIds.includes(t.id)), [filteredTemplates, pinnedIds]);
  const otherTemplates = useMemo(() => filteredTemplates.filter(t => !pinnedIds.includes(t.id)), [filteredTemplates, pinnedIds]);

  return (
    <div className="relative flex-1 flex flex-col overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        {!selectedTemplate ? (
          <motion.div 
            key="list-view"
            variants={pageVariants}
            initial="listInitial"
            animate="listAnimate"
            exit="listExit"
            className="flex-1 flex flex-col w-full h-full will-change-transform"
          >
            <div 
              ref={scrollContainerRef} 
              className="flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-editorial-gray/20 hover:[&::-webkit-scrollbar-thumb]:bg-editorial-gray/40 [&::-webkit-scrollbar-thumb]:rounded-full" 
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(74, 74, 74, 0.2) transparent' }}
            >
              <div ref={contentWrapperRef} className="w-full min-h-full">
                <EditorialFeed 
                  pinnedTemplates={pinnedTemplates}
                  otherTemplates={otherTemplates}
                  setSelectedTemplate={setSelectedTemplate}
                  selectedCategory={selectedCategory}
                  onPin={togglePin}
                  pinnedIds={pinnedIds}
                  scrollRef={scrollContainerRef}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  searchInputRef={searchInputRef}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="editor-view"
            variants={pageVariants}
            initial="editorInitial"
            animate="editorAnimate"
            exit="editorExit"
            className="absolute inset-0 z-20 bg-editorial-bg overflow-hidden flex flex-col will-change-transform"
          >
             <Editor key={selectedTemplate.id} template={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
