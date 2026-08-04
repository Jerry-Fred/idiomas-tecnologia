import { config } from '../config/site'
import { criarLinkWhatsApp } from '../utils/whatsapp'
import { LanguageTicker } from './LanguageTicker'
import { IconeWhatsApp } from './icons'

export function Hero() {
  return (
    <section className="fundo-rede relative overflow-hidden bg-marca-tinta-900 px-6 pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-7 flex justify-center">
          <LanguageTicker />
        </div>

        {/* ONDE ALTERAR o texto principal da Hero: config/site.ts -> "hero" */}
        <h1 className="font-display text-4xl leading-[1.1] font-semibold text-white md:text-6xl">
          {config.hero.titulo}
        </h1>

        <p className="mt-6 font-display text-xl text-marca-ciano-400 italic md:text-2xl">
          "{config.hero.subtitulo}"
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          {config.hero.texto}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={criarLinkWhatsApp('Olá! Gostaria de me inscrever num curso da Idiomas & Tecnologia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-marca-azul-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-marca-azul-500/25 transition-transform hover:scale-[1.03] hover:bg-marca-azul-600 sm:w-auto"
          >
            <IconeWhatsApp className="h-4 w-4" />
            Inscrever-me Agora
          </a>
          <a
            href={criarLinkWhatsApp('Olá! Gostaria de falar com o atendimento da Idiomas & Tecnologia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#cursos"
            className="w-full rounded-full px-7 py-3.5 text-center text-sm font-semibold text-white/70 transition-colors hover:text-white sm:w-auto"
          >
            Conhecer os Cursos →
          </a>
        </div>
      </div>
    </section>
  )
}
