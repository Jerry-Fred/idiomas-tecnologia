/**
 * =============================================================================
 * REGULAMENTO INTERNO (resumo público)
 * =============================================================================
 * ATENÇÃO: este é um resumo GENÉRICO de boas práticas comuns em escolas de
 * idiomas, preparado para seres tu (ou o teu jurídico) a rever, ajustar e
 * validar antes de publicar como regulamento oficial e vinculativo.
 * ONDE ALTERAR: edita o "titulo" e "regras" de cada secção.
 */
export interface SeccaoRegulamento {
  titulo: string
  regras: string[]
}

export const seccoesRegulamento: SeccaoRegulamento[] = [
  {
    titulo: 'Frequência e assiduidade',
    regras: [
      'É esperada uma assiduidade mínima de 75% das aulas para efeitos de certificação.',
      'Faltas devem ser comunicadas com pelo menos 12 horas de antecedência, sempre que possível.',
      'Aulas em atraso superior a 15 minutos sem aviso prévio podem ser consideradas falta.',
    ],
  },
  {
    titulo: 'Pagamentos',
    regras: [
      'As mensalidades são devidas até ao 5.º dia útil de cada mês.',
      'Pagamentos em atraso podem implicar a suspensão temporária do acesso às aulas.',
      'Não há reembolso de aulas não frequentadas por ausência do aluno, salvo casos devidamente justificados.',
    ],
  },
  {
    titulo: 'Cancelamentos e adiamentos',
    regras: [
      'O cancelamento da inscrição deve ser comunicado com, no mínimo, 7 dias de antecedência.',
      'Aulas podem ser reagendadas com aviso prévio de 24 horas, sujeitas à disponibilidade do professor.',
    ],
  },
  {
    titulo: 'Código de conduta',
    regras: [
      'Espera-se respeito mútuo entre alunos, professores e colaboradores em qualquer modalidade de ensino.',
      'Materiais didácticos fornecidos pela organização são de uso exclusivo do aluno inscrito.',
      'Comportamentos que perturbem o ambiente de aprendizagem podem resultar em advertência ou suspensão.',
    ],
  },
  {
    titulo: 'Protecção de dados',
    regras: [
      'Os dados pessoais fornecidos são usados exclusivamente para fins administrativos e pedagógicos.',
      'Nenhum dado é partilhado com terceiros sem consentimento explícito, salvo obrigação legal.',
      'Ver a Política de Privacidade completa para mais detalhes sobre tratamento de dados.',
    ],
  },
]
