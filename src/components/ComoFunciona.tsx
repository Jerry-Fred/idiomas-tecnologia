import { etapasProcesso } from '../data/comoFunciona'
import { CabecalhoSecao, Secao } from './Secao'

export function ComoFunciona() {
  return (
    <Secao id="como-funciona" className="bg-white">
      <CabecalhoSecao
        etiqueta="Como Funciona"
        titulo="Do primeiro contacto à certificação"
        descricao="Um processo simples e transparente, pensado para que saibas exactamente o que esperar em cada etapa."
      />

      <ol className="grid gap-6 md:grid-cols-5">
        {etapasProcesso.map((etapa, indice) => (
          <li key={etapa.titulo} className="relative rounded-2xl border border-marca-linha p-6">
            <span className="font-display text-3xl font-semibold text-marca-azul-100">
              {String(indice + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-marca-texto">{etapa.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-marca-texto-suave">{etapa.descricao}</p>
          </li>
        ))}
      </ol>
    </Secao>
  )
}
