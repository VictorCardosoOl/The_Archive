import React, { ErrorInfo } from 'react';
import { useAppStore } from '@/core/application/useAppStore';
import { useKeyboardShortcuts } from '@/core/application/useKeyboardShortcuts';
import { CATEGORIES } from '@/core/domain/constants';
import { CommandMenu } from '@/modules/search/components/CommandMenu';
import { StaggeredMenu } from '@/shared/ui/components/StaggeredMenu';
import { AppRouter } from '@/core/application/components/AppRouter';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#FDFCFB] text-[#1C1C1E] p-8 text-center">
          <h1 className="text-2xl font-serif italic mb-4">Tivemos um desvio de rota no acervo.</h1>
          <p className="text-sm font-mono bg-red-50 text-red-600 p-4 rounded-lg max-w-2xl overflow-auto mb-2">
             {this.state.error?.message}
          </p>
          <p className="text-sm text-editorial-gray mb-6">Tentando restaurar a coleção...</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#1C1C1E] text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors"
          >
            Restaurar Coleção
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const AppContent: React.FC = () => {
  const {
    selectedCategory, setSelectedCategory,
    setSelectedTemplate,
    setSearchQuery,
    setIsSearchModalOpen,
    loadDefaults
  } = useAppStore();

  React.useEffect(() => {
    loadDefaults();
  }, [loadDefaults]);

  // Global Keyboard Shortcuts (Ctrl+K, etc)
  useKeyboardShortcuts();

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden relative bg-editorial-bg text-editorial-black font-sans selection:bg-editorial-black selection:text-white">
      
      <CommandMenu />

      <StaggeredMenu
        items={[
          { id: 'all', label: 'Visão Geral' },
          ...CATEGORIES.map(c => ({ id: c.id, label: c.name }))
        ]}
        activeId={selectedCategory}
        onSelectItem={(id) => {
           setSelectedCategory(id);
           setSearchQuery('');
           setSelectedTemplate(null);
        }}
        onGoHome={() => {
           setSelectedCategory('all');
           setSearchQuery('');
           setSelectedTemplate(null);
        }}
        position="left"
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
        <div className="md:hidden fixed top-4 right-4 z-50 pointer-events-auto">
           <button 
             onClick={() => setIsSearchModalOpen(true)} 
             className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full border border-[#E5E5E5] hover:bg-editorial-black hover:text-white transition-all shadow-sm active:scale-95 text-editorial-black" 
             aria-label="Abrir busca"
           >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
           </button>
        </div>
        
        <AppRouter />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
};

export default App;
