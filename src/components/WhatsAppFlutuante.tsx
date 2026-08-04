import { criarLinkWhatsApp } from '../utils/whatsapp'
import { IconeWhatsApp } from './icons'

/**
 * Botão flutuante de WhatsApp, sempre visível durante a navegação.
 * ONDE ALTERAR: o texto da mensagem pré-escrita está no "criarLinkWhatsApp(...)" abaixo.
 */
export function WhatsAppFlutuante() {
  return (
    <a
      href={criarLinkWhatsApp('Olá! Vim através do site e gostaria de saber mais.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <IconeWhatsApp className="h-7 w-7" />
    </a>
  )
}
