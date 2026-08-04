import { PaginaLegal } from './PaginaLegal'
import { useSeo } from '../hooks/useSeo'
import { config } from '../config/site'

/** Ver nota de revisão jurídica em PoliticaPrivacidade.tsx -- aplica-se igualmente aqui. */
export function TermosUtilizacao() {
  useSeo({
    titulo: `Termos de Utilização — ${config.marca.nome}`,
    descricao: 'Termos e condições de utilização do site e dos serviços da Idiomas & Tecnologia.',
  })

  return (
    <PaginaLegal titulo="Termos de Utilização" actualizadoEm="2026">
      <p>
        Ao utilizares este site e/ou inscreveres-te em qualquer curso da {config.marca.nome}, aceitas os termos
        descritos abaixo. Para as regras específicas de funcionamento das aulas, consulta também o Regulamento
        disponível no site.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">1. Utilização do site</h2>
      <p>
        O conteúdo deste site (textos, logotipo, identidade visual) é propriedade da {config.marca.nome} e não
        pode ser copiado ou reutilizado sem autorização prévia.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">2. Informações e preços</h2>
      <p>{config.avisoPrecos}</p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">3. Inscrições e pagamentos</h2>
      <p>
        A inscrição num curso implica a aceitação do Regulamento interno, incluindo as regras de frequência,
        pagamento e cancelamento descritas nesse documento.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">4. Futuro aplicativo e Área do Aluno</h2>
      <p>
        Quando disponíveis, o aplicativo móvel e a Área do Aluno terão termos de utilização próprios e
        complementares a estes, incluindo condições específicas sobre segurança da conta e tratamento de dados
        académicos.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">5. Alterações aos termos</h2>
      <p>
        Estes termos podem ser actualizados periodicamente, sem aviso prévio individual. Recomenda-se a
        consulta ocasional desta página.
      </p>

      <h2 className="font-display text-lg font-semibold text-marca-texto">6. Contacto</h2>
      <p>Para qualquer questão sobre estes termos, contacta-nos pelo WhatsApp {config.contactoPrincipal.whatsappExibicao}.</p>
    </PaginaLegal>
  )
}
