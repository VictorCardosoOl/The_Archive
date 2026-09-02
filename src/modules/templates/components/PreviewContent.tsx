import React from 'react';

interface PreviewContentProps {
  subject?: string;
  content: string;
  secondaryContent?: string;
  secondaryLabel?: string;
}

export const PreviewContent: React.FC<PreviewContentProps> = ({ 
  subject, 
  content, 
  secondaryContent, 
  secondaryLabel 
}) => {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 md:p-8 2xl:p-12 3xl:p-16 pb-24 sm:pb-32 3xl:pb-48">
      <div className="max-w-3xl 3xl:max-w-4xl mx-auto space-y-6 sm:space-y-8 2xl:space-y-12">
        {subject && (
          <div className="bg-editorial-bg p-4 sm:p-6 rounded-xl border border-editorial-black/10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-1.5">Assunto</span>
            <p className="text-base sm:text-lg font-medium text-editorial-black leading-snug">{subject}</p>
          </div>
        )}

        <div className="text-[1rem] sm:text-[1.15rem] leading-[1.7] sm:leading-[1.8] max-w-none text-editorial-black whitespace-pre-wrap font-serif font-medium break-words">
          {content}
        </div>

        {secondaryContent && (
           <div className="mt-12 pt-8 border-t border-editorial-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-4">
                {secondaryLabel || 'Conteúdo Adicional'}
              </span>
              <div className="text-[1.15rem] leading-[1.8] max-w-none text-editorial-black whitespace-pre-wrap font-serif font-medium">
                {secondaryContent}
              </div>
           </div>
        )}
      </div>
    </div>
  );
};
