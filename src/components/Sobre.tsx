import { config } from '../config/site'
import { CabecalhoSecao, Secao } from './Secao'

export function Sobre() {
  const { missao, visao, valores } = config.missaoVisaoValores

  return (
    <Secao id="sobre">
      <CabecalhoSecao
        etiqueta="Sobre Nós"
        titulo="Uma organização dedicada ao seu crescimento"
        descricao="A Idiomas & Tecnologia nasceu para ajudar estudantes, profissionais e empresas a desenvolverem competências que ampliam oportunidades académicas, profissionais e pessoais."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-marca-linha bg-white p-7">
          <p className="mb-2 font-mono text-xs font-medium tracking-widest text-marca-azul-600 uppercase">Missão</p>
          <p className="leading-relaxed text-marca-texto">{missao}</p>
        </div>
        <div className="rounded-2xl border border-marca-linha bg-white p-7">
          <p className="mb-2 font-mono text-xs font-medium tracking-widest text-marca-azul-600 uppercase">Visão</p>
          <p className="leading-relaxed text-marca-texto">{visao}</p>
        </div>
        <div className="rounded-2xl bg-marca-tinta-900 p-7">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-marca-ciano-400 uppercase">Valores</p>
          <ul className="space-y-1.5">
            {valores.map((valor) => (
              <li key={valor} className="flex items-center gap-2 text-sm text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-marca-azul-400" />
                {valor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Secao>
  )
}
