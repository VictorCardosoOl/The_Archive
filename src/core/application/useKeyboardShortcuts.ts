import { useEffect } from 'react';
import { useAppStore } from '@/core/application/useAppStore';

export const useKeyboardShortcuts = () => {
  const {
    selectedTemplate,
    setSelectedTemplate,
    searchQuery,
    setSearchQuery,
    isSearchModalOpen,
    setIsSearchModalOpen
  } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        if (isSearchModalOpen) {
          e.preventDefault();
          setIsSearchModalOpen(false);
          return;
        }
        if (selectedTemplate) {
          e.preventDefault();
          setSelectedTemplate(null);
          return;
        }
        if (searchQuery) {
          setSearchQuery('');
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTemplate, searchQuery, isSearchModalOpen, setSelectedTemplate, setSearchQuery, setIsSearchModalOpen]);
};
