import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

export default function WhatsAppFloatingButton() {
  const [showNotification, setShowNotification] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    if (!dismissed) return;
    const timer = setTimeout(() => {
      setDismissed(false);
      setShowNotification(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShowNotification(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Balão de notificação */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="relative mb-3 w-[min(100vw-2rem,300px)] max-w-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]"
            onClick={() => {
              trackLeadIntent();
              window.open(CONTACT_WHATSAPP_HREF, '_blank');
            }}
          >
            {/* Header verde */}
            <div className="flex items-center justify-between bg-[#075E54] px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-white/20">
                  <img
                    src="/images/paula_matos_wpp.jpg"
                    alt="Dra. Paula Matos"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dra. Paula Matos</p>
                  <p className="text-[11px] text-white/70">Online</p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="flex h-6 w-6 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            {/* Mensagem */}
            <div className="px-4 py-3">
              <div className="rounded-lg bg-[#DCF8C6] px-3.5 py-2.5">
                <p className="text-[13.5px] leading-snug text-[#1B2B34]">
                  Olá! 👋 Posso te ajudar com seu auxílio-maternidade? Faça uma análise gratuita do seu caso!
                </p>
                <p className="mt-1 text-right text-[10px] text-[#6B7B82]">
                  agora ✓✓
                </p>
              </div>
            </div>

            {/* Seta do balão */}
            <div
              className="absolute -bottom-2 right-8 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"
              aria-hidden
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão WhatsApp */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={CONTACT_WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_-4px_rgba(37,211,102,0.6)] transition-shadow hover:shadow-[0_6px_28px_-4px_rgba(37,211,102,0.7)]"
        aria-label="Conversar pelo WhatsApp"
        onClick={() => {
          trackLeadIntent();
          setShowNotification(false);
          setDismissed(true);
        }}
      >
        {/* Badge de notificação */}
        {showNotification && (
          <span className="absolute -top-1 -right-1 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white shadow-sm">
            1
          </span>
        )}

        {/* Ícone WhatsApp */}
        <svg
          className="h-[30px] w-[30px] text-white transition-transform group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}