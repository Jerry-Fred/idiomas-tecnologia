/**
 * Formata um número em Kwanzas com separador de milhares português: 15000 -> "15.000 Kz".
 * ONDE ALTERAR: se a organização mudar de moeda no futuro, troque o sufixo "Kz" aqui.
 */
export function formatarMoeda(valor: number): string {
  const comSeparador = valor.toLocaleString('pt-PT')
  return `${comSeparador} Kz`
}
