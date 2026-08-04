import { testemunhos } from '../data/testemunhos'
import { CabecalhoSecao, Secao } from './Secao'

export function Testemunhos() {
  return (
    <Secao>
      <CabecalhoSecao
        etiqueta="Testemunhos"
        titulo="O que dizem os nossos alunos"
        descricao="Em breve, depoimentos reais de quem já estudou connosco."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {testemunhos.map((testemunho, indice) =>
          testemunho.publicado ? (
            <blockquote key={indice} className="rounded-2xl border border-marca-linha bg-white p-6">
              <p className="text-sm leading-relaxed text-marca-texto italic">"{testemunho.texto}"</p>
              <footer className="mt-4 text-sm font-semibold text-marca-texto">
                {testemunho.nome} <span className="font-normal text-marca-texto-suave">· {testemunho.curso}</span>
              </footer>
            </blockquote>
          ) : (
            <div
              key={indice}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-marca-linha p-6 text-center"
            >
              <div className="mb-3 h-10 w-10 rounded-full bg-marca-azul-100" />
              <p className="text-sm text-marca-texto-suave">Depoimento em breve.</p>
            </div>
          ),
        )}
      </div>
    </Secao>
  )
}
