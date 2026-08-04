import type { ReactNode } from 'react'

interface PropsSecao {
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Wrapper de secção reutilizável -- padroniza o espaçamento vertical e a
 * largura máxima de conteúdo em todo o site. ONDE ALTERAR: para mudar o
 * espaçamento/largura de TODAS as secções de uma vez, edite as classes aqui.
 */
export function Secao({ id, className = '', children }: PropsSecao) {
  return (
    <section id={id} className={`px-6 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

interface PropsCabecalhoSecao {
  etiqueta?: string
  titulo: string
  descricao?: string
  claro?: boolean // true quando a secção tem fundo escuro (texto claro)
}

/** Cabeçalho padrão de secção: pequena etiqueta + título de exibição + descrição opcional. */
export function CabecalhoSecao({ etiqueta, titulo, descricao, claro = false }: PropsCabecalhoSecao) {
  return (
    <div className="mb-12 max-w-2xl">
      {etiqueta && (
        <p
          className={`mb-3 font-mono text-xs font-medium tracking-[0.2em] uppercase ${
            claro ? 'text-marca-ciano-400' : 'text-marca-azul-600'
          }`}
        >
          {etiqueta}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold md:text-4xl ${
          claro ? 'text-white' : 'text-marca-texto'
        }`}
      >
        {titulo}
      </h2>
      {descricao && (
        <p className={`mt-4 text-base leading-relaxed ${claro ? 'text-white/75' : 'text-marca-texto-suave'}`}>
          {descricao}
        </p>
      )}
    </div>
  )
}
