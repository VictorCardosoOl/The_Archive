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
    return [];
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
      set({ templates: INITIAL_TEMPLATES });
    } catch (e) {
      console.error(e);
    }
  },
  setTemplates: (templates) => {
    set({ templates });
  },
}));
