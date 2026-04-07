import { Fragment } from 'react';
import { MessageCircleQuestion, AlertCircle, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const objections: {
  headline: string;
  text: string;
  icon: typeof MessageCircleQuestion;
}[] = [
  {
    icon: MessageCircleQuestion,
    headline: '"Mas e se eu achar que não tenho direito?"',
    text: 'Esse é exatamente o motivo para analisar. Muitas mulheres chegam com dúvida, insegurança ou informação incompleta. O problema é tomar essa decisão sozinha e só descobrir depois que poderia ter buscado o benefício.',
  },
  {
    icon: AlertCircle,
    headline: '"E se meu pedido já foi negado?"',
    text: 'Negativa não significa, automaticamente, que o caso está perdido. Em muitos cenários, o que faltou foi orientação correta, organização documental ou estratégia adequada.',
  },
  {
    icon: Clock,
    headline: '"Estou sem tempo e não sei nem por onde começar"',
    text: 'Você não precisa enfrentar isso sem direção. Nossa equipe orienta de forma objetiva para você saber o que fazer sem ficar perdida.',
  },
];

function ObjectionCard({
  item,
  delay = 0,
}: {
  item: (typeof objections)[number];
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay }}
      className="group flex h-full flex-col items-center rounded-xl border border-outline-variant/50 bg-surface p-7 text-center shadow-md transition-[border-color,box-shadow] hover:border-primary/30 hover:shadow-lg"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 text-primary-container ring-1 ring-primary-container/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-container/15">
        <item.icon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <h3 className="mb-4 font-heading text-xl font-semibold leading-snug text-on-surface sm:text-2xl">
        {item.headline}
      </h3>
      <p className="flex-1 font-sans text-sm leading-relaxed text-on-surface-variant md:text-[0.9375rem]">
        {item.text}
      </p>
    </motion.article>
  );
}

function StaticGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {objections.map((item, idx) => (
        <Fragment key={item.headline}>
          <ObjectionCard item={item} delay={idx * 0.08} />
        </Fragment>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-surface bg-premium-noise py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container/25 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Tire suas dúvidas
          </p>
          <h2 className="font-heading text-3xl text-on-surface sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Perguntas que{' '}
            <span className="font-bold text-primary">impedem você de buscar seu direito</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-[1.0625rem]">
            Se alguma dessas situações é a sua, saiba que existe um caminho. A análise correta do seu
            caso pode evitar erros, atrasos e decisões precipitadas.
          </p>
        </motion.div>

        {reduceMotion ? <StaticGrid /> : <StaticGrid />}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
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
            Quero tirar minhas dúvidas
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
