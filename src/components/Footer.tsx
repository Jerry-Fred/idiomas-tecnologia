import { Link } from 'react-router-dom'
import logo from '../assets/marca/logo.jpg'
import { config } from '../config/site'
import { redesSociais } from '../data/redesSociais'
import { IconeFacebook, IconeInstagram, IconeTikTok, IconeYouTube } from './icons'

const mapaIconesRedes = {
  facebook: IconeFacebook,
  instagram: IconeInstagram,
  tiktok: IconeTikTok,
  youtube: IconeYouTube,
}

export function Footer() {
  const anoAtual = new Date().getFullYear()
  const anoInicio = config.anoFundacaoOuInicio
  const textoAno = anoInicio === anoAtual ? `${anoAtual}` : `${anoInicio}–${anoAtual}`

  return (
    <footer className="bg-marca-tinta-950 px-6 py-14 text-white/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-3 flex items-center gap-3">
              <img src={logo} alt="Idiomas & Tecnologia" className="h-10 w-10 rounded-full" />
              <span className="font-display text-base font-semibold text-white">{config.marca.nome}</span>
            </div>
            <p className="max-w-sm font-display text-sm text-marca-ciano-400 italic">"{config.marca.lema}"</p>
            <div className="mt-5 flex gap-3">
              {redesSociais.map((rede) => {
                const Icone = mapaIconesRedes[rede.id]
                return (
                  <a
                    key={rede.id}
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rede.nome}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-marca-azul-400 hover:text-marca-azul-400"
                  >
                    <Icone className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-white/40 uppercase">Navegação</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#cursos" className="hover:text-white">Cursos</a></li>
              <li><a href="#precos" className="hover:text-white">Preços</a></li>
              <li><a href="#aplicativo" className="hover:text-white">Aplicativo</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-white/40 uppercase">Contacto</p>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: {config.contactoPrincipal.whatsappExibicao}</li>
              <li><a href="#contactos" className="hover:text-white">Falar Connosco</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {textoAno} {config.marca.nome}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
            <Link to="/termos-de-utilizacao" className="hover:text-white">Termos de Utilização</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
