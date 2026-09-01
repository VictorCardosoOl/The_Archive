import { useLayoutEffect, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { Template } from '@/core/domain/types';

interface UseSmoothScrollProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  contentWrapperRef: React.RefObject<HTMLDivElement>;
  selectedTemplate: Template | null;
  selectedCategory: string;
  debouncedSearchQuery: string;
  pinnedIds: string[];
}

export const useSmoothScroll = ({
  scrollContainerRef,
  contentWrapperRef,
  selectedTemplate,
  selectedCategory,
  debouncedSearchQuery,
  pinnedIds
}: UseSmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const updateRef = useRef<((time: number) => void) | null>(null);

  useLayoutEffect(() => {
    if (selectedTemplate) return; 
    if (!scrollContainerRef.current || !contentWrapperRef.current) return;

    const lenis = new Lenis({
        wrapper: scrollContainerRef.current,
        content: contentWrapperRef.current,
        duration: 0.9, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Use GSAP's ticker for 120hz lag-smoothed rendering
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    updateRef.current = update;
    
    gsap.ticker.add(update);

    // Keep gsap ticker running smoothly
    gsap.ticker.lagSmoothing(1000, 16);

    return () => {
      if (updateRef.current) {
        gsap.ticker.remove(updateRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [selectedTemplate, scrollContainerRef, contentWrapperRef]); 

  useEffect(() => {
      if (!selectedTemplate && lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
      }
  }, [selectedCategory, debouncedSearchQuery, pinnedIds, selectedTemplate]);
};
