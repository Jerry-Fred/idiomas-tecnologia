import { razoesParaEscolher } from '../data/porqueEscolher'
import { config } from '../config/site'
import { CabecalhoSecao, Secao } from './Secao'
import {
  IconeAtendimento,
  IconeEnsino,
  IconeHorario,
  IconeModalidade,
  IconeProfessor,
  IconeResultado,
} from './icons'

const mapaIcones = {
  professor: IconeProfessor,
  ensino: IconeEnsino,
  modalidade: IconeModalidade,
  horario: IconeHorario,
  resultado: IconeResultado,
  atendimento: IconeAtendimento,
}

export function PorqueEscolher() {
  return (
    <Secao className="bg-white">
      <CabecalhoSecao etiqueta="Diferenciais" titulo={`Porque escolher a ${config.marca.nome}?`} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {razoesParaEscolher.map((razao) => {
          const Icone = mapaIcones[razao.icone]
          return (
            <div key={razao.titulo} className="rounded-2xl border border-marca-linha p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-marca-azul-100">
                <Icone className="h-5 w-5 text-marca-azul-600" />
              </div>
              <h3 className="font-display text-lg font-semibold text-marca-texto">{razao.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-marca-texto-suave">{razao.descricao}</p>
            </div>
          )
        })}
      </div>
    </Secao>
  )
}
