import { create } from 'zustand';
import { Template } from '@/core/domain/types';
import { LocalTemplateRepository } from '@/infra/data/repositories/LocalTemplateRepository';
import { ITemplateRepository } from '@/core/domain/repositories/ITemplateRepository';

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
  loadDefaults: () => Promise<void>;
}

// In a real application, this repository instance might be injected via Context or a DI container
const templateRepository: ITemplateRepository = new LocalTemplateRepository();

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
  templates: [],
  loadDefaults: async () => {
    try {
      const templates = await templateRepository.getTemplates();
      set({ templates });
    } catch (e) {
      console.error(e);
      set({ templates: [] });
    }
  },
}));
