import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { config } from '../config/site'

interface PropsPaginaLegal {
  titulo: string
  actualizadoEm: string
  children: ReactNode
}

/**
 * Layout partilhado pelas páginas legais (Política de Privacidade, Termos de
 * Utilização). ONDE ALTERAR: o conteúdo específico de cada página vive no
 * respectivo ficheiro (PoliticaPrivacidade.tsx / TermosUtilizacao.tsx);
 * este wrapper só trata do cabeçalho/rodapé comuns.
 */
export function PaginaLegal({ titulo, actualizadoEm, children }: PropsPaginaLegal) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link to="/" className="text-sm font-medium text-marca-azul-600 hover:underline">
          ← Voltar ao site
        </Link>
        <h1 className="mt-4 font-display text-3xl font-semibold text-marca-texto md:text-4xl">{titulo}</h1>
        <p className="mt-2 text-sm text-marca-texto-suave">Última actualização: {actualizadoEm}</p>
        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-sm leading-relaxed text-marca-texto">
          {children}
        </div>
        <p className="mt-12 text-xs text-marca-texto-suave">
          Dúvidas sobre este documento? Contacta-nos pelo WhatsApp {config.contactoPrincipal.whatsappExibicao}.
        </p>
      </main>
      <Footer />
    </>
  )
}
