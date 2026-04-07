import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/src/contact';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant/40 bg-inverse-surface/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-3xl text-on-surface sm:text-4xl">Política de privacidade</h1>
        <p className="mt-2 font-sans text-sm text-on-surface/65">
          Coimbra & Ruas — Advocacia Previdenciária · Última atualização: abril de 2026
        </p>

        <div className="mt-10 space-y-8 font-sans text-[0.9375rem] leading-relaxed text-on-surface/88">
          <section>
            <h2 className="font-heading text-xl text-on-surface">1. Quem somos</h2>
            <p className="mt-3">
              Esta política descreve como o escritório <strong>Coimbra & Ruas Advogados Associados</strong>{' '}
              trata dados pessoais coletados por meio do site{' '}
              <strong>maternidade.coimbraeruas.com.br</strong>, em conformidade com a Lei Geral de Proteção
              de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">2. Dados que podemos coletar</h2>
            <p className="mt-3">
              Quando você preenche o formulário de contato ou inicia conversa pelo WhatsApp, podemos receber,
              entre outros: nome, telefone, e-mail, informações sobre sua situação trabalhista e
              previdenciária e mensagens que você enviar. Dados de navegação (como páginas visitadas e tipo
              de dispositivo) podem ser coletados por ferramentas de medição de público e campanhas, quando
              estiverem ativas no site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">3. Finalidades e bases legais</h2>
            <p className="mt-3">Utilizamos seus dados para:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Entrar em contato e analisar sua demanda de orientação jurídica (execução de contrato ou
                procedimentos preliminares, art. 7º, V e X, LGPD);
              </li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis à advocacia (art. 7º, II, LGPD);</li>
              <li>
                Medir audiência e desempenho de campanhas publicitárias, quando houver seu consentimento ou
                outra base legal aplicável (art. 7º, I e IX, LGPD).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">4. Compartilhamento</h2>
            <p className="mt-3">
              Não vendemos seus dados. Podemos compartilhar informações com prestadores de serviço
              essenciais (hospedagem, ferramentas de comunicação e marketing) sob obrigações de
              confidencialidade e segurança, ou quando a lei exigir.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">5. Retenção e segurança</h2>
            <p className="mt-3">
              Mantemos os dados pelo tempo necessário para as finalidades descritas, inclusive para defesa
              em processos administrativos ou judiciais, e adotamos medidas técnicas e organizacionais
              compatíveis com o risco envolvido.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">6. Seus direitos (LGPD)</h2>
            <p className="mt-3">Você pode solicitar:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Confirmação de tratamento e acesso aos dados;</li>
              <li>Correção de dados incompletos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade
                com a LGPD;
              </li>
              <li>Informação sobre compartilhamentos;</li>
              <li>Revogação do consentimento, quando o tratamento se basear nele.</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato pelo e-mail{' '}
              <a href={CONTACT_MAILTO} className="font-medium text-primary underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">7. Cookies e tecnologias similares</h2>
            <p className="mt-3">
              O site pode utilizar cookies ou tecnologias de parceiros (por exemplo, Google) para análise e
              publicidade. Você pode gerenciar preferências no próprio navegador e, quando aplicável, nos
              avisos de consentimento exibidos.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-on-surface">8. Alterações</h2>
            <p className="mt-3">
              Podemos atualizar esta política para refletir mudanças legais ou no site. A data no topo desta
              página indica a revisão mais recente.
            </p>
          </section>

          <p className="rounded-lg border border-outline-variant/50 bg-inverse-surface/20 p-4 text-sm text-on-surface/75">
            Este texto tem caráter informativo e não substitui consulta jurídica individual. Ajustes finos
            devem ser validados pelo responsável pelo escritório e por profissional habilitado em proteção
            de dados, conforme sua operação.
          </p>
        </div>
      </article>
    </div>
  );
}
