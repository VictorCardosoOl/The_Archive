/**
 * Telemetry integration (Scalable Tracking).
 * 
 * PRODUTO & PERFORMANCE:
 * Para evitar o bloqueio da Main Thread (Core Web Vitals - INP/TBT) com 
 * scripts de terceiros (Sentry, LogRocket, GA4), a injeção deve ser orquestrada
 * via Web Workers utilizando uma proxy-architecture (ex: Partytown).
 * 
 * Configuração futura recomendada (vite.config.ts):
 * plugins: [partytownVite({ dest: join(__dirname, 'dist', '~partytown') })]
 */

export const initTelemetry = () => {
  if (import.meta.env.DEV) {
    console.info("Telemetry initialized via Main Thread (Dev Mode).");
  } else {
    // Em produção, isso engatilharia o script via Partytown web worker.
    // window.partytown = { ... };
  }
};

export const captureException = (error: Error, context?: unknown) => {
  // Envia erro silenciosamente para o worker
  console.error("[Telemetry Worker - Proxy] Exception captured:", error, context);
};

export const logEvent = (eventName: string, properties?: unknown) => {
  if (import.meta.env.DEV) {
    console.log(`[Telemetry Worker - Proxy] Event: ${eventName}`, properties);
  }
};
