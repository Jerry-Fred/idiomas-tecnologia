import { cursos } from '../data/cursos'
import { precosPorGrupo } from '../data/precos'
import { criarLinkWhatsApp } from '../utils/whatsapp'
import { CabecalhoSecao, Secao } from './Secao'

export function Cursos() {
  return (
    <Secao id="cursos">
      <CabecalhoSecao
        etiqueta="Cursos"
        titulo="Seis idiomas, um único padrão de qualidade"
        descricao="Cada curso é ministrado por professores especializados, com metodologia orientada para resultados reais."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso) => {
          const precoMaisBaixo = precosPorGrupo[curso.grupoPreco][0].valor
          return (
            <article
              key={curso.id}
              className="group flex flex-col rounded-2xl border border-marca-linha bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-marca-tinta-900/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-marca-tinta-900 font-mono text-sm font-semibold text-marca-ciano-400">
                  {curso.codigo}
                </span>
                <span className="font-mono text-xs text-marca-texto-suave">desde {precoMaisBaixo.toLocaleString('pt-PT')} Kz</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-marca-texto">{curso.nome}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-marca-texto-suave">{curso.descricao}</p>

              <p className="mt-4 text-xs font-medium text-marca-azul-600">Presencial · Online · Ao Domicílio</p>

              <a
                href={criarLinkWhatsApp(`Olá! Gostaria de saber mais sobre o curso de ${curso.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-marca-azul-600 transition-colors group-hover:text-marca-azul-500"
              >
                Saber Mais <span aria-hidden="true">→</span>
              </a>
            </article>
          )
        })}
      </div>
    </Secao>
  )
}
