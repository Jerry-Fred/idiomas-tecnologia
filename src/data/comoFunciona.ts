/**
 * Passos do processo, desde o primeiro contacto até à certificação.
 * ONDE ALTERAR: edite o "titulo"/"descricao" de cada etapa, ou adicione uma
 * nova etapa copiando um objecto (o número é calculado automaticamente pela
 * posição no array, não precisa de o escrever).
 */
export interface EtapaProcesso {
  titulo: string
  descricao: string
}

export const etapasProcesso: EtapaProcesso[] = [
  {
    titulo: 'Contacto e inscrição',
    descricao:
      'Fala connosco via WhatsApp ou preenche o formulário de inscrição. Indicamos o curso, modalidade e horário mais adequados ao teu objectivo.',
  },
  {
    titulo: 'Avaliação de nível',
    descricao:
      'Para quem já tem alguma base no idioma, fazemos uma breve avaliação para começares no nível certo, sem repetir o que já sabes.',
  },
  {
    titulo: 'Início das aulas',
    descricao:
      'As aulas arrancam na modalidade escolhida (presencial, online ou ao domicílio), seguindo um plano de estudo estruturado por níveis.',
  },
  {
    titulo: 'Acompanhamento contínuo',
    descricao:
      'Avaliações periódicas, feedback constante dos professores e ajustes ao plano de estudo sempre que necessário.',
  },
  {
    titulo: 'Certificação',
    descricao:
      'Ao concluíres o nível/curso com aproveitamento, recebes um certificado da Idiomas & Tecnologia que comprova a tua competência adquirida.',
  },
]
