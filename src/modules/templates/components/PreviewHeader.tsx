import React from 'react';
import { X, Search } from 'lucide-react';
import { useAppStore } from '@/core/application/useAppStore';

interface PreviewHeaderProps {
  title: string;
  description?: string;
  onClose: () => void;
}

export const PreviewHeader: React.FC<PreviewHeaderProps> = ({ title, description, onClose }) => {
  const { setIsSearchModalOpen } = useAppStore();

  return (
    <div className="z-20 shrink-0 relative bg-editorial-bg border-b border-[#e0e0e0] flex items-center justify-between pl-20 sm:pl-36 md:pl-44 pr-4 sm:pr-8 py-3.5 sm:py-6 min-h-[4.5rem] sm:min-h-[5.5rem]">
      <div className="max-w-4xl pr-2 sm:pr-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-editorial-black leading-tight line-clamp-2">{title}</h2>
        {description && (
          <p className="text-xs sm:text-sm md:text-base font-serif font-medium text-editorial-gray mt-1 line-clamp-1 sm:line-clamp-2">{description}</p>
        )}
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button 
          onClick={() => setIsSearchModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-[#E5E5E5] bg-white hover:border-editorial-black transition-colors text-editorial-black shadow-sm group active:scale-95"
          aria-label="Buscar modelos"
          title="Buscar modelos (Ctrl+K)"
        >
          <Search size={16} className="text-editorial-gray group-hover:text-editorial-black transition-colors" />
          <span className="hidden md:inline font-sans text-xs font-semibold uppercase tracking-wider text-editorial-gray group-hover:text-editorial-black transition-colors">Buscar</span>
          <kbd className="hidden lg:inline text-[9px] font-sans font-semibold text-editorial-gray/60 border border-editorial-gray/20 rounded px-1.5 py-0.5">⌘K</kbd>
        </button>

        <button 
          onClick={onClose}
          className="p-2 sm:p-2.5 hover:bg-black/5 rounded-full transition-colors text-editorial-black border border-transparent hover:border-[#E5E5E5]"
          aria-label="Fechar"
          title="Voltar / Fechar (Esc)"
        >
          <X size={20} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};
