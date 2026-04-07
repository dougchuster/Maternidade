import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const linkFocus =
  'outline-none ring-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/55 focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface';

const navLinks = [
  { label: 'Início', href: '#top' },
  { label: 'Desafios', href: '#pain-points' },
  { label: 'Especialidade', href: '#specialties' },
  { label: 'Sobre', href: '#about' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'Dúvidas', href: '#faq' },
] as const;

const linkClass = `font-sans text-[13px] font-medium tracking-tight text-white/75 transition-colors duration-300 hover:text-primary-container lg:text-sm ${linkFocus}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 z-50 w-full isolate border-0 border-transparent bg-inverse-surface/55 pt-[env(safe-area-inset-top)] shadow-[0_6px_28px_-4px_rgba(0,0,0,0.28),0_2px_12px_-2px_rgba(0,0,0,0.12)] outline-none backdrop-blur-xl backdrop-saturate-150 [backface-visibility:hidden] [transform:translateZ(0)]"
    >
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col px-4 py-3 sm:px-6 md:h-20 md:flex-row md:items-center md:justify-between md:gap-x-4 md:gap-y-0 md:py-0 lg:px-8">
        <div className="flex h-12 shrink-0 items-center justify-between gap-4 md:h-auto md:justify-start">
          <a href="#top" className={`flex shrink-0 items-center rounded-sm py-1 ${linkFocus}`}>
            <img
              src={encodeURI('/images/logo menu.webp')}
              alt="Coimbra & Ruas — Auxílio-Maternidade"
              className="pointer-events-none h-10 w-auto max-w-[min(100%,220px)] select-none object-contain object-left md:h-11 lg:h-12"
              width={260}
              height={56}
              decoding="async"
              draggable={false}
            />
          </a>
          <div className="flex items-center gap-2 md:hidden">
            <motion.a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLeadIntent()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`btn-animated-gradient shrink-0 rounded-sm px-4 py-2 text-xs font-medium ${linkFocus}`}
            >
              Consultar
            </motion.a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              className={`flex items-center justify-center rounded-sm p-1.5 text-white/75 transition-colors hover:text-primary-container ${linkFocus}`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 md:flex lg:gap-x-5 xl:gap-x-6">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        <motion.a
          href={CONTACT_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadIntent()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`btn-animated-gradient hidden shrink-0 rounded-sm px-6 py-2 text-sm font-medium md:inline-flex ${linkFocus}`}
        >
          Falar com especialista
        </motion.a>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-white/10 py-4">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-sm px-3 py-3 font-sans text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-primary-container ${linkFocus}`}
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-2 border-t border-white/10 pt-3">
                  <motion.a
                    href={CONTACT_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      trackLeadIntent();
                      setMobileOpen(false);
                    }}
                    className={`btn-animated-gradient flex w-full items-center justify-center rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-wide ${linkFocus}`}
                  >
                    Falar com especialista
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
