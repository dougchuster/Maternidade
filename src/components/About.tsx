import { motion } from 'motion/react';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface bg-premium-noise pb-16 pt-20 md:pb-32 md:pt-44"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(187,152,87,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container/25 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="relative isolate">
              <div
                className="pointer-events-none absolute inset-0 z-0 rounded-sm border-2 border-primary-container/55 bg-primary-container/[0.04] shadow-[0_0_0_1px_rgba(187,152,87,0.12)]"
                style={{ transform: 'translate(14px, 14px)' }}
                aria-hidden
              />
              <div className="relative z-10 overflow-hidden rounded-sm shadow-[0_24px_64px_-16px_rgba(27,28,26,0.35),0_8px_24px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
                <img
                  className="aspect-square h-auto w-full object-cover object-center"
                  src="/images/paula_matos.jpg"
                  alt="Dra. Paula Matos, advogada especialista em auxílio-maternidade e direito previdenciário"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container">
              A especialista
            </span>
            <h2 className="font-heading text-5xl leading-[1.1] text-on-surface md:text-6xl md:leading-[1.08]">
              Dra. Paula Matos
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-primary-container/70 to-primary-container/20 md:w-20" />
              <span className="h-px flex-1 max-w-[120px] bg-outline-variant/60" />
            </div>

            <blockquote className="mt-8 border-l-[3px] border-primary-container/40 pl-5 font-heading text-xl font-medium italic leading-relaxed text-on-surface md:text-2xl md:leading-snug">
              Meu compromisso é garantir que nenhuma mulher deixe de receber o que é seu por direito
              por falta de informação ou orientação inadequada.
            </blockquote>

            <div className="mt-8 max-w-xl space-y-5 text-left text-base leading-relaxed text-on-surface-variant font-sans md:text-lg">
              <p>
                Com vasta experiência em Direito Previdenciário, a Dra. Paula Matos lidera o Coimbra
                & Ruas com um foco inegociável no atendimento humanizado e na análise técnica
                criteriosa de cada caso.
              </p>
              <p>
                Sabemos que, em matéria previdenciária, um detalhe ignorado pode atrasar o benefício,
                gerar exigência desnecessária ou até levar a uma negativa evitável. Por isso, cada
                cliente é tratado de forma individual, com atenção aos documentos, ao histórico e à
                melhor estratégia para a realidade de cada situação.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-stretch gap-0 overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container-low/60 shadow-sm backdrop-blur-sm sm:flex-row sm:px-2 sm:py-6">
              <div className="flex flex-col items-center justify-center px-6 py-8 text-center sm:flex-1 sm:py-6">
                <p className="font-heading text-4xl font-semibold tabular-nums text-primary md:text-[2.75rem]">
                  10+
                </p>
                <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Anos de exp.
                </p>
              </div>
              <div
                className="h-px shrink-0 bg-gradient-to-r from-transparent via-outline-variant/80 to-transparent sm:hidden"
                aria-hidden
              />
              <div
                className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-outline-variant/70 to-transparent sm:block"
                aria-hidden
              />
              <div className="flex flex-col items-center justify-center px-6 py-8 text-center sm:flex-1 sm:py-6">
                <p className="font-heading text-4xl font-semibold tabular-nums text-primary md:text-[2.75rem]">
                  2k+
                </p>
                <p className="mt-2 max-w-[12rem] font-sans text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-on-surface-variant">
                  Famílias atendidas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
