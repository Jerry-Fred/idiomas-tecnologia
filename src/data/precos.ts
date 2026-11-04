/**
 * =============================================================================
 * DADOS DE PREÇOS
 * =============================================================================
 * ONDE ALTERAR: mude apenas os números abaixo (em Kwanzas, sem formatação);
 * a formatação "15.000 Kz" é feita automaticamente pelo componente que lê
 * estes dados (ver components/TabelaPrecos.tsx e utils/formatarMoeda.ts).
 *
 * "padrao"  -> Inglês, Francês, Espanhol, Português
 * "premium" -> Mandarim e Russo (+15.000 Kz em cada modalidade)
 */

import type { GrupoPreco } from './cursos'

export interface PrecoModalidade {
  modalidade: 'Presencial' | 'Online' | 'Ao Domicílio'
  valor: number
}

export const precosPorGrupo: Record<GrupoPreco, PrecoModalidade[]> = {
  padrao: [
    { modalidade: 'Presencial', valor: 10000 },
    { modalidade: 'Online', valor: 30000 },
    { modalidade: 'Ao Domicílio', valor: 45000 },
  ],
  premium: [
    { modalidade: 'Presencial', valor: 30000 },
    { modalidade: 'Online', valor: 50000 },
    { modalidade: 'Ao Domicílio', valor: 60000 },
  ],
}

export const rotulosGrupoPreco: Record<GrupoPreco, string> = {
  padrao: 'Inglês · Francês · Espanhol · Português',
  premium: 'Mandarim · Russo',
}
