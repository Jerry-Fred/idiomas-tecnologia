/**
 * Categorias de materiais educativos em preparação (loja futura).
 * ONDE ALTERAR: quando os materiais estiverem disponíveis para venda,
 * ligue esta secção a uma futura página de loja (ver README.md, secção
 * "Escalabilidade Futura" -> Loja virtual de livros e materiais).
 */

export interface CategoriaMaterial {
  nome: string
  descricao: string
}

export const categoriasMateriais: CategoriaMaterial[] = [
  { nome: 'Livros', descricao: 'Manuais de apoio para cada nível e idioma.' },
  { nome: 'Fascículos', descricao: 'Cadernos de exercícios temáticos para prática dirigida.' },
  { nome: 'Materiais digitais', descricao: 'Recursos em PDF e áudio para estudo autónomo.' },
  { nome: 'Cursos online', descricao: 'Formação assíncrona, ao seu próprio ritmo.' },
  { nome: 'Produtos educativos', descricao: 'Outros recursos de apoio à aprendizagem, em preparação.' },
]
