import { redesSociais } from '../data/redesSociais'
import { config } from '../config/site'
import { criarLinkWhatsApp } from '../utils/whatsapp'
import { CabecalhoSecao, Secao } from './Secao'
import { IconeFacebook, IconeInstagram, IconeTikTok, IconeWhatsApp, IconeYouTube } from './icons'

const mapaIconesRedes = {
  facebook: IconeFacebook,
  instagram: IconeInstagram,
  tiktok: IconeTikTok,
  youtube: IconeYouTube,
}

export function RedesSociais() {
  return (
    <Secao className="bg-white">
      <CabecalhoSecao etiqueta="Redes Sociais" titulo="Segue-nos e acompanha as novidades" />
      <div className="flex flex-wrap gap-4">
        {redesSociais.map((rede) => {
          const Icone = mapaIconesRedes[rede.id]
          return (
            <a
              key={rede.id}
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-marca-linha px-5 py-2.5 text-sm font-medium text-marca-texto transition-colors hover:border-marca-azul-500 hover:text-marca-azul-600"
            >
              <Icone className="h-4 w-4" />
              {rede.nome}
            </a>
          )
        })}
      </div>
    </Secao>
  )
}

export function Contactos() {
  return (
    <Secao id="contactos" className="bg-marca-tinta-900">
      <CabecalhoSecao
        etiqueta="Contactos"
        titulo="Fala connosco agora mesmo"
        descricao="A forma mais rápida de tirar dúvidas, inscrever-te ou pedir mais informações é pelo WhatsApp."
        claro
      />

      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-marca-azul-500">
            <IconeWhatsApp className="h-5 w-5 text-white" />
          </span>
          <div>
            <p className="text-xs text-white/60">WhatsApp</p>
            <p className="font-mono text-lg font-medium text-white">{config.contactoPrincipal.whatsappExibicao}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={criarLinkWhatsApp('Olá! Gostaria de me inscrever num curso da Idiomas & Tecnologia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-marca-azul-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-marca-azul-600"
          >
            Inscrever-me Agora
          </a>
          <a
            href={criarLinkWhatsApp('Olá! Gostaria de solicitar informações sobre os cursos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Solicitar Informações
          </a>
          <a
            href={criarLinkWhatsApp('Olá! Gostaria de falar com o atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Falar com Atendimento
          </a>
        </div>
      </div>
    </Secao>
  )
}
