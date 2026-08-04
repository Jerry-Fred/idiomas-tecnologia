import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade'
import { TermosUtilizacao } from './pages/TermosUtilizacao'

/**
 * Define as rotas do site. ONDE ALTERAR: para adicionar uma nova página no
 * futuro (ex.: um Blog Educativo, ver README.md -> "Escalabilidade
 * Futura"), crie o componente em src/pages/ e adicione uma nova <Route> aqui.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-de-utilizacao" element={<TermosUtilizacao />} />
      </Routes>
    </BrowserRouter>
  )
}
