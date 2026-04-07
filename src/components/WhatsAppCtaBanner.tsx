import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

export default function WhatsAppCtaBanner() {
  return (
    <section
      className="relative z-30 mx-auto mb-0 w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 md:-mb-14"
      aria-label="Contato por WhatsApp"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-6 rounded-2xl bg-[#bb9856] px-5 py-8 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.38),0_4px_16px_-4px_rgba(0,0,0,0.15)] sm:gap-8 sm:px-9 sm:py-10 md:flex-row md:items-center md:justify-between md:gap-12 md:px-11 md:py-11 lg:px-12 lg:py-12"
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center md:min-w-0 md:flex-1 md:gap-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md md:h-[4.5rem] md:w-[4.5rem]">
            <FaWhatsapp size={40} color="#ffffff" aria-hidden />
          </div>
          <div className="min-w-0 text-center sm:text-left">
            <h3 className="text-balance font-heading text-2xl font-bold leading-[1.2] text-[#1b1918] sm:text-2xl sm:leading-[1.2] md:text-3xl md:leading-tight">
              Não espere o INSS negar para correr atrás
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-white/95 md:mt-4 md:text-lg">
              Descubra agora se o seu caso pode ser analisado. Atendimento rápido e orientação clara
              sobre seus direitos ao auxílio-maternidade.
            </p>
          </div>
        </div>

        <a
          href={CONTACT_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadIntent()}
          className="group inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-lg border border-[rgba(187,152,86,0.32)] bg-inverse-surface/70 px-6 py-4 font-sans text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[10px] backdrop-saturate-150 transition-[background-color,border-color,transform] hover:border-[#bb9856]/45 hover:bg-inverse-surface/82 sm:w-auto sm:gap-3 sm:px-10 sm:py-[1.125rem] sm:text-xs md:text-[0.8125rem]"
        >
          <MessageCircle
            className="h-[1.125rem] w-[1.125rem] shrink-0 text-white sm:h-5 sm:w-5"
            strokeWidth={1.5}
            aria-hidden
          />
          Falar pelo WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
