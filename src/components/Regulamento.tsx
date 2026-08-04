import { seccoesRegulamento } from '../data/regulamento'
import { CabecalhoSecao, Secao } from './Secao'

export function Regulamento() {
  return (
    <Secao id="regulamento" className="bg-white">
      <CabecalhoSecao
        etiqueta="Regulamento"
        titulo="Regras claras para uma boa experiência de todos"
        descricao="Resumo das principais regras de funcionamento. O regulamento completo é entregue no acto da inscrição."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {seccoesRegulamento.map((seccao) => (
          <details key={seccao.titulo} className="group rounded-2xl border border-marca-linha p-5" open>
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-marca-texto">
              {seccao.titulo}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 flex-shrink-0 text-marca-azul-500 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <ul className="mt-3 space-y-2">
              {seccao.regras.map((regra) => (
                <li key={regra} className="text-sm leading-relaxed text-marca-texto-suave">
                  · {regra}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-marca-texto-suave">
        Este resumo tem carácter meramente informativo e não substitui o regulamento interno oficial da organização.
      </p>
    </Secao>
  )
}
