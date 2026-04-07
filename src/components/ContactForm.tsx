import { useState, type FormEvent } from 'react';
import { ChevronDown, Lock, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import {
  CONTACT_ADDRESS_LINES,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  whatsAppUrlWithText,
} from '@/src/contact';
import { trackLeadIntent } from '@/src/analytics';

const PANEL_DARK = '#252221';

const SITUACAO_OPTIONS = [
  'Estou grávida',
  'Já tive bebê',
  'Passei por adoção',
  'Guarda para fins de adoção',
] as const;

const TRABALHO_OPTIONS = [
  'Carteira assinada (CLT)',
  'MEI',
  'Autônoma',
  'Facultativa',
  'Empregada doméstica',
  'Desempregada',
] as const;

const INSS_OPTIONS = [
  'Ainda não fiz pedido',
  'Pedido em análise',
  'Pedido negado',
] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  situacao: (typeof SITUACAO_OPTIONS)[number];
  trabalho: (typeof TRABALHO_OPTIONS)[number];
  inss: (typeof INSS_OPTIONS)[number];
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  situacao: 'Estou grávida',
  trabalho: 'Carteira assinada (CLT)',
  inss: 'Ainda não fiz pedido',
  message: '',
};

function buildWhatsAppMessage(data: FormState): string {
  const lines = [
    'Olá! Vim pelo site e gostaria de uma análise do meu auxílio-maternidade.',
    '',
    `*Nome:* ${data.name.trim() || '—'}`,
    `*WhatsApp:* ${data.phone.trim() || '—'}`,
    `*E-mail:* ${data.email.trim() || '—'}`,
    `*Situação:* ${data.situacao}`,
    `*Trabalho:* ${data.trabalho}`,
    `*Pedido INSS:* ${data.inss}`,
    '',
    '*Mensagem:*',
    data.message.trim() || '—',
  ];
  return lines.join('\n');
}

const fieldClass =
  'w-full rounded-lg border border-on-primary-container/20 bg-surface/30 px-4 py-3.5 font-sans text-[0.9375rem] text-on-primary-container shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] placeholder:text-on-primary-container/45 transition-[border-color,box-shadow,background-color] outline-none focus:border-primary/60 focus:bg-surface/45 focus:ring-2 focus:ring-primary/15';

