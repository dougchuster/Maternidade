import { Mail, MapPin, Phone } from 'lucide-react';
import {
  CONTACT_ADDRESS_LINES,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '@/src/contact';
import { getSocialLinks } from '@/src/site-config';

const year = new Date().getFullYear();

const quickLinks = [
  { title: 'Início', href: '/' },
  { title: 'Desafios', href: '/#pain-points' },
  { title: 'Especialidade', href: '/#specialties' },
  { title: 'Sobre', href: '/#about' },
  { title: 'Como funciona', href: '/#how-it-works' },
  { title: 'Dúvidas', href: '/#faq' },
  { title: 'Contato', href: '/#form' },
  { title: 'Privacidade', href: '/privacidade' },
] as const;

/** Mesmo stack atmosférico de FAQ / Benefits */
function FooterBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[#1b1918]" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_110%_60%_at_50%_-15%,rgba(187,152,87,0.16),transparent_52%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_0%,rgba(255,250,240,0.06),transparent_48%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_85%,rgba(0,0,0,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(187,152,87,0.11) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(187,152,87,0.11) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '28px 28px',
          backgroundPosition: 'center',
          WebkitMaskImage:
            'radial-gradient(ellipse 78% 68% at 50% 50%, black 0%, black 48%, rgba(0,0,0,0.8) 62%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 78% 68% at 50% 50%, black 0%, black 48%, rgba(0,0,0,0.8) 62%, transparent 100%)',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-premium-noise opacity-50" aria-hidden />
    </>
  );
}

export function MinimalFooter() {
  const socialLinks = getSocialLinks();

  return (
    <footer className="relative overflow-hidden text-surface">
      <FooterBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary-container/25 to-transparent"
          aria-hidden
        />

        <div className="py-10 md:py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
            {/* Logo + texto */}
            <div className="min-w-0">
              <a
                href="/"
                className="inline-flex max-w-full opacity-90 transition-opacity hover:opacity-100"
              >
                <img
                  src={encodeURI('/images/logo menu.webp')}
                  alt="Coimbra & Ruas — Advocacia previdenciária"
                  className="pointer-events-none h-10 w-auto max-w-[min(100%,240px)] select-none object-contain object-left sm:h-11"
                  width={260}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </a>
              <p className="mt-4 max-w-sm text-pretty font-sans text-sm leading-relaxed text-surface/65">
                Coimbra & Ruas — advocacia previdenciária. Atuamos em aposentadorias, revisões, BPC/LOAS
                e planejamento com ética e proximidade ao cliente.
              </p>
              {socialLinks.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-primary-container/20 bg-inverse-surface/30 p-2 text-surface/90 backdrop-blur-sm transition-colors hover:border-primary-container/45 hover:bg-primary-container/10 hover:text-primary-container"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Links rápidos */}
            <div className="min-w-0 md:pt-1">
              <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-wider text-primary-container">
                Links rápidos
              </span>
              <nav className="flex flex-col gap-2">
                {quickLinks.map(({ href, title }) => (
                  <a
                    key={href}
                    href={href}
                    className="font-sans text-sm text-surface/60 transition-colors hover:text-primary-container"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contato */}
            <div className="min-w-0 md:pt-1">
              <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-wider text-primary-container">
                Contato
              </span>
              <div className="space-y-4 font-sans text-sm text-surface/75">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-container" aria-hidden />
                  <div className="min-w-0">
                    {CONTACT_ADDRESS_LINES.map((line, i) => (
                      <span key={i} className="block text-pretty">
                        {line}
                      </span>
                    ))}
                    <span className="mt-1 block text-xs text-surface/45">Águas Claras, Brasília-DF</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-container" aria-hidden />
                  <a href={CONTACT_PHONE_TEL} className="transition-colors hover:text-primary-container">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-container" aria-hidden />
                  <a
                    href={CONTACT_MAILTO}
                    className="break-all transition-colors hover:text-primary-container"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-primary-container/30 to-transparent md:mt-12"
            aria-hidden
          />

          <p className="mt-6 text-center font-sans text-xs text-surface/40 md:mt-8">
            © {year} Coimbra & Ruas Advogados Associados. Todos os direitos reservados. ·{' '}
            <a href="/privacidade" className="underline-offset-2 transition-colors hover:text-surface/55 hover:underline">
              Política de privacidade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
