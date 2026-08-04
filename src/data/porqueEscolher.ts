/**
 * Razões de destaque mostradas na secção "Porque Escolher a Idiomas & Tecnologia?"
 * ONDE ALTERAR: edite o "titulo" e "descricao" de cada razão, ou adicione uma
 * nova copiando um objecto. O campo "icone" refere-se aos ícones definidos em
 * components/icons.tsx (ver esse ficheiro para a lista de nomes disponíveis).
 */

export interface Razao {
  icone: 'professor' | 'ensino' | 'modalidade' | 'horario' | 'resultado' | 'atendimento'
  titulo: string
  descricao: string
}

export const razoesParaEscolher: Razao[] = [
  {
    icone: 'professor',
    titulo: 'Professores especializados',
    descricao: 'Equipa docente qualificada e experiente, dedicada ao progresso real de cada aluno.',
  },
  {
    icone: 'ensino',
    titulo: 'Ensino personalizado',
    descricao: 'Metodologia adaptada ao ritmo, objectivos e nível de cada estudante.',
  },
  {
    icone: 'modalidade',
    titulo: 'Presencial, online ou ao domicílio',
    descricao: 'Escolha a modalidade que melhor se encaixa na sua rotina, sem abdicar da qualidade.',
  },
  {
    icone: 'horario',
    titulo: 'Flexibilidade de horários',
    descricao: 'Organizamos as aulas em torno da sua disponibilidade, não o contrário.',
  },
  {
    icone: 'resultado',
    titulo: 'Formação orientada para resultados',
    descricao: 'Cada curso é desenhado para gerar competências aplicáveis, não apenas teoria.',
  },
  {
    icone: 'atendimento',
    titulo: 'Atendimento personalizado',
    descricao: 'Acompanhamento próximo, do primeiro contacto à conclusão do curso.',
  },
]