const labelClass =
  'mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-on-primary-container/90';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) {
      setError('Informe seu nome completo.');
      return;
    }
    if (!form.phone.trim()) {
      setError('Informe um telefone com WhatsApp.');
      return;
    }

    const body = buildWhatsAppMessage(form);
    const url = whatsAppUrlWithText(body);
    trackLeadIntent();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section
      id="form"
      className="relative overflow-hidden bg-surface bg-premium-noise py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(187,152,87,0.07),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 shadow-[0_28px_64px_-24px_rgba(27,28,26,0.28),0_12px_40px_-20px_rgba(119,90,31,0.12)] ring-1 ring-black/[0.05] lg:flex-row"
        >
          <div
            className="relative flex min-h-[280px] flex-col justify-center border-b border-white/[0.07] p-6 sm:p-10 md:p-12 lg:min-h-[320px] lg:w-[42%] lg:min-h-0 lg:border-b-0 lg:border-r lg:border-white/[0.07] lg:p-14 xl:p-16"
            style={{ backgroundColor: PANEL_DARK }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_90%_at_0%_0%,rgba(187,152,87,0.14),transparent_58%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_100%,rgba(0,0,0,0.45),transparent_50%)]"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-primary-container">
                Contato
              </p>
              <h2 className="font-heading text-3xl leading-[1.18] text-surface sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                Descubra se você pode estar{' '}
                <span className="font-bold text-primary-container">perdendo o seu auxílio-maternidade</span>
              </h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-surface/72">
                Preencha os dados abaixo e receba uma análise inicial do seu caso. Atendimento rápido
                e orientação clara sobre documentos e próximos passos.
              </p>

              <div
                className="my-10 h-px w-full max-w-xs bg-gradient-to-r from-primary-container/50 via-primary-container/25 to-transparent"
                aria-hidden
              />

              <ul className="space-y-4">
                <li className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4 backdrop-blur-[2px] transition-colors hover:border-white/[0.12]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container/12 text-primary-container ring-1 ring-primary-container/20">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 font-sans text-sm leading-relaxed text-surface/92">
                    {CONTACT_ADDRESS_LINES.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4 backdrop-blur-[2px] transition-colors hover:border-white/[0.12]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container/12 text-primary-container ring-1 ring-primary-container/20">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <a
                    href={CONTACT_PHONE_TEL}
                    className="font-sans text-sm text-surface/95 underline-offset-2 transition-colors hover:text-primary-container"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4 backdrop-blur-[2px] transition-colors hover:border-white/[0.12]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container/12 text-primary-container ring-1 ring-primary-container/20">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <a
                    href={CONTACT_MAILTO}
                    className="break-all font-sans text-sm text-surface/95 underline-offset-2 transition-colors hover:text-primary-container"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-primary-container p-6 sm:p-10 md:p-12 lg:w-[58%] lg:p-14 xl:p-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_100%_0%,rgba(255,255,255,0.14),transparent_55%)]"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="mb-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-on-primary-container/75">
                Formulário
              </p>
              <p className="mb-8 font-heading text-xl text-on-primary-container sm:text-2xl">
                Quero analisar meu direito
              </p>

              <form
                className="space-y-5"
                onSubmit={handleSubmit}
                noValidate
                aria-describedby={error ? 'contact-form-error' : undefined}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={fieldClass}
                      placeholder="Digite seu nome"
                      type="text"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>
                      WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className={fieldClass}
                      placeholder="(00) 00000-0000"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={fieldClass}
                    placeholder="seu@email.com"
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="contact-situacao" className={labelClass}>
                    Você está grávida, já teve bebê ou passou por adoção?
                  </label>
                  <div className="relative">
                    <select
                      id="contact-situacao"
                      name="situacao"
                      value={form.situacao}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          situacao: e.target.value as FormState['situacao'],
                        }))
                      }
                      className={`${fieldClass} cursor-pointer appearance-none pr-11`}
                    >
                      {SITUACAO_OPTIONS.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="bg-[#f5f0e8] text-on-surface"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-on-primary-container/55"
                      aria-hidden
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-trabalho" className={labelClass}>
                    Como você trabalha ou trabalhava?
                  </label>
                  <div className="relative">
                    <select
                      id="contact-trabalho"
                      name="trabalho"
                      value={form.trabalho}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          trabalho: e.target.value as FormState['trabalho'],
                        }))
                      }
                      className={`${fieldClass} cursor-pointer appearance-none pr-11`}
                    >
                      {TRABALHO_OPTIONS.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="bg-[#f5f0e8] text-on-surface"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-on-primary-container/55"
                      aria-hidden
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-inss" className={labelClass}>
                    Já fez pedido no INSS?
                  </label>
                  <div className="relative">
                    <select
                      id="contact-inss"
                      name="inss"
                      value={form.inss}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          inss: e.target.value as FormState['inss'],
                        }))
                      }
                      className={`${fieldClass} cursor-pointer appearance-none pr-11`}
                    >
                      {INSS_OPTIONS.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="bg-[#f5f0e8] text-on-surface"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-on-primary-container/55"
                      aria-hidden
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Conte seu caso
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={`${fieldClass} min-h-[120px] resize-y`}
                    placeholder="Conte brevemente sua situação..."
                    rows={4}
                  />
                </div>

                {error ? (
                  <div
                    id="contact-form-error"
                    className="rounded-lg border border-error/35 bg-error/10 px-4 py-3 font-sans text-sm leading-snug text-[#5c1008]"
                    role="alert"
                  >
                    {error}
                  </div>
                ) : null}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  style={{ backgroundColor: PANEL_DARK }}
                  className="flex w-full items-center justify-center gap-3 rounded-lg py-4 font-sans text-base font-bold uppercase tracking-[0.06em] text-surface shadow-[0_8px_28px_-6px_rgba(0,0,0,0.35)] transition-[filter,box-shadow] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary-container"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
                  Quero analisar meu direito
                </motion.button>
                <p className="text-center font-sans text-[0.7rem] leading-relaxed text-on-primary-container/70">
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <Lock className="h-3 w-3 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
                    Ao enviar seus dados, você autoriza o contato da equipe para retorno sobre sua
                    solicitação. Consulte nossa{' '}
                    <a
                      href="/privacidade"
                      className="font-medium underline-offset-2 hover:underline"
                    >
                      política de privacidade
                    </a>
                    .
                  </span>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
