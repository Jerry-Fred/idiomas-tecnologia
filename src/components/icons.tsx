/**
 * =============================================================================
 * ÍCONES
 * =============================================================================
 * Todos os ícones do site vivem aqui como componentes React simples (SVG
 * inline), evitando uma dependência externa só para um punhado de ícones.
 * ONDE ALTERAR: para trocar o desenho de um ícone, edite o "path" do SVG
 * correspondente. Para adicionar um novo ícone, copie a estrutura de um
 * já existente.
 */

type PropsIcone = { className?: string }

export function IconeWhatsApp({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.6 1.382 5.093L2 22l5.05-1.362A9.945 9.945 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.06a8.03 8.03 0 01-4.417-1.312l-.317-.19-3.164.853.845-3.083-.207-.317A8.02 8.02 0 013.94 12c0-4.444 3.616-8.06 8.06-8.06 4.443 0 8.06 3.616 8.06 8.06 0 4.444-3.617 8.06-8.06 8.06z" />
    </svg>
  )
}

export function IconeFacebook({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
    </svg>
  )
}

export function IconeInstagram({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.56.217.96.477 1.38.896.42.42.68.82.896 1.38.166.422.361 1.057.415 2.227.058 1.266.07 1.646.07 4.849 0 3.204-.012 3.584-.07 4.85-.054 1.17-.249 1.805-.415 2.227a3.71 3.71 0 01-.896 1.38 3.71 3.71 0 01-1.38.896c-.422.166-1.057.361-2.227.415-1.266.058-1.646.07-4.85.07-3.203 0-3.584-.012-4.849-.07-1.17-.054-1.805-.249-2.227-.415a3.71 3.71 0 01-1.38-.896 3.71 3.71 0 01-.896-1.38c-.166-.422-.36-1.057-.415-2.227-.058-1.266-.07-1.646-.07-4.85 0-3.203.012-3.583.07-4.849.055-1.17.249-1.805.415-2.227.217-.56.477-.96.896-1.38.42-.419.82-.679 1.38-.896.422-.166 1.058-.361 2.227-.415 1.265-.058 1.646-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.905.333 4.14.63a5.87 5.87 0 00-2.126 1.384A5.868 5.868 0 00.63 4.14C.333 4.905.131 5.775.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.148.558 2.913.306.788.717 1.457 1.384 2.126a5.878 5.878 0 002.126 1.384c.765.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.148-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.868 5.868 0 001.384-2.126c.297-.765.5-1.636.558-2.913.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.948c-.058-1.277-.261-2.147-.558-2.912a5.878 5.878 0 00-1.384-2.126A5.868 5.868 0 0019.86.63c-.765-.297-1.636-.5-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function IconeTikTok({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-1.006-.984-1.559-2.313-1.559-3.727h-3.442v14.4c0 1.62-1.32 2.94-2.94 2.94a2.94 2.94 0 01-2.939-2.94 2.94 2.94 0 012.94-2.939c.244 0 .48.033.703.093V9.83a6.494 6.494 0 00-.703-.038c-3.586 0-6.494 2.909-6.494 6.494 0 3.586 2.908 6.495 6.494 6.495 3.585 0 6.494-2.909 6.494-6.495V9.106a8.437 8.437 0 004.94 1.58V7.244c0-.004-2.31.075-3.494-1.424z" />
    </svg>
  )
}

export function IconeYouTube({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function IconeProfessor({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.42A9 9 0 0121 12v4M5 10.9V17c0 1 3 3 7 3s7-2 7-3v-6" />
    </svg>
  )
}

export function IconeEnsino({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0116 0v1" />
    </svg>
  )
}

export function IconeModalidade({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  )
}

export function IconeHorario({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

export function IconeResultado({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8M21 7v6M15 13h6" />
    </svg>
  )
}

export function IconeAtendimento({ className }: PropsIcone) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}
