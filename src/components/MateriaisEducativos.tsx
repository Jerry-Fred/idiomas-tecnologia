import { categoriasMateriais } from '../data/materiaisEducativos'
import { CabecalhoSecao, Secao } from './Secao'

export function MateriaisEducativos() {
  return (
    <Secao className="bg-white">
      <CabecalhoSecao
        etiqueta="Em Breve"
        titulo="Materiais Educativos"
        descricao="Estamos a preparar uma loja de materiais próprios para apoiar a tua aprendizagem, dentro e fora da sala de aula."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categoriasMateriais.map((categoria) => (
          <div
            key={categoria.nome}
            className="rounded-xl border border-dashed border-marca-linha p-5 text-center"
          >
            <p className="font-display text-base font-semibold text-marca-texto">{categoria.nome}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-marca-texto-suave">{categoria.descricao}</p>
          </div>
        ))}
      </div>
    </Secao>
  )
}
