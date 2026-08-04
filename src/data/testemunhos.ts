/**
 * =============================================================================
 * TESTEMUNHOS DE ALUNOS
 * =============================================================================
 * Estrutura PREPARADA para depoimentos reais. Enquanto não existirem
 * depoimentos reais, "publicado: false" faz o componente Testemunhos.tsx
 * mostrar um cartão-placeholder em vez do depoimento (ver esse componente).
 *
 * ONDE ALTERAR: quando tiveres um depoimento real, copia um objecto,
 * preenche "nome", "curso", "texto" e muda "publicado" para true.
 */

export interface Testemunho {
  nome: string
  curso: string
  texto: string
  publicado: boolean
}

export const testemunhos: Testemunho[] = [
  { nome: '', curso: '', texto: '', publicado: false },
  { nome: '', curso: '', texto: '', publicado: false },
  { nome: '', curso: '', texto: '', publicado: false },
]
