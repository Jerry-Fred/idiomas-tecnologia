import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/marca/logo.jpg'
import { config } from '../config/site'
import { criarLinkWhatsApp } from '../utils/whatsapp'
import { IconeWhatsApp } from './icons'

/**
 * Links de navegação da página inicial. ONDE ALTERAR: para adicionar/remover
 * um item do menu, edite este array -- o menu desktop e o menu mobile usam
 * ambos a mesma lista, por isso só precisa de alterar aqui.
 */
const linksNavegacao = [
  { rotulo: 'Sobre', href: '#sobre' },
  { rotulo: 'Cursos', href: '#cursos' },
  { rotulo: 'Preços', href: '#precos' },
  { rotulo: 'Como Funciona', href: '#como-funciona' },
  { rotulo: 'Aplicativo', href: '#aplicativo' },
  { rotulo: 'Contactos', href: '#contactos' },
]

export function Header() {
  const [comFundo, setComFundo] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  // Adiciona um fundo sólido ao cabeçalho depois de rolar a página, para
  // manter a legibilidade do logótipo sobre conteúdo variado.
  useEffect(() => {
    const aoRolar = () => setComFundo(window.scrollY > 12)
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        comFundo ? 'bg-marca-tinta-900/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Idiomas & Tecnologia" className="h-11 w-11 rounded-full" />
          <span className="font-display text-lg font-semibold text-white">{config.marca.nome}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {linksNavegacao.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-marca-ciano-400"
            >
              {link.rotulo}
            </a>
          ))}
        </nav>

        <a
          href={criarLinkWhatsApp('Olá! Gostaria de me inscrever num curso da Idiomas & Tecnologia.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-marca-azul-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-marca-azul-600 lg:flex"
        >
          <IconeWhatsApp className="h-4 w-4" />
          Inscrever-me Agora
        </a>

        {/* Botão do menu mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setMenuAberto((valor) => !valor)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {menuAberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Menu mobile (dropdown) */}
      {menuAberto && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-marca-tinta-900 px-6 py-4 lg:hidden">
          {linksNavegacao.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5"
            >
              {link.rotulo}
            </a>
          ))}
          <a
            href={criarLinkWhatsApp('Olá! Gostaria de me inscrever num curso da Idiomas & Tecnologia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-marca-azul-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <IconeWhatsApp className="h-4 w-4" />
            Inscrever-me Agora
          </a>
        </nav>
      )}
    </header>
  )
}
