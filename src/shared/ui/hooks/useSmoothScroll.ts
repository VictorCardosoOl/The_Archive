import { useLayoutEffect, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
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

  useLayoutEffect(() => {
    if (selectedTemplate) return; 
    if (!scrollContainerRef.current || !contentWrapperRef.current) return;

    const lenis = new Lenis({
        wrapper: scrollContainerRef.current,
        content: contentWrapperRef.current,
        lerp: 0.08,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
        wheelMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
