/**
 * =============================================================================
 * APLICATIVO DA MARCA (em preparação) + ÁREA DO ALUNO
 * =============================================================================
 * Esta secção é DELIBERADAMENTE preparada para o futuro: o aplicativo e a
 * área do aluno ainda não existem, mas o site já comunica a visão, para que
 * o lançamento futuro seja apenas activar uma ligação, sem redesenhar nada.
 *
 * ONDE ALTERAR:
 *  - Quando o app estiver publicado, troca "disponivel: false" para true e
 *    preenche "linkAppStore"/"linkGooglePlay" em cada objecto abaixo.
 *  - As funcionalidades futuras da Área do Aluno estão em "funcionalidadesAreaAluno".
 */

export const statusApp = {
  disponivel: false,
  linkAppStore: '#',
  linkGooglePlay: '#',
  mensagemEmPreparacao: 'Em preparação — disponível brevemente para iOS e Android.',
}

export interface FuncionalidadeApp {
  titulo: string
  descricao: string
}

export const funcionalidadesAreaAluno: FuncionalidadeApp[] = [
  {
    titulo: 'Conta pessoal e segura',
    descricao:
      'Cada aluno terá a sua própria conta protegida por autenticação forte, com dados encriptados e acesso exclusivo às suas informações.',
  },
  {
    titulo: 'Notas e progresso académico',
    descricao:
      'Consulta as tuas notas, resultados de avaliações e evolução por nível, tudo num único painel pessoal.',
  },
  {
    titulo: 'Calendário de aulas',
    descricao:
      'Vê os horários das próximas aulas, recebe lembretes e solicita reagendamentos directamente pela app.',
  },
  {
    titulo: 'Materiais e recursos',
    descricao:
      'Acesso a materiais de apoio, exercícios e gravações de aulas (quando aplicável), organizados por curso e nível.',
  },
  {
    titulo: 'Pagamentos e histórico financeiro',
    descricao:
      'Consulta mensalidades, efectua pagamentos online e acompanha o histórico de forma transparente.',
  },
  {
    titulo: 'Comunicação directa',
    descricao:
      'Canal directo com professores e com a equipa administrativa, sem depender apenas do WhatsApp.',
  },
]

/** Compromissos de segurança comunicados publicamente (sem detalhar implementação técnica). */
export const compromissosSeguranca: string[] = [
  'Autenticação segura da conta, com protecção contra acessos não autorizados.',
  'Dados pessoais e académicos encriptados e armazenados de forma protegida.',
  'Acesso a informações restrito exclusivamente ao respectivo titular da conta.',
  'Comunicação entre a aplicação e os nossos servidores sempre cifrada (HTTPS/TLS).',
  'Conformidade com boas práticas de protecção de dados pessoais.',
]
