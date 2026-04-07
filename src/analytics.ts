/**
 * Google tag (gtag.js) opcional — configure VITE_GTAG_ID e variáveis de conversão no .env
 */

function appendGtagScript(measurementId: string): void {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(s);
}

/** Carrega gtag uma vez, se VITE_GTAG_ID estiver definido. */
export function initGtag(): void {
  const id = import.meta.env.VITE_GTAG_ID?.trim();
  if (!id || typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);

  appendGtagScript(id);
}

/**
 * Dispara conversão de lead (Google Ads e/ou evento GA4).
 * Chame ao clicar em CTAs de WhatsApp ou antes de abrir o wa.me no formulário.
 */
export function trackLeadIntent(): void {
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;

  const sendTo = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_SEND_TO?.trim();
  if (sendTo) {
    gtag('event', 'conversion', { send_to: sendTo });
  }

  const leadEvent = import.meta.env.VITE_GTAG_LEAD_EVENT_NAME?.trim();
  if (leadEvent) {
    gtag('event', leadEvent, {});
  }
}
