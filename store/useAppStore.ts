import { create } from 'zustand';
import { Template } from '../types';

interface AppState {
  // UI State
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedTemplate: Template | null;
  setSelectedTemplate: (template: Template | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (isOpen: boolean) => void;

  // Data State
  templates: Template[];
  setTemplates: (templates: Template[]) => void;
  loadDefaults: () => Promise<void>;
}

const getInitialTemplates = (): Template[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('quickcomms-templates');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to load templates", e);
    return [];
  }
};

export const useAppStore = create<AppState>((set) => ({
  // UI State
  selectedCategory: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  selectedTemplate: null,
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
  
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  isSearchModalOpen: false,
  setIsSearchModalOpen: (isOpen) => set({ isSearchModalOpen: isOpen }),

  // Data State
  templates: getInitialTemplates(),
  loadDefaults: async () => {
    try {
      const { INITIAL_TEMPLATES } = await import('../constants');
      set((state) => {
        if (state.templates.length === 0) {
          const newTemplates = INITIAL_TEMPLATES;
          if (typeof window !== 'undefined') {
            localStorage.setItem('quickcomms-templates', JSON.stringify(newTemplates));
          }
          return { templates: newTemplates };
        }
        return state;
      });
    } catch (e) {
      console.error(e);
    }
  },
  setTemplates: (templates) => {
    set({ templates });
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          localStorage.setItem('quickcomms-templates', JSON.stringify(templates));
        }, { timeout: 2000 });
      } else {
        setTimeout(() => {
          localStorage.setItem('quickcomms-templates', JSON.stringify(templates));
        }, 100);
      }
    }
  },
}));
