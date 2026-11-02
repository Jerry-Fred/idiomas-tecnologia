/**
 * =============================================================================
 * REDES SOCIAIS
 * =============================================================================
 * ONDE ALTERAR: substitua os URLs "#" pelos links reais de cada rede social
 * assim que existirem. Para REMOVER uma rede social do site, apague o
 * objecto correspondente do array -- o rodapé e a secção de redes sociais
 * actualizam-se automaticamente. Para ADICIONAR uma nova rede social, copie
 * um objecto, mude o "id" e o "icone" (ver components/icons.tsx para os
 * ícones já disponíveis).
 */

export type RedeSocialId = 'facebook' | 'instagram' | 'tiktok' | 'youtube'

export interface RedeSocial {
  id: RedeSocialId
  nome: string
  url: string
}

export const redesSociais: RedeSocial[] = [
  { id: 'facebook', nome: 'Facebook', url: 'https://www.facebook.com/JeremiahTecnology' },
  { id: 'instagram', nome: 'Instagram', url: 'https://www.instagram.com/idiomas.tecnologia?dlrf=ZG9qY3U5NTh2bHpo' },
  { id: 'tiktok', nome: 'TikTok', url: '#' },
  { id: 'youtube', nome: 'YouTube', url: '#' },
]
