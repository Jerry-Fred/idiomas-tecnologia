import { useEffect, useState } from 'react'
import { palavrasDeAberturaPorIdioma } from '../data/cursos'

/**
 * =============================================================================
 * TICKER DE IDIOMAS -- elemento de assinatura da Hero Section
 * =============================================================================
 * Mostra, em rotação automática, a mesma ideia ("Aprende. Cresce. Conquista.")
 * traduzida para cada um dos seis idiomas ensinados -- uma forma visual e
 * literal de comunicar "Idiomas" antes mesmo de o visitante ler o resto do
 * texto. Os dados vêm de data/cursos.ts (palavrasDeAberturaPorIdioma).
 */
export function LanguageTicker() {
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((atual) => (atual + 1) % palavrasDeAberturaPorIdioma.length)
    }, 2600)
    return () => clearInterval(intervalo)
  }, [])

  const item = palavrasDeAberturaPorIdioma[indice]

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pl-2 pr-5 backdrop-blur">
      <span className="rounded-full bg-marca-ciano-400/15 px-3 py-1 font-mono text-xs font-medium text-marca-ciano-400">
        {item.idioma}
      </span>
      <span key={indice} className="text-sm text-white/90 motion-safe:animate-[fadeIn_0.5s_ease]">
        {item.frase}
      </span>
    </div>
  )
}
