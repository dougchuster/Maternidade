import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quem deve buscar análise do auxílio-maternidade?',
    answer:
      'Toda mulher que tenha dúvida real sobre o benefício, principalmente se está grávida, já teve bebê, adotou, está desempregada, atua como MEI ou autônoma, ou recebeu exigência/negativa.',
  },
  {
    question: 'Vale a pena analisar mesmo se eu não tiver certeza?',
    answer:
      'Sim. O erro mais comum é presumir que não tem direito sem verificar o caso corretamente.',
  },
  {
    question: 'E se eu já tentei resolver e não consegui?',
    answer:
      'Nesse cenário, a análise fica ainda mais importante para identificar onde está o problema e qual pode ser o próximo passo.',
  },
  {
    question: 'O atendimento é individual?',
    answer:
      'Sim. Cada caso possui detalhes próprios e precisa ser analisado de forma personalizada.',
  },
  {
    question: 'Sou MEI ou autônoma. Tenho direito?',
    answer:
      'Muitas mulheres nessa situação têm direito ao benefício. A análise do seu caso concreto é essencial para verificar contribuições, qualidade de segurada e possibilidade de concessão.',
  },
  {
    question: 'Estou desempregada. Perdi o direito?',
    answer:
      'Não necessariamente. Existe o período de graça, que mantém a qualidade de segurada mesmo sem contribuições. A análise do seu caso vai verificar se você ainda está nesse período.',
  },
  {
    question: 'Atendem clientes de outros estados?',
    answer:
      'Sim. Atuamos de forma 100% digital com segurança jurídica, atendendo clientes em todo o Brasil.',
  },
  {
    question: 'Quais documentos preciso reunir?',
    answer:
      'Depende do tipo de benefício, mas geralmente: RG, CPF, carteira de trabalho, CNIS, certidão de nascimento do bebê ou documento de adoção. Na primeira conversa, orientamos exatamente o que é necessário para o seu caso.',
  },
];

function FaqBackground() {
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
      <div className="pointer-events-none absolute inset-0 bg-premium-noise opacity-40" aria-hidden />
    </>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
  itemKey,
}: {
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  itemKey: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#2a2623]/60 backdrop-blur-[2px] ring-1 ring-white/[0.05] transition-[border-color,box-shadow] duration-500 hover:border-white/[0.14] hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.4)]"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full min-w-0 items-center gap-4 p-5 text-left transition-colors duration-300 sm:gap-5 sm:p-6 md:p-7"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span className="hidden shrink-0 items-center justify-center rounded-lg bg-primary-container/10 font-heading text-sm font-bold text-primary-container/70 ring-1 ring-primary-container/15 sm:flex sm:h-9 sm:w-9 md:h-10 md:w-10 md:text-base">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Question text */}
        <span className="min-w-0 flex-1 font-heading text-base font-semibold leading-snug text-white/90 transition-colors duration-300 group-hover:text-white sm:text-lg md:text-xl">
          {faq.question}
        </span>

        {/* Chevron */}
        <span
          className={`flex shrink-0 items-center justify-center rounded-full p-1.5 transition-all duration-500 ${
            isOpen
              ? 'rotate-180 bg-primary-container/15 text-primary-container'
              : 'text-white/30 group-hover:text-white/50'
          }`}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-5 pb-6 pt-0 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
              <div className="border-t border-white/[0.06] pt-5">
                <div className="flex gap-4 sm:gap-5">
                  {/* Mobile number badge */}
                  <span className="flex shrink-0 items-center justify-center rounded-lg bg-primary-container/10 font-heading text-sm font-bold text-primary-container/70 ring-1 ring-primary-container/15 sm:hidden sm:h-9 sm:w-9">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans text-[0.9375rem] leading-relaxed text-white/55 sm:text-base md:text-[1.0625rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 text-surface md:py-28">
      <FaqBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3 sm:gap-4" aria-hidden>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-primary-container/50 to-primary-container sm:w-16 md:w-24" />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-primary-container/25 bg-primary-container/[0.06] text-primary-container shadow-[0_0_28px_rgba(187,152,87,0.12)] sm:h-12 sm:w-12">
              <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </div>
            <span className="h-px w-10 bg-gradient-to-l from-transparent via-primary-container/50 to-primary-container sm:w-16 md:w-24" />
          </div>
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
            Tire suas dúvidas
          </p>
          <h2 className="font-heading text-3xl leading-[1.15] text-white drop-shadow-[0_2px_32px_rgba(187,152,87,0.1)] sm:text-4xl md:text-[2.65rem]">
            Perguntas <span className="font-bold text-primary-container">frequentes</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" aria-hidden />
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem
              itemKey={String(idx)}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
