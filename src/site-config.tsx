import type { ReactNode } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export type SocialLinkItem = {
  icon: ReactNode;
  href: string;
  label: string;
};

function trimUrl(v: string | undefined): string | undefined {
  const t = v?.trim();
  return t && t !== '#' ? t : undefined;
}

/** Redes sociais: defina VITE_SOCIAL_* no .env; ícones omitidos se URL vazia. */
export function getSocialLinks(): SocialLinkItem[] {
  const ig = trimUrl(import.meta.env.VITE_SOCIAL_INSTAGRAM);
  const fb = trimUrl(import.meta.env.VITE_SOCIAL_FACEBOOK);
  const li = trimUrl(import.meta.env.VITE_SOCIAL_LINKEDIN);
  const yt = trimUrl(import.meta.env.VITE_SOCIAL_YOUTUBE);

  const out: SocialLinkItem[] = [];
  if (ig) out.push({ icon: <Instagram className="h-4 w-4" />, href: ig, label: 'Instagram' });
  if (fb) out.push({ icon: <Facebook className="h-4 w-4" />, href: fb, label: 'Facebook' });
  if (li) out.push({ icon: <Linkedin className="h-4 w-4" />, href: li, label: 'LinkedIn' });
  if (yt) out.push({ icon: <Youtube className="h-4 w-4" />, href: yt, label: 'YouTube' });
  return out;
}
