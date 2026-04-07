import { Eye, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const blocks = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Você entende o seu caso com linguagem simples, sem juridiquês desnecessário.',
  },
  {
    icon: GraduationCap,
    title: 'Estratégia',
    description:
      'Verificamos o cenário do seu caso e orientamos o melhor próximo passo.',
  },
  {
    icon: Eye,
    title: 'Agilidade e Especialização',
    description:
      'Atendimento pensado para quem precisa resolver com rapidez e segurança. Atuação voltada à área previdenciária, com foco em situações que exigem atenção documental e estratégia correta.',
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-surface bg-premium-noise py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(187,152,87,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
            Diferenciais
          </p>
          <h2 className="font-heading text-3xl leading-tight text-on-surface md:text-4xl lg:text-[2.5rem]">
            Por que fazer sua análise{' '}
            <br className="sm:hidden" />
            <span className="font-bold text-primary-container">conosco?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {blocks.map((b, idx) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex flex-col rounded-2xl border border-outline-variant/45 bg-white p-8 text-center shadow-[0_12px_40px_-20px_rgba(27,28,26,0.12)] ring-1 ring-black/[0.04]"
            >
              <div className="mb-5 flex justify-center text-primary-container">
                <b.icon className="h-12 w-12" strokeWidth={1.25} aria-hidden />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-on-surface">{b.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-on-surface-variant md:text-[0.9375rem]">
                {b.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
