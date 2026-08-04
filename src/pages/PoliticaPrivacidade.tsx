import { PaginaLegal } from './PaginaLegal'
import { useSeo } from '../hooks/useSeo'
import { config } from '../config/site'

/**
 * ATENÇÃO: este é um documento GENÉRICO, preparado como ponto de partida
 * razoável para um site institucional angolano. Antes de publicar
 * oficialmente, deve ser revisto (idealmente por um jurista) para garantir
 * conformidade com a legislação de protecção de dados aplicável em Angola.
 * ONDE ALTERAR: edite directamente os parágrafos abaixo.
 */
export function PoliticaPrivacidade() {
  useSeo({
    titulo: `Política de Privacidade — ${config.marca.nome}`,
    descricao: 'Como a Idiomas & Tecnologia recolhe, usa e protege os teus dados pessoais.',
  })

  return (
    <PaginaLegal titulo="Política de Privacidade" actualizadoEm="2026">
      <p>
        A {config.marca.nome} respeita a privacidade de todos os visitantes do site e alunos inscritos. Esta
        política explica que dados recolhemos, para que fins, e como os protegemos.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">1. Dados que recolhemos</h2>
      <p>
        Ao preencheres um formulário de inscrição ou contactares-nos por WhatsApp, podemos recolher: nome, número
        de contacto, email, e informações relativas ao curso pretendido. Actualmente, o site em si não recolhe
        dados automaticamente através de formulários (todo o contacto inicial é feito directamente por WhatsApp).
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">2. Como usamos os teus dados</h2>
      <p>
        Os dados fornecidos são usados exclusivamente para fins administrativos e pedagógicos: processar
        inscrições, comunicar informações sobre cursos e horários, e prestar apoio ao aluno.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">3. Partilha de dados</h2>
      <p>
        Não vendemos nem partilhamos os teus dados pessoais com terceiros para fins de marketing. Os dados só são
        partilhados quando exigido por lei ou com o teu consentimento explícito.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">4. Futura Área do Aluno</h2>
      <p>
        Quando a Área do Aluno e o aplicativo móvel forem lançados (ver secção "Aplicativo" no site), esta política
        será actualizada com detalhes específicos sobre a conta pessoal, encriptação de dados académicos e
        autenticação segura. Nenhuma conta pessoal está activa neste momento.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">5. Os teus direitos</h2>
      <p>
        Tens o direito de aceder, corrigir ou solicitar a eliminação dos teus dados pessoais em qualquer momento,
        contactando-nos pelos canais indicados no fim desta página.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">6. Alterações a esta política</h2>
      <p>
        Esta política pode ser actualizada periodicamente. A data da última actualização é sempre indicada no
        topo desta página.
      </p>
    </PaginaLegal>
  )
}
