/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Ads: valor completo "AW-123456789/label" da ação de conversão */
  readonly VITE_GOOGLE_ADS_CONVERSION_SEND_TO?: string;
  /** GA4: nome do evento extra ao gerar lead (ex.: generate_lead) */
  readonly VITE_GTAG_LEAD_EVENT_NAME?: string;
  readonly VITE_SOCIAL_INSTAGRAM?: string;
  readonly VITE_SOCIAL_FACEBOOK?: string;
  readonly VITE_SOCIAL_LINKEDIN?: string;
  readonly VITE_SOCIAL_YOUTUBE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
