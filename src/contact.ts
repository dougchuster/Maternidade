/** Contato oficial do escritório — links e textos exibidos no site */
export const CONTACT_PHONE_E164 = '+556196942545';
export const CONTACT_PHONE_TEL = `tel:${CONTACT_PHONE_E164}`;
/** Número apenas dígitos (55 + DDD + número) para wa.me — deve bater com CONTACT_PHONE_DISPLAY */
export const CONTACT_WHATSAPP_DIGITS = '556196942545';

/**
 * Mensagem pré-preenchida ao abrir WhatsApp pelos CTAs do site (Hero, banner, flutuante, etc.).
 * O formulário de contato continua usando {@link whatsAppUrlWithText} com texto montado no envio.
 */
export const CONTACT_WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site e gostaria de saber se tenho direito ao auxílio-maternidade.';

/** Monta o link wa.me com texto pré-preenchido (UTF-8). */
export function whatsAppUrlWithText(message: string): string {
  const q = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_WHATSAPP_DIGITS}?text=${q}`;
}

/** Link principal do WhatsApp com mensagem padrão — único ponto de verdade para botões do site. */
export const CONTACT_WHATSAPP_HREF = whatsAppUrlWithText(CONTACT_WHATSAPP_DEFAULT_MESSAGE);

export const CONTACT_EMAIL = 'contato@coimbraeruas.com.br';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const CONTACT_PHONE_DISPLAY = '+55 61 9694-2545';

export const CONTACT_ADDRESS_LINES = [
  'Le Quartier - Águas Claras',
  'Av. Pau Brasil, Lote 10 - Sala 438',
  'Brasília-DF, 71926-000',
] as const;
