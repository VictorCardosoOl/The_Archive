import { create } from 'zustand';
import { Template } from '@/core/domain/types';
import { INITIAL_TEMPLATES } from '@/core/domain/constants';

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
  loadDefaults: () => void;
}

const getInitialTemplateIdFromUrl = (): string | null => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('template') || params.get('t') || null;
};

const updateUrlTemplateId = (templateId: string | null) => {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  if (templateId) {
    url.searchParams.set('template', templateId);
  } else {
    url.searchParams.delete('template');
    url.searchParams.delete('t');
  }
  window.history.pushState({}, '', url.toString());
};

const initialTemplateId = getInitialTemplateIdFromUrl();
const initialTemplate = initialTemplateId 
  ? INITIAL_TEMPLATES.find(t => t.id === initialTemplateId) || null 
  : null;

export const useAppStore = create<AppState>((set) => ({
  // UI State
  selectedCategory: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  selectedTemplate: initialTemplate,
  setSelectedTemplate: (template) => {
    const currentParam = getInitialTemplateIdFromUrl();
    const newId = template ? template.id : null;
    if (currentParam !== newId) {
      updateUrlTemplateId(newId);
    }
    set({ selectedTemplate: template });
  },
  
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  isSearchModalOpen: false,
  setIsSearchModalOpen: (isOpen) => set({ isSearchModalOpen: isOpen }),

  // Data State
  templates: INITIAL_TEMPLATES,
  loadDefaults: () => {
    const templateId = getInitialTemplateIdFromUrl();
    const matched = templateId ? INITIAL_TEMPLATES.find(t => t.id === templateId) || null : null;
    set({ templates: INITIAL_TEMPLATES, selectedTemplate: matched });
  },
}));
