import { useEffect } from 'react'

interface OpcoesSeo {
  titulo: string
  descricao: string
}

/**
 * =============================================================================
 * HOOK DE SEO -- título e descrição por página
 * =============================================================================
 * Este projecto é uma SPA (Single Page Application) construída com Vite,
 * portanto não existe um servidor a gerar HTML diferente por página. Este
 * hook actualiza o <title> e a meta "description" no lado do browser assim
 * que cada página carrega -- suficiente para a maioria dos motores de busca
 * modernos e para a aba do browser, mas as pré-visualizações de partilha
 * (Open Graph) usadas por apps como o WhatsApp continuam a usar os valores
 * ESTÁTICOS definidos em index.html, porque essas ferramentas normalmente
 * não executam JavaScript.
 *
 * EVOLUÇÃO FUTURA: se o SEO por página se tornar crítico (ex.: um blog
 * educativo com muitos artigos partilhados individualmente), a solução
 * recomendada é migrar para um framework com pré-renderização/SSR, como
 * Next.js ou Astro -- ver README.md, secção "Evoluções recomendadas".
 */
export function useSeo({ titulo, descricao }: OpcoesSeo) {
  useEffect(() => {
    document.title = titulo

    let metaDescricao = document.querySelector('meta[name="description"]')
    if (!metaDescricao) {
      metaDescricao = document.createElement('meta')
      metaDescricao.setAttribute('name', 'description')
      document.head.appendChild(metaDescricao)
    }
    metaDescricao.setAttribute('content', descricao)
  }, [titulo, descricao])
}
