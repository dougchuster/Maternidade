import { Baby, Calendar, UserCheck, FileSearch, ShieldAlert, HelpCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const possibilities = [
  {
    icon: Baby,
    title: 'Gestação',
    description: 'Está grávida e precisa entender seus direitos ao benefício.',
    accent: 'from-amber-500/15 to-amber-500/5',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    iconRing: 'ring-amber-400/20',
  },
  {
    icon: Calendar,
    title: 'Nascimento recente',
    description: 'Teve bebê recentemente e quer saber se pode solicitar o auxílio.',
    accent: 'from-rose-500/15 to-rose-500/5',
    iconBg: 'bg-rose-500/15',
    iconColor: 'text-rose-400',
    iconRing: 'ring-rose-400/20',
  },
  {
    icon: UserCheck,
    title: 'Adoção',
    description: 'Passou por processo de adoção e busca orientação sobre o benefício.',
    accent: 'from-emerald-500/15 to-emerald-500/5',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    iconRing: 'ring-emerald-400/20',
  },
  {
    icon: FileSearch,
    title: 'Guarda judicial',
    description: 'Obteve guarda para fins de adoção e quer verificar o direito.',
    accent: 'from-sky-500/15 to-sky-500/5',
    iconBg: 'bg-sky-500/15',
    iconColor: 'text-sky-400',
    iconRing: 'ring-sky-400/20',
  },
  {
    icon: ShieldAlert,
    title: 'Pedido negado',
    description: 'Teve o pedido negado pelo INSS e quer entender se ainda há possibilidade.',
    accent: 'from-red-500/15 to-red-500/5',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    iconRing: 'ring-red-400/20',
  },
  {
    icon: HelpCircle,
    title: 'Dúvida sobre contribuições',
    description: 'Não sabe se está em dia ou se mantém a qualidade de segurada.',
    accent: 'from-violet-500/15 to-violet-500/5',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    iconRing: 'ring-violet-400/20',
  },
];

function CardItem({ item, index }: { item: (typeof possibilities)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex w-full flex-col items-start gap-3.5 rounded-2xl border border-white/[0.18] bg-[#2a2623]/85 p-5 shadow-[0_20px_56px_-12px_rgba(187,152,87,0.10)] ring-1 ring-white/[0.05] backdrop-blur-[2px] transition-[transform,box-shadow,border-color] duration-300 hover:border-primary-container/30 hover:shadow-[0_20px_56px_-12px_rgba(187,152,87,0.25)] hover:ring-primary-container/10 sm:max-w-[280px]"
    >
      <div
        className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-primary-container/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-pulse"
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-100 transition-opacity duration-300`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-100 transition-opacity duration-300`}
        aria-hidden
      />
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor} ring-1 ${item.iconRing} transition-all duration-300 group-hover:scale-110`}>
        <item.icon className="h-5 w-5" strokeWidth={1.35} />
      </div>
      <div className="relative">
        <h3 className="mb-1 font-heading text-[0.95rem] font-semibold text-white">
          {item.title}
        </h3>
        <p className="text-[0.8rem] font-sans leading-relaxed text-surface/65">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

function HArrow() {
  return (
    <div className="hidden lg:flex lg:w-8 lg:shrink-0 lg:items-center lg:justify-center lg:self-center" aria-hidden>
      <div className="flex items-center gap-0.5">
        <div className="h-px w-3 bg-gradient-to-r from-primary-container/25 to-primary-container/50" />
        <ChevronRight className="h-3.5 w-3.5 text-primary-container/50" strokeWidth={2} />
      </div>
    </div>
  );
}

function VArrowDesktop() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:py-5" aria-hidden>
      <div className="flex flex-col items-center gap-1">
        <div className="h-4 w-px bg-gradient-to-b from-primary-container/40 via-primary-container/60 to-primary-container/40" />
        <ChevronDown className="h-4 w-4 text-primary-container/60" strokeWidth={2} />
      </div>
    </div>
  );
}

function VArrowMobile() {
  return (
    <div className="flex items-center justify-center py-3 lg:hidden" aria-hidden>
      <div className="flex flex-col items-center gap-0.5">
        <div className="h-3 w-px bg-gradient-to-b from-primary-container/40 to-primary-container/25" />
        <ChevronDown className="h-4 w-4 text-primary-container/40" strokeWidth={2} />
      </div>
    </div>
  );
}

function Row({ items, startIdx }: { items: typeof possibilities; startIdx: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap lg:justify-center lg:gap-0">
      {items.flatMap((item, rowIdx) => {
        const globalIdx = startIdx + rowIdx;
        const isLast = rowIdx === items.length - 1;
        return [
          <CardItem item={item} index={globalIdx} />,
          !isLast && <HArrow />,
        ];
      })}
    </div>
  );
}

export default function Benefits() {
  const row1 = possibilities.slice(0, 3);
  const row2 = possibilities.slice(3, 6);

  return (
    <section id="benefits" className="relative overflow-hidden py-24 text-surface md:py-28">
      <div className="absolute inset-0 bg-[#1b1918]" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_110%_60%_at_50%_-15%,rgba(187,152,87,0.16),transparent_52%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_0%,rgba(255,250,240,0.06),transparent_48%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-premium-noise opacity-50" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14"
        >
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
            Quem pode precisar
          </p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-[2.75rem] md:leading-tight">
            Quem pode precisar analisar o direito ao{' '}
            <span className="font-bold text-primary-container">auxílio-maternidade?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-surface/70">
            A resposta depende do caso concreto, mas a análise costuma ser essencial para mulheres
            em situações como:
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          {/* Row 1: 1 → 2 → 3 */}
          <Row items={row1} startIdx={0} />

          {/* Vertical connector: ↓ */}
          <VArrowDesktop />
          <VArrowMobile />

          {/* Row 2: 4 → 5 → 6 */}
          <Row items={row2} startIdx={3} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="font-heading text-lg font-medium italic leading-relaxed text-primary-container drop-shadow-[0_2px_24px_rgba(187,152,87,0.15)] md:text-xl">
            Mesmo quando a pessoa acha que não se encaixa, a análise técnica pode mostrar um caminho
            que ela ainda não tinha considerado.
          </p>
        </motion.div>

        <div className="mt-12 px-1 text-center sm:mt-16 md:mt-20">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-animated-gradient inline-block w-full max-w-md rounded-sm px-6 py-4 text-center text-base font-bold shadow-2xl sm:w-auto sm:max-w-none sm:px-10 sm:py-5 sm:text-lg"
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadIntent()}
          >
            QUERO UMA ANÁLISE DO MEU CASO
          </motion.a>
        </div>
      </div>
    </section>
  );
}
