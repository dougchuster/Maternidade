import { Clock, FileX, HelpCircle, XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const problems = [
  {
    n: '01',
    label: 'Deixam para depois',
    sublabel: 'e perdem o prazo',
    icon: Clock,
    gradient: 'from-red-500/20 via-red-500/8 to-transparent',
    borderHover: 'hover:border-red-400/40',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    iconRing: 'ring-red-400/20',
    glowColor: 'rgba(239,68,68,0.15)',
  },
  {
    n: '02',
    label: 'Protocolam sem orientação',
    sublabel: 'e cometem erros',
    icon: FileX,
    gradient: 'from-orange-500/20 via-orange-500/8 to-transparent',
    borderHover: 'hover:border-orange-400/40',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    iconRing: 'ring-orange-400/20',
    glowColor: 'rgba(251,146,60,0.15)',
  },
  {
    n: '03',
    label: 'Enviam documentos incompletos',
    sublabel: 'e o pedido trava',
    icon: FileX,
    gradient: 'from-amber-500/20 via-amber-500/8 to-transparent',
    borderHover: 'hover:border-amber-400/40',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    iconRing: 'ring-amber-400/20',
    glowColor: 'rgba(251,191,36,0.15)',
  },
  {
    n: '04',
    label: 'Acreditam que não têm direito',
    sublabel: 'sem analisar corretamente',
    icon: HelpCircle,
    gradient: 'from-yellow-500/20 via-yellow-500/8 to-transparent',
    borderHover: 'hover:border-yellow-400/40',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-400',
    iconRing: 'ring-yellow-400/20',
    glowColor: 'rgba(250,204,21,0.15)',
  },
  {
    n: '05',
    label: 'Desistem na primeira dificuldade',
    sublabel: 'e perdem tudo',
    icon: XCircle,
    gradient: 'from-red-600/20 via-red-600/8 to-transparent',
    borderHover: 'hover:border-red-500/40',
    iconBg: 'bg-red-600/15',
    iconColor: 'text-red-400',
    iconRing: 'ring-red-500/20',
    glowColor: 'rgba(220,38,38,0.15)',
  },
] as const;

function ProblemCard({ item, index }: { item: (typeof problems)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.10] bg-[#2a2623]/85 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.05] backdrop-blur-[2px] transition-[transform,box-shadow,border-color] duration-500 ${item.borderHover} hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)]`}
    >
      {/* Pulsing glow around card on hover */}
      <div
        className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-pulse"
        style={{ background: item.glowColor }}
        aria-hidden
      />
      {/* Gradient overlay always visible */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-100 transition-opacity duration-500`}
        aria-hidden
      />

      {/* Number badge always visible */}
      <div className="absolute right-5 top-5">
        <span className="font-heading text-5xl font-bold leading-none text-white/[0.08]">
          {item.n}
        </span>
      </div>

      {/* Icon with glow always visible */}
      <div className="relative p-7 pb-0">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-xl blur-xl opacity-60"
            style={{ background: item.glowColor }}
            aria-hidden
          />
          <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor} ring-1 ${item.iconRing} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
            <item.icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col justify-end p-7 pt-5">
        <h3 className="font-heading text-lg font-bold leading-snug text-white">
          {item.label}
        </h3>
        {item.sublabel && (
          <p className="mt-1.5 font-sans text-sm font-medium leading-relaxed text-surface/60">
            {item.sublabel}
          </p>
        )}
      </div>

      {/* Bottom progress bar always visible */}
      <div className="relative h-1 w-full bg-white/[0.03]">
        <div
          className={`h-full w-full bg-gradient-to-r ${item.gradient.replace('/20', '/60').replace('/8', '/30')}`}
          aria-hidden
        />
      </div>
    </motion.article>
  );
}

export default function Results() {
  return (
    <section id="results" className="relative overflow-hidden py-24 text-surface md:py-28">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-400/25 bg-red-500/10 px-6 py-2.5 sm:px-7 sm:py-3">
            <AlertTriangle className="h-5 w-5 text-red-400 sm:h-6 sm:w-6" strokeWidth={2} />
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-red-400 sm:text-base">
              Atenção
            </span>
          </div>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Você pode estar perdendo um{' '}
            <span className="font-bold text-primary-container">benefício importante</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-surface/70">
            O auxílio-maternidade não é um detalhe. Ele existe para proteger a segurada em um momento
            extremamente importante da vida. Mesmo assim, muitas mulheres:
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, idx) => (
              <ProblemCard item={item} index={idx} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="font-heading text-xl font-medium italic leading-relaxed text-primary-container drop-shadow-[0_2px_24px_rgba(187,152,87,0.15)] md:text-2xl">
            Cada caso precisa ser visto com atenção. O que você não pode fazer é continuar sem saber
            se está deixando um benefício para trás.
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadIntent()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-animated-gradient inline-flex items-center justify-center gap-3 rounded-sm px-8 py-4 text-center text-sm font-bold uppercase tracking-wide shadow-xl"
          >
            <span className="inline-flex shrink-0" aria-hidden>
              <FaWhatsapp size={22} />
            </span>
            Verificar meu direito
          </motion.a>
        </div>
      </div>
    </section>
  );
}
