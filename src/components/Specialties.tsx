import type { CSSProperties } from 'react';
import {
  FileCheck,
  Search,
  Shield,
  Target,
  UserCheck,
  MessageSquareText,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackLeadIntent } from '@/src/analytics';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const specialtiesSectionStyle: CSSProperties = {
  backgroundColor: '#3d3a33',
  backgroundImage: [
    'radial-gradient(ellipse 130% 75% at 50% 0%, rgba(255, 191, 100, 0.2) 0%, rgba(255, 170, 80, 0.06) 38%, transparent 62%)',
    'radial-gradient(rgba(255, 255, 255, 0.085) 1px, transparent 1px)',
    'linear-gradient(180deg, #454238 0%, #3d3a33 42%, #2a2824 100%)',
  ].join(', '),
  backgroundSize: '100% 100%, 20px 20px, 100% 100%',
  backgroundRepeat: 'no-repeat, repeat, no-repeat',
  backgroundPosition: 'center top, 0 0, center',
  isolation: 'isolate',
};

const CARD_RADIAL_ORIGIN = ['100% 0%', '50% 0%', '0% 0%'] as const;

const authorityItems = [
  {
    icon: UserCheck,
    title: 'Atendimento focado',
    description: 'Foco em salário-maternidade e benefícios previdenciários. Sem respostas genéricas.',
  },
  {
    icon: Search,
    title: 'Análise individual',
    description: 'Cada caso é analisado de forma personalizada, sem respostas prontas.',
  },
  {
    icon: FileCheck,
    title: 'Verificação documental',
    description: 'Orientação objetiva sobre documentos necessários e próximos passos.',
  },
  {
    icon: Target,
    title: 'Estratégia correta',
    description: 'Planejamento pensado para reduzir erros no requerimento.',
  },
  {
    icon: Shield,
    title: 'Suporte especializado',
    description: 'Atendimento para casos com dúvida, exigência ou negativa.',
  },
  {
    icon: MessageSquareText,
    title: 'Clareza total',
    description: 'Você entende seu caso com linguagem simples, sem juridiquês desnecessário.',
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="relative overflow-hidden pt-24 pb-32 text-white md:pb-40"
      style={specialtiesSectionStyle}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-[3] h-[5px] w-[4.5rem] -translate-x-1/2 rounded-b-lg"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,230,180,0.15), #f0d080, #e8b050, #f0d080, rgba(255,230,180,0.15))',
          boxShadow:
            '0 0 28px 12px rgba(255, 195, 90, 0.45), 0 4px 20px rgba(255, 180, 60, 0.25)',
        }}
        aria-hidden
      />
      <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 font-heading text-4xl text-white sm:text-5xl md:text-[2.85rem] md:leading-tight">
            Atuação especializada em{' '}
            <span className="font-bold text-primary-container">auxílio-maternidade</span>
          </h2>
          <p className="mx-auto max-w-3xl font-sans text-base leading-relaxed text-white/80">
            Aqui, o seu caso não é tratado com resposta genérica. Nossa atuação é focada em análise
            previdenciária estratégica, com atenção aos documentos, ao histórico da segurada e à
            melhor condução do pedido conforme a realidade de cada cliente.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-primary-container/90" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {authorityItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.14] bg-[rgba(67,64,56,0.42)] p-6 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.42)] backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow,transform,border-color] hover:border-white/20 hover:shadow-[0_10px_32px_-12px_rgba(0,0,0,0.38)] sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl"
                style={{
                  background: `radial-gradient(ellipse 115% 85% at ${CARD_RADIAL_ORIGIN[idx % 3]}, rgba(130, 122, 105, 0.38) 0%, rgba(100, 95, 82, 0.12) 38%, transparent 62%)`,
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-0 top-1/2 z-[1] h-[68%] w-[2.5px] -translate-y-1/2 rounded-full bg-[#b08d35]"
                aria-hidden
              />
              <div className="relative z-[2] flex flex-1 flex-col items-center px-6 text-center">
                <item.icon
                  className="mb-4 h-11 w-11 shrink-0 text-[#c2a35d]"
                  strokeWidth={1.15}
                />
                <h3 className="mb-3 max-w-full font-heading text-xl font-medium leading-snug text-[#c2a35d] md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="max-w-full font-sans text-sm leading-relaxed text-white">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
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
            Quero uma análise especializada
          </motion.a>
        </div>
      </div>
    </section>
  );
}
