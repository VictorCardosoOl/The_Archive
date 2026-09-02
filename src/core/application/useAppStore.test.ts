import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from './useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    useAppStore.setState({
      selectedCategory: 'all',
      selectedTemplate: null,
      searchQuery: '',
      isSearchModalOpen: false,
    });
  });

  it('should initialize with default values', () => {
    const state = useAppStore.getState();
    expect(state.selectedCategory).toBe('all');
    expect(state.searchQuery).toBe('');
    expect(state.isSearchModalOpen).toBe(false);
    expect(state.templates.length).toBeGreaterThan(0);
  });

  it('should update selectedCategory', () => {
    useAppStore.getState().setSelectedCategory('analysis');
    expect(useAppStore.getState().selectedCategory).toBe('analysis');
  });

  it('should update searchQuery', () => {
    useAppStore.getState().setSearchQuery('SEO');
    expect(useAppStore.getState().searchQuery).toBe('SEO');
  });

  it('should toggle isSearchModalOpen', () => {
    useAppStore.getState().setIsSearchModalOpen(true);
    expect(useAppStore.getState().isSearchModalOpen).toBe(true);
  });
});
