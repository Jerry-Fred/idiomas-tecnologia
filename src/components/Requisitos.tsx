import { requisitosGerais, requisitosPorNivel } from '../data/requisitos'
import { CabecalhoSecao, Secao } from './Secao'

export function Requisitos() {
  return (
    <Secao id="requisitos">
      <CabecalhoSecao
        etiqueta="Requisitos"
        titulo="O que precisas para te inscreveres"
        descricao="Requisitos gerais de inscrição, válidos para todos os cursos e modalidades."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <ul className="space-y-3">
          {requisitosGerais.map((requisito) => (
            <li key={requisito} className="flex gap-3 rounded-xl border border-marca-linha bg-white p-4 text-sm leading-relaxed text-marca-texto">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0 text-marca-azul-500" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {requisito}
            </li>
          ))}
        </ul>

        <div>
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-marca-azul-600 uppercase">
            Requisitos por nível
          </p>
          <div className="space-y-3">
            {requisitosPorNivel.map((item) => (
              <div key={item.nivel} className="rounded-xl bg-marca-tinta-900 p-4">
                <p className="font-display text-sm font-semibold text-marca-ciano-400">{item.nivel}</p>
                <p className="mt-1 text-sm text-white/80">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Secao>
  )
}
