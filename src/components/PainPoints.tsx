import { useState } from 'react';
import { ImageIcon, AlertTriangle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const PAINPOINTS_IMAGE_SRC = '/images/uploads/aposentadoinss.webp';
const PAINPOINTS_IMAGE_SECOND_SRC = '/images/uploads/aposentado2.webp';
const PAINPOINTS_IMAGE_THIRD_SRC = '/images/uploads/aposentado3.webp';

const accentRed = 'font-semibold text-[#b91c1c]';

const painItems: { n: string; text: string }[] = [
  {
    n: '01',
    text: 'Está grávida ou acabou de ter bebê e não sabe se pode pedir o benefício?',
  },
  {
    n: '02',
    text: 'É MEI, autônoma, facultativa, empregada doméstica ou está desempregada?',
  },
  {
    n: '03',
    text: 'Já tentou pedir e teve exigência, atraso ou negativa?',
  },
  {
    n: '04',
    text: 'Não sabe quais documentos reunir?',
  },
  {
    n: '05',
    text: 'Tem medo de fazer o pedido errado e perder tempo?',
  },
  {
    n: '06',
    text: 'Recebeu informações diferentes e não sabe em quem confiar?',
  },
];

function PainPointsImage() {
  const [showFallback, setShowFallback] = useState(false);

  if (showFallback) {
    return (
      <div className="space-y-5 lg:sticky lg:top-24 lg:flex lg:h-full lg:flex-col">
        <div
          className="flex min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary-container/30 bg-gradient-to-br from-surface-container-high/90 to-surface-container-low px-6 py-12 text-center lg:min-h-0 lg:flex-1"
          role="img"
          aria-label="Verifique o arquivo em public/images/uploads/aposentadoinss.webp"
        >
          <ImageIcon className="h-10 w-10 text-primary-container/50" strokeWidth={1.25} aria-hidden />
          <p className="max-w-xs font-sans text-sm text-on-surface-variant">
            Verifique o arquivo em{' '}
            <code className="rounded bg-surface-container-highest px-1.5 py-0.5 text-xs text-on-surface">
              public/images/uploads/aposentadoinss.webp
            </code>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:flex-none">
          <figure className="group relative min-h-[160px] overflow-hidden rounded-2xl shadow-[0_12px_32px_-20px_rgba(27,28,26,0.18)] ring-1 ring-black/[0.06]">
            <img
              src={PAINPOINTS_IMAGE_SECOND_SRC}
              alt="Auxílio-maternidade e direitos previdenciários"
              className="h-full min-h-[160px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="group relative min-h-[160px] overflow-hidden rounded-2xl shadow-[0_12px_32px_-20px_rgba(27,28,26,0.18)] ring-1 ring-black/[0.06]">
            <img
              src={PAINPOINTS_IMAGE_THIRD_SRC}
              alt="Benefícios previdenciários e orientação especializada"
              className="h-full min-h-[160px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 lg:sticky lg:top-24 lg:flex lg:h-full lg:flex-col">
      <figure className="group relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(27,28,26,0.25)] ring-1 ring-black/[0.06] lg:flex-1">
        <img
          src={PAINPOINTS_IMAGE_SRC}
          alt="Auxílio-maternidade — ilustração da seção"
          className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] lg:aspect-auto lg:min-h-0"
          loading="lazy"
          decoding="async"
          onError={() => setShowFallback(true)}
        />
      </figure>

      <div className="grid grid-cols-2 gap-4 lg:flex-none">
        <figure className="group relative min-h-[160px] overflow-hidden rounded-2xl shadow-[0_12px_32px_-20px_rgba(27,28,26,0.18)] ring-1 ring-black/[0.06]">
          <img
            src={PAINPOINTS_IMAGE_SECOND_SRC}
            alt="Auxílio-maternidade e direitos previdenciários"
            className="h-full min-h-[160px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <figure className="group relative min-h-[160px] overflow-hidden rounded-2xl shadow-[0_12px_32px_-20px_rgba(27,28,26,0.18)] ring-1 ring-black/[0.06]">
          <img
            src={PAINPOINTS_IMAGE_THIRD_SRC}
            alt="Benefícios previdenciários e orientação especializada"
            className="h-full min-h-[160px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
}

function PainList() {
  return (
    <ul className="flex flex-col gap-5 md:gap-6">
      {painItems.map((item, idx) => (
        <motion.li
          key={item.n}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.08 }}
          whileHover={{ y: -3 }}
          className="group relative overflow-hidden rounded-2xl border border-red-200/70 bg-gradient-to-br from-white via-white to-red-50/[0.35] p-6 shadow-[0_10px_36px_-14px_rgba(185,28,28,0.08)] transition-[box-shadow,transform,border-color] duration-300 hover:border-red-300/90 hover:shadow-[0_18px_44px_-14px_rgba(185,28,28,0.12)] md:p-7"
        >
          <div
            className="pointer-events-none absolute left-0 top-1/2 z-[1] h-[68%] w-[2.5px] -translate-y-1/2 rounded-full bg-[#ef4444]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
          <div className="relative flex gap-4 md:gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-inverse-surface font-sans text-sm font-bold tabular-nums text-primary-container shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:h-[3.25rem] md:w-[3.25rem]">
              {item.n}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-pretty font-sans text-base font-medium leading-snug tracking-tight text-on-surface sm:text-lg md:text-xl md:leading-[1.45]">
                {item.text}
              </p>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

function ClosingHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-4xl px-2 text-center"
    >
      <p className="font-heading text-3xl leading-[1.25] text-on-surface sm:text-3xl md:text-4xl md:leading-[1.2] lg:text-[2.75rem] lg:leading-[1.15]">
        <span className="block">Se você se identificou com alguma dessas situações,</span>
        <span className="mt-2 block font-bold text-primary-container drop-shadow-[0_2px_24px_rgba(187,152,87,0.2)] md:mt-3">
          seu caso precisa de análise imediata.
        </span>
      </p>
      <div
        className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary-container/50 to-transparent md:mt-8 md:w-24"
        aria-hidden
      />
    </motion.div>
  );
}

function CtaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative mx-auto w-full max-w-5xl px-0 sm:px-2"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-b from-[#2a2623] via-[#1b1918] to-[#2a2623] shadow-[0_24px_64px_-20px_rgba(0,0,0,0.5),0_8px_32px_-12px_rgba(187,152,87,0.08)] ring-1 ring-white/[0.05] backdrop-blur-[2px]">
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500/20 via-red-500/70 to-red-500/20"
          aria-hidden
        />
        <div className="relative px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-8 flex flex-col items-center gap-4">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white shadow-[0_12px_32px_-8px_rgba(220,38,38,0.45)] ring-[3px] ring-white/20">
                <AlertTriangle className="h-10 w-10" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="font-sans text-2xl font-black uppercase tracking-[0.12em] text-red-500 sm:text-3xl md:text-4xl">
                Não espere o INSS negar
              </p>
            </div>

            <h3 className="font-heading text-[1.75rem] leading-[1.18] text-white sm:text-[2rem] md:text-[2.35rem] md:leading-[1.15] lg:text-[2.5rem]">
              Descubra agora se o seu caso pode ser analisado.
            </h3>

            <motion.a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLeadIntent()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-animated-gradient mt-10 flex w-full max-w-lg items-center justify-center gap-3 rounded-sm px-8 py-4 text-center text-sm font-bold uppercase tracking-wide shadow-xl sm:mt-11 sm:text-base"
            >
              <span className="inline-flex shrink-0" aria-hidden>
                <FaWhatsapp size={22} />
              </span>
              Analisar meu caso agora
            </motion.a>

            <p className="mt-4 max-w-sm font-sans text-xs leading-relaxed text-surface/50">
              Atendimento rápido. Sem compromisso na primeira conversa.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PainPoints() {
  return (
    <section
      id="pain-points"
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
          className="mb-10 max-w-3xl md:mb-12"
        >
          <h2 className="font-heading text-4xl leading-tight text-on-surface md:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
            O maior erro é achar que{' '}
            <span className="font-bold text-primary-container">"depois eu resolvo"</span>
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-on-surface-variant md:text-lg">
            Todos os dias, mulheres deixam de buscar o auxílio-maternidade por acreditarem que não
            têm direito, por estarem desempregadas, por serem MEI, autônomas ou por já terem recebido
            alguma informação errada. A verdade é simples: muita gente só descobre que poderia ter
            recebido o benefício quando já perdeu tempo demais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <PainList />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="min-w-0 lg:flex"
          >
            <PainPointsImage />
          </motion.div>
        </div>

        <div className="mt-14 md:mt-16 lg:mt-20">
          <ClosingHeadline />
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14">
          <CtaCard />
        </div>
      </div>
    </section>
  );
}
