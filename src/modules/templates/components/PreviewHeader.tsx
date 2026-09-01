import React from 'react';
import { X } from 'lucide-react';

interface PreviewHeaderProps {
  title: string;
  description?: string;
  onClose: () => void;
}

export const PreviewHeader: React.FC<PreviewHeaderProps> = ({ title, description, onClose }) => {
  return (
    <div className="z-20 shrink-0 relative bg-editorial-bg border-b border-[#e0e0e0] flex items-center justify-between px-8 py-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-serif italic text-editorial-black">{title}</h2>
        {description && (
          <p className="text-base font-serif font-medium text-editorial-gray mt-2">{description}</p>
        )}
      </div>
      <button 
        onClick={onClose}
        className="p-3 hover:bg-black/5 rounded-full transition-colors text-editorial-black"
        aria-label="Fechar"
      >
        <X size={24} />
      </button>
    </div>
  );
};
