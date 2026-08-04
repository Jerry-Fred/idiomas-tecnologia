import { config } from '../config/site'

/**
 * Gera um link "wa.me" que abre directamente uma conversa de WhatsApp com o
 * número configurado em config/site.ts, com uma mensagem pré-escrita.
 * ONDE ALTERAR: os textos padrão de cada botão estão nos componentes que
 * chamam esta função (ver Hero.tsx, Contactos.tsx) -- esta função só monta o link.
 */
export function criarLinkWhatsApp(mensagem: string): string {
  const numero = config.contactoPrincipal.whatsapp
  const mensagemCodificada = encodeURIComponent(mensagem)
  return `https://wa.me/${numero}?text=${mensagemCodificada}`
}
