import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useTemplateCopier } from '@/modules/templates/hooks/useTemplateCopier';

interface CopyFloatingButtonProps {
  subject?: string;
  content: string;
}

export const CopyFloatingButton: React.FC<CopyFloatingButtonProps> = ({ subject, content }) => {
  const { copyToClipboard, isCopied } = useTemplateCopier();

  const handleCopyAll = () => {
    const fullText = subject 
      ? `Assunto: ${subject}\n\n${content}` 
      : content;
    copyToClipboard(fullText, 'copy-all', true);
  };

  const copied = isCopied('copy-all');

  return (
    <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
      <button 
        onClick={handleCopyAll} 
        className={`
          pointer-events-auto flex items-center gap-3 px-8 py-4 border rounded-full shadow-lg transition-all duration-200 active:scale-95
          ${copied 
            ? 'bg-editorial-black text-white border-editorial-black' 
            : 'bg-editorial-black text-white border-editorial-black hover:bg-black/90'}
        `}
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
        <span className="text-sm font-bold uppercase tracking-widest">
          {copied ? 'Copiado' : 'Copiar Tudo'}
        </span>
      </button>
    </div>
  );
};
