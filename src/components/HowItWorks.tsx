import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  FileSearch,
  Route,
  Target,
} from 'lucide-react';
import { motion } from 'motion/react';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Você chama nossa equipe',
    description:
      'Preenche o formulário ou entra em contato pelo WhatsApp. O primeiro contato é rápido e sem compromisso.',
  },
  {
    step: '02',
    icon: FileSearch,
    title: 'Seu caso é analisado',
    description:
      'Verificamos sua situação, categoria, documentos e pontos principais do seu caso.',
  },
  {
    step: '03',
    icon: Route,
    title: 'Você recebe a orientação adequada',
    description:
      'Explicamos o que precisa ser feito, corrigido ou reunido. Sem juridiquês.',
  },
  {
    step: '04',
    icon: Target,
    title: 'Seguimos com a estratégia',
    description:
      'Cada situação exige atenção própria. O atendimento é personalizado e focado no seu caso.',
  },
] as const;

function ProcessConnector({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  if (orientation === 'horizontal') {
    return (
      <div
        className="hidden w-12 shrink-0 flex-col items-center justify-center gap-0 self-stretch py-4 lg:flex xl:w-16"
        aria-hidden
      >
        <div className="flex w-full items-center gap-0">
          <div className="h-px flex-1 bg-gradient-to-r from-primary-container/25 via-primary-container/80 to-primary-container" />
          <ChevronRight
            className="h-6 w-6 shrink-0 text-primary-container drop-shadow-[0_0_10px_rgba(187,152,87,0.35)]"
            strokeWidth={2.5}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center py-1 lg:hidden" aria-hidden>
      <div className="flex flex-col items-center">
        <div className="h-6 w-px bg-gradient-to-b from-primary-container/60 via-primary-container to-primary-container/40" />
        <ChevronDown className="-mt-0.5 h-5 w-5 text-primary-container" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-surface bg-premium-noise py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(187,152,87,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
            Veja como funciona
          </p>
          <h2 className="font-heading text-3xl leading-tight text-on-surface md:text-4xl lg:text-[2.5rem]">
            Do primeiro contato à{' '}
            <span className="font-bold text-primary-container">estratégia do seu caso</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-on-surface-variant md:text-lg">
            Um processo claro, com atenção individual e foco em evitar erros, atrasos e perda de
            oportunidade.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center">
          {steps.map((item, idx) => (
            <div key={item.step} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative flex min-w-0 flex-1 flex-col items-center rounded-2xl border border-outline-variant/40 bg-surface-container-low/80 p-6 text-center shadow-md ring-1 ring-black/[0.04] backdrop-blur-sm transition-[box-shadow,transform] sm:items-start sm:p-7 sm:text-left"
              >
                <span className="mb-4 inline-flex w-fit rounded-md border border-primary-container/30 bg-primary-container/[0.1] px-2.5 py-1 font-sans text-xs font-semibold tracking-widest text-primary">
                  {item.step}
                </span>
                <div className="mb-4 text-primary-container">
                  <item.icon className="h-10 w-10" strokeWidth={1.35} aria-hidden />
                </div>
                <h3 className="mb-3 font-heading text-2xl text-on-surface sm:text-xl">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-on-surface-variant md:text-[0.9375rem]">
                  {item.description}
                </p>
              </motion.article>
              {idx < steps.length - 1 && (
                <>
                  <ProcessConnector orientation="vertical" />
                  <ProcessConnector orientation="horizontal" />
                </>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-12 flex justify-center md:mt-14"
        >
          <motion.a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadIntent()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-animated-gradient inline-flex w-full max-w-md items-center justify-center rounded-sm px-8 py-4 text-center text-sm font-bold uppercase tracking-wide shadow-xl sm:w-auto sm:text-base"
          >
            Quero começar agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
