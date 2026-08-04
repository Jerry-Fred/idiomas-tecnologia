# Idiomas & Tecnologia — Website Institucional

Website institucional oficial da marca **Idiomas & Tecnologia**, construído em
React + TypeScript + Vite + Tailwind CSS, com a identidade visual extraída
directamente do logótipo oficial (azul-marinho + azul vívido + branco).

**Lema:** *"Get Knowledge and Be Part Of Something Big!"*

---

## 1. Estrutura do projecto

```
src/
├── components/    Peças de interface reutilizáveis (Header, Hero, Cursos, ...)
├── pages/         Páginas completas, montadas a partir dos components (Home, ...)
├── data/          "Base de dados" do site em ficheiros TypeScript editáveis
├── config/        Configuração geral da marca (nome, lema, WhatsApp)
├── hooks/         Lógica reutilizável (ex.: useSeo para título/descrição por página)
├── utils/         Funções auxiliares puras (formatação de moeda, link de WhatsApp)
└── assets/        Imagens (logótipo) e outros ficheiros estáticos
```

**Porquê esta separação?** Para que a MANUTENÇÃO DO CONTEÚDO nunca exija tocar
em código de interface. Praticamente tudo o que precisas de editar no dia-a-dia
(preços, textos, contacto, redes sociais) está em `src/data/` e `src/config/`,
com comentários em português a explicar exactamente o que cada campo faz.

### Onde alterar cada coisa

| Queres alterar...                         | Ficheiro                                  |
|--------------------------------------------|--------------------------------------------|
| Nome da marca, lema, texto da Hero, número de WhatsApp | `src/config/site.ts`         |
| Cursos, descrições, código de cada idioma  | `src/data/cursos.ts`                       |
| Preços das modalidades                     | `src/data/precos.ts`                       |
| Requisitos de inscrição                    | `src/data/requisitos.ts`                   |
| Regulamento (frequência, pagamentos, ...)  | `src/data/regulamento.ts`                  |
| Passos do "Como Funciona"                  | `src/data/comoFunciona.ts`                 |
| Razões da secção "Porquê Escolher"         | `src/data/porqueEscolher.ts`               |
| Testemunhos de alunos                      | `src/data/testemunhos.ts`                  |
| Links das redes sociais                    | `src/data/redesSociais.ts`                 |
| Funcionalidades do futuro app/Área do Aluno| `src/data/aplicativo.ts`                   |
| Cores da marca                             | `src/index.css` (bloco `@theme`)           |
| Logótipo                                   | `src/assets/marca/logo.jpg` (substituir o ficheiro) |

---

## 2. Como correr localmente

Requer Node.js 18 ou superior.

```bash
npm install       # instala as dependencias (so necessario uma vez)
npm run dev       # arranca o servidor de desenvolvimento
```

Abre `http://localhost:5173` no browser. As alteracoes a ficheiros sao
reflectidas automaticamente (hot reload).

```bash
npm run build     # gera a versao de producao em dist/
npm run preview   # testa localmente a versao de producao
npm run lint      # verifica o codigo quanto a erros/mas praticas
```

---

## 3. Como publicar

### Vercel (recomendado)

1. Cria uma conta em vercel.com e liga a tua conta GitHub.
2. Importa este repositorio como novo projecto.
3. A Vercel deteta automaticamente que e um projecto Vite -- nao e preciso
   configurar nada manualmente (build command: `npm run build`, output:
   `dist`).
4. Cada `git push` para a branch principal publica automaticamente uma
   nova versao.

### GitHub Pages

1. No ficheiro `vite.config.ts`, muda a linha `base: '/'` para
   `base: '/nome-do-repositorio/'` (substitui pelo nome real do repositorio).
2. Corre `npm run build` para gerar a pasta `dist/`.
3. Publica o conteudo de `dist/` na branch `gh-pages` (podes usar a
   extensao `gh-pages` do npm, ou o GitHub Actions).

---

## 4. Como integrar um backend no futuro

Este site esta preparado para evoluir de site estatico para plataforma
completa, tal como descrito na seccao "Aplicativo" do proprio site. Passos
recomendados quando esse momento chegar:

1. **Formulario de inscricao real**: hoje, os botoes "Inscrever-me Agora"
   abrem directamente uma conversa de WhatsApp (ver `src/utils/whatsapp.ts`).
   Para um formulario que grave directamente numa base de dados, cria um
   componente de formulario e liga-o a uma API.
2. **Variaveis de ambiente**: quando existir uma API real, usa ficheiros
   `.env` (o Vite le automaticamente variaveis prefixadas com `VITE_`, ex.:
   `VITE_API_URL=https://api.idiomasetecnologia.co.ao`) -- nunca escrevas
   URLs ou chaves sensiveis directamente no codigo.
3. **Area do Aluno / autenticacao**: quando a conta de aluno for
   implementada, recomenda-se um fluxo de autenticacao com tokens (JWT) e
   HTTPS obrigatorio em toda a comunicacao, seguindo o mesmo principio de
   seguranca ja comunicado na seccao "Aplicativo" do site (dados
   encriptados, acesso exclusivo ao titular da conta).
4. **SEO por pagina**: esta e uma SPA (Single Page Application) sem
   servidor a gerar HTML por pagina. Se o site crescer para incluir um
   blog educativo com muitos artigos partilhados individualmente nas
   redes sociais, considera migrar para um framework com
   pre-renderizacao/SSR, como Next.js ou Astro, para que cada
   pagina tenha as suas proprias meta tags Open Graph reais (hoje, a
   pre-visualizacao ao partilhar usa sempre as tags estaticas de
   `index.html`).

---

## 5. Escalabilidade ja prevista na arquitectura actual

- **Novas paginas**: basta criar um componente em `src/pages/` e
  adicionar uma `<Route>` em `src/App.tsx` (ver `PoliticaPrivacidade.tsx`
  e `TermosUtilizacao.tsx` como exemplo).
- **Novos cursos**: basta adicionar um objecto a `src/data/cursos.ts`.
- **Loja de materiais educativos**: a seccao "Materiais Educativos" ja
  existe como vitrine; liga-la a um carrinho de compras real e uma
  extensao natural (nova pagina `Loja.tsx` + integracao de pagamento).
- **Blog educativo**: pode ser adicionado como uma nova seccao de
  `src/pages/`, seguindo o mesmo padrao das paginas legais ja existentes.

---

## 6. Notas de seguranca ja aplicadas (mesmo sendo site estatico)

- Nenhuma informacao sensivel (chaves de API, credenciais) esta gravada no
  codigo-fonte.
- A estrutura de variaveis de ambiente (`VITE_*`) esta documentada e pronta
  a usar assim que existir uma API.
- Os links externos (`target="_blank"`) usam sempre `rel="noopener
  noreferrer"`, prevenindo uma vulnerabilidade comum (`window.opener`
  tabnabbing).
- O codigo esta organizado para que uma futura Area do Aluno com dados
  reais de utilizadores possa ser adicionada sem reestruturar o site
  existente.

---

## 7. Tecnologias usadas

- **React 19** + **TypeScript** -- interface e tipagem estatica
- **Vite** -- ferramenta de build, extremamente rapida em desenvolvimento
- **Tailwind CSS v4** -- estilizacao utilitaria, tema definido em `src/index.css`
- **React Router** -- navegacao entre paginas (Home, Politica de Privacidade, Termos)
- Tipografia: Fraunces (titulos), IBM Plex Sans (corpo), IBM Plex Mono (dados/precos)
