/**
 * =============================================================================
 * CONFIGURAÇÃO GERAL DO SITE
 * =============================================================================
 * Este é o ficheiro mais importante para manutenção rápida. Praticamente
 * todo o texto institucional "fixo" do site (nome, lema, contacto principal,
 * ano de direitos reservados) vem daqui, para que uma alteração simples
 * (ex.: trocar o número de WhatsApp) só precise de ser feita NUM lugar.
 *
 * ONDE ALTERAR:
 *  - Nome/lema da marca -> "marca"
 *  - Número de WhatsApp principal -> "contactoPrincipal.whatsapp"
 *    (formato: código do país + número, SEM "+", sem espaços, ex.: "244926186104")
 *  - Textos da Hero Section -> "hero"
 */

export const config = {
  marca: {
    nome: 'Idiomas & Tecnologia',
    nomeCurto: 'I&T',
    lema: 'Get Knowledge and Be Part Of Something Big!',
  },

  contactoPrincipal: {
    // IMPORTANTE: sem "+", sem espaços -- é o formato exigido pelo link wa.me
    whatsapp: '244926186104',
    whatsappExibicao: '+244 926 186 104',
  },

  hero: {
    titulo: 'Aprenda Idiomas e Desenvolva Competências para o Futuro',
    subtitulo: 'Get Knowledge and Be Part Of Something Big!',
    texto:
      'Formação de qualidade em idiomas e tecnologia, com professores especializados e foco em resultados reais.',
  },

  missaoVisaoValores: {
    missao: 'Promover conhecimento linguístico e tecnológico acessível e de qualidade.',
    visao: 'Ser uma referência nacional na formação de idiomas e tecnologia.',
    valores: ['Qualidade', 'Excelência', 'Compromisso', 'Inovação', 'Desenvolvimento contínuo'],
  },

  avisoPrecos:
    'Os valores apresentados poderão sofrer alterações de acordo com factores como condições do mercado, custos operacionais, campanhas promocionais ou políticas comerciais da organização.',

  anoFundacaoOuInicio: 2026, // usado para calcular "Direitos reservados © {ano}-{anoAtual}" no rodapé
} as const
