import { config } from '../config/site'

/**
 * Gera um link "wa.me" que abre directamente uma conversa de WhatsApp com o
 * número configurado em config/site.ts, com uma mensagem pré-escrita.
 * ONDE ALTERAR: os textos padrão de cada botão estão nos componentes que
 * chamam esta função (ver Hero.tsx, Contactos.tsx) -- esta função só monta o link.
 */
export function criarLinkWhatsApp(mensagem: string = "Olá! Entrei em contacto através do site da Idiomas & Tecnologia e gostaria de obter mais informações sobre os vossos serviços."): string {
  const numero = "244953387201";
  const mensagemCodificada = encodeURIComponent(mensagem)
  return `https://wa.me/${numero}?text=${mensagemCodificada}`
}
