import { useState, useCallback } from 'react';

const FAVORITES_KEY = 'quickcomms-favorites';

export const useFavorites = () => {
  const [pinnedIds, setPinnedIds] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const savedPins = localStorage.getItem(FAVORITES_KEY);
      if (!savedPins) return [];
      const parsed = JSON.parse(savedPins);
      return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
    } catch (e) {
      console.error("Failed to parse favorites", e);
      return [];
    }
  });

  const togglePin = useCallback((id: string) => {
    setPinnedIds(prev => {
      const newPins = prev.includes(id) 
        ? prev.filter(pId => pId !== id) 
        : [...prev, id];
      
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newPins));
      } catch (e) {
        console.error("Failed to save favorites", e);
      }
      
      return newPins;
    });
  }, []);

  return { pinnedIds, togglePin };
};
