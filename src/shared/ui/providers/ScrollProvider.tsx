import React, { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface ScrollContextValue {
  lenis: Lenis | null;
}

const ScrollContext = createContext<ScrollContextValue>({ lenis: null });

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
  wrapperRef?: React.RefObject<HTMLElement>;
  contentRef?: React.RefObject<HTMLElement>;
  options?: any;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ 
  children, 
  wrapperRef, 
  contentRef,
  options = {}
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Basic setup
    const wrapper = wrapperRef?.current || window;
    const content = contentRef?.current || document.documentElement;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 0.9, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      ...options
    });

    lenisRef.current = lenis;

    // Use native rAF instead of GSAP ticker
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
  }, [wrapperRef, contentRef, options]);

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </ScrollContext.Provider>
  );
};
