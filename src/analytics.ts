/**
 * Conversões / eventos extras no Google tag já carregado em index.html (AW-18071930981).
 * Opcional: VITE_GOOGLE_ADS_CONVERSION_SEND_TO e VITE_GTAG_LEAD_EVENT_NAME no .env
 */

/**
 * Dispara conversão de lead (Google Ads e/ou evento GA4).
 * Chame ao clicar em CTAs de WhatsApp ou antes de abrir o wa.me no formulário.
 */
export function trackLeadIntent(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const sendTo = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_SEND_TO?.trim();
  if (sendTo) {
    window.gtag('event', 'conversion', { send_to: sendTo });
  }

  const leadEvent = import.meta.env.VITE_GTAG_LEAD_EVENT_NAME?.trim();
  if (leadEvent) {
    window.gtag('event', leadEvent, {});
  }
}
