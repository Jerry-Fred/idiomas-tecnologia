import { Aplicativo } from '../components/Aplicativo'
import { ComoFunciona } from '../components/ComoFunciona'
import { Contactos, RedesSociais } from '../components/RedesEContactos'
import { Cursos } from '../components/Cursos'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MateriaisEducativos } from '../components/MateriaisEducativos'
import { PorqueEscolher } from '../components/PorqueEscolher'
import { Regulamento } from '../components/Regulamento'
import { Requisitos } from '../components/Requisitos'
import { Sobre } from '../components/Sobre'
import { TabelaPrecos } from '../components/TabelaPrecos'
import { Testemunhos } from '../components/Testemunhos'
import { WhatsAppFlutuante } from '../components/WhatsAppFlutuante'
import { useSeo } from '../hooks/useSeo'

/**
 * Página inicial: reúne todas as secções institucionais numa única página
 * de "scroll" com âncoras (#sobre, #cursos, #precos, ...), tal como pedido
 * no briefing. ONDE ALTERAR A ORDEM das secções: reordene os componentes
 * abaixo -- cada secção é independente e não depende da ordem das outras.
 */
export function Home() {
  useSeo({
    titulo: 'Idiomas & Tecnologia — Get Knowledge and Be Part Of Something Big!',
    descricao:
      'Formação de qualidade em Inglês, Francês, Mandarim, Espanhol, Russo e Português, presencial, online ou ao domicílio.',
  })

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <ComoFunciona />
        <Cursos />
        <TabelaPrecos />
        <Requisitos />
        <PorqueEscolher />
        <Testemunhos />
        <MateriaisEducativos />
        <Aplicativo />
        <Regulamento />
        <RedesSociais />
        <Contactos />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  )
}
