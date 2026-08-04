/**
 * =============================================================================
 * REQUISITOS DE INSCRIÇÃO
 * =============================================================================
 * ATENÇÃO: estes são requisitos GENÉRICOS e razoáveis para uma escola de
 * idiomas, preparados para seres tu a validar/ajustar com a realidade da
 * organização (idade mínima real, documentos exigidos, política de
 * pagamento). Revê e ajusta antes de publicar oficialmente.
 * ONDE ALTERAR: edita o texto de cada requisito abaixo.
 */
export const requisitosGerais: string[] = [
  'Idade mínima de 12 anos (menores de idade devem inscrever-se com autorização de um encarregado de educação).',
  'Documento de identificação válido (Bilhete de Identidade, Passaporte ou Cartão de Residente).',
  'Preenchimento da ficha de inscrição com os dados pessoais e de contacto.',
  'Pagamento da primeira mensalidade (ou do valor da modalidade escolhida) antes do início das aulas.',
  'Disponibilidade mínima semanal compatível com a modalidade e o horário escolhidos.',
  'Para a modalidade "Ao Domicílio": espaço adequado ao estudo e acesso a energia eléctrica estável no local.',
  'Para a modalidade "Online": acesso a internet estável e a um dispositivo (computador, tablet ou smartphone) com câmara e microfone.',
]

export const requisitosPorNivel: { nivel: string; descricao: string }[] = [
  { nivel: 'Iniciante (A1-A2)', descricao: 'Não é exigido conhecimento prévio do idioma.' },
  { nivel: 'Intermédio (B1-B2)', descricao: 'Recomendada avaliação de nível prévia, disponível gratuitamente.' },
  { nivel: 'Avançado (C1-C2)', descricao: 'Avaliação de nível obrigatória antes da inscrição.' },
]
