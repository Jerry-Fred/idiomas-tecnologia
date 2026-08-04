import { compromissosSeguranca, funcionalidadesAreaAluno, statusApp } from '../data/aplicativo'
import { CabecalhoSecao, Secao } from './Secao'

/**
 * =============================================================================
 * SECÇÃO "APLICATIVO" -- app da marca + futura Área do Aluno
 * =============================================================================
 * Comunica a VISÃO de escalabilidade (app móvel + contas de aluno com acesso
 * a notas) sem prometer uma data nem uma funcionalidade que ainda não existe
 * como facto consumado -- toda a linguagem usa "em preparação"/"vai permitir",
 * nunca "já disponível", para não criar expectativas falsas nos visitantes.
 * ONDE ALTERAR: quando o app for lançado, ver instruções em data/aplicativo.ts.
 */
export function Aplicativo() {
  return (
    <Secao id="aplicativo" className="relative overflow-hidden bg-marca-tinta-900">
      <div className="fundo-rede absolute inset-0" />
      <div className="relative">
        <CabecalhoSecao
          etiqueta="Escalabilidade"
          titulo="O futuro aplicativo Idiomas & Tecnologia"
          descricao="Estamos a construir uma aplicação própria para que possas levar a tua aprendizagem contigo — com uma Área do Aluno pessoal, protegida ao mais alto nível de segurança."
          claro
        />

        {/* Selo "em preparação" para o download do app */}
        <div className="mb-14 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-marca-ciano-400" />
            {statusApp.mensagemEmPreparacao}
          </span>
          <div className="flex gap-3 opacity-60">
            <span className="rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-white">
               App Store (brevemente)
            </span>
            <span className="rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-white">
              ▶ Google Play (brevemente)
            </span>
          </div>
        </div>

        {/* Funcionalidades previstas para a Área do Aluno */}
        <p className="mb-5 font-mono text-xs font-medium tracking-widest text-marca-ciano-400 uppercase">
          A tua futura Área do Aluno vai permitir
        </p>
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {funcionalidadesAreaAluno.map((funcionalidade) => (
            <div key={funcionalidade.titulo} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-display text-base font-semibold text-white">{funcionalidade.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{funcionalidade.descricao}</p>
            </div>
          ))}
        </div>

        {/* Compromissos de segurança -- em destaque, é o argumento de confiança central desta secção */}
        <div className="rounded-2xl border border-marca-ciano-400/25 bg-marca-ciano-400/5 p-7">
          <div className="mb-4 flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-marca-ciano-400" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <h3 className="font-display text-lg font-semibold text-white">Máxima segurança, sempre</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-white/75">
            Cada conta de aluno será individual e protegida — garantimos que só o próprio titular acede às suas notas,
            dados e histórico. A segurança não é uma funcionalidade adicional: é a base sobre a qual toda a
            plataforma futura está a ser desenhada.
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {compromissosSeguranca.map((compromisso) => (
              <li key={compromisso} className="flex gap-2.5 text-sm text-white/85">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0 text-marca-ciano-400" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {compromisso}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Secao>
  )
}
