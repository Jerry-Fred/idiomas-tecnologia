import { precosPorGrupo, rotulosGrupoPreco } from '../data/precos'
import { config } from '../config/site'
import { formatarMoeda } from '../utils/formatarMoeda'
import { CabecalhoSecao, Secao } from './Secao'

export function TabelaPrecos() {
  return (
    <Secao id="precos" className="bg-white">
      <CabecalhoSecao
        etiqueta="Investimento"
        titulo="Preços claros, sem surpresas"
        descricao="Escolhe a modalidade que melhor se adapta à tua rotina."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {(Object.keys(precosPorGrupo) as Array<keyof typeof precosPorGrupo>).map((grupo) => (
          <div key={grupo} className="overflow-hidden rounded-2xl border border-marca-linha">
            <div className="bg-marca-tinta-900 px-6 py-4">
              <p className="font-display text-lg font-semibold text-white">{rotulosGrupoPreco[grupo]}</p>
            </div>
            <table className="w-full">
              <tbody>
                {precosPorGrupo[grupo].map((linha, indice) => (
                  <tr
                    key={linha.modalidade}
                    className={indice % 2 === 0 ? 'bg-white' : 'bg-marca-fundo'}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-marca-texto">{linha.modalidade}</td>
                    <td className="px-6 py-4 text-right font-mono text-sm font-semibold text-marca-azul-600">
                      {formatarMoeda(linha.valor)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-marca-texto-suave">{config.avisoPrecos}</p>
    </Secao>
  )
}
