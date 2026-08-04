/**
 * =============================================================================
 * DADOS DOS CURSOS
 * =============================================================================
 * ONDE ALTERAR:
 *  - Adicionar um novo idioma: copie um objecto inteiro dentro do array
 *    "cursos" abaixo, mude o "id" (sem espaços/acentos), o "nome" e a
 *    "descricao", e escolha o grupo de preço correcto em "precos.ts".
 *  - Alterar a descrição breve de um curso: edite o campo "descricao".
 *  - Alterar o código do idioma mostrado nos cartões (ex. "EN", "FR"):
 *    edite o campo "codigo".
 *
 * O campo "grupoPreco" liga cada curso a um dos dois grupos de preços
 * definidos em "precos.ts" ("padrao" ou "premium" -- Mandarim e Russo).
 */

export type GrupoPreco = 'padrao' | 'premium'

export interface Curso {
  id: string
  nome: string
  codigo: string // sigla curta mostrada no cartão, estilo "código de idioma"
  descricao: string
  grupoPreco: GrupoPreco
}

export const cursos: Curso[] = [
  {
    id: 'ingles',
    nome: 'Inglês',
    codigo: 'EN',
    descricao:
      'A língua global dos negócios, da tecnologia e das oportunidades internacionais. Do nível iniciante à fluência profissional.',
    grupoPreco: 'padrao',
  },
  {
    id: 'frances',
    nome: 'Francês',
    codigo: 'FR',
    descricao:
      'Uma língua de prestígio académico e diplomático, essencial para estudos superiores e mobilidade internacional.',
    grupoPreco: 'padrao',
  },
  {
    id: 'mandarim',
    nome: 'Mandarim',
    codigo: 'ZH',
    descricao:
      'A língua com mais falantes nativos no mundo, cada vez mais estratégica para negócios e comércio internacional.',
    grupoPreco: 'premium',
  },
  {
    id: 'espanhol',
    nome: 'Espanhol',
    codigo: 'ES',
    descricao:
      'Falada em mais de 20 países, abre portas culturais, académicas e profissionais em todo o mundo.',
    grupoPreco: 'padrao',
  },
  {
    id: 'russo',
    nome: 'Russo',
    codigo: 'RU',
    descricao:
      'Uma língua estratégica para relações internacionais, ciência e comércio com a Europa de Leste e a Ásia Central.',
    grupoPreco: 'premium',
  },
  {
    id: 'portugues',
    nome: 'Português',
    codigo: 'PT',
    descricao:
      'Aperfeiçoamento da língua portuguesa para fins académicos, profissionais e de comunicação escrita e oral.',
    grupoPreco: 'padrao',
  },
]

/** Usado no componente "LanguageTicker" da Hero Section (rotação de idiomas). */
export const palavrasDeAberturaPorIdioma: { idioma: string; frase: string }[] = [
  { idioma: 'Português', frase: 'Aprenda. Cresça. Conquiste.' },
  { idioma: 'English', frase: 'Learn. Grow. Achieve.' },
  { idioma: 'Français', frase: 'Apprenez. Grandissez. Réussissez.' },
  { idioma: '中文 (Mandarim)', frase: '学习。成长。成就。' },
  { idioma: 'Español', frase: 'Aprende. Crece. Logra.' },
  { idioma: 'Русский', frase: 'Учись. Расти. Достигай.' },
]
