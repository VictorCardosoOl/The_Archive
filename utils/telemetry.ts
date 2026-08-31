/**
 * Telemetry integration. 
 * Recomenda-se integrar com Sentry ou LogRocket em produção.
 */

export const initTelemetry = () => {
    // Exemplo para Sentry:
    // Sentry.init({
    //   dsn: import.meta.env.VITE_SENTRY_DSN,
    //   integrations: [new Sentry.BrowserTracing()],
    //   tracesSampleRate: 1.0,
    // });
    console.info("Telemetry initialized.");
  };
  
  export const captureException = (error: Error, context?: unknown) => {
    // Sentry.captureException(error, { extra: context });
    console.error("[Telemetry] Exception captured:", error, context);
  };
  
  export const logEvent = (eventName: string, properties?: unknown) => {
    // Sentry.captureMessage(eventName, { level: 'info', extra: properties });
    console.log(`[Telemetry] Event: ${eventName}`, properties);
  };

