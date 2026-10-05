# ONG Esperança

Projeto educacional desenvolvido na disciplina de **Desenvolvimento Front-End para Web**.

A aplicação representa o site de uma organização da sociedade civil fictícia e foi desenvolvida com foco em **responsividade, interatividade, acessibilidade, organização de código e boas práticas de desenvolvimento front-end**.

## Funcionalidades

- Navegação em **Single Page Application (SPA)**
- Roteamento dinâmico sem recarregamento completo da página
- Templates dinâmicos para criação de componentes
- Validação de formulário em tempo real
- Feedback visual para campos válidos e inválidos
- Persistência de preferências com `localStorage`
- Modal e notificações do tipo **toast**
- Layout responsivo
- Menu mobile em formato hambúrguer
- Integração com biblioteca externa para máscaras de campos
- JavaScript organizado em módulos ES6

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- DOM API
- Fetch API
- History API
- Web Storage API (`localStorage`)
- ES6 Modules
- IMask.js
- Git
- GitHub

## Estrutura do projeto

```text
Projeto-ONG-Esperanca/
├── css/
│   └── styles.css
│
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
│
├── imagens/
│   ├── ong-comunidade.jpg
│   └── ong-comunidade.webp
│
├── js/
│   ├── app.js
│   └── modules/
│       ├── contraste.js
│       ├── formulario.js
│       ├── mascaras.js
│       ├── modal.js
│       ├── projetos.js
│       ├── router.js
│       ├── storage.js
│       └── toast.js
│
├── scripts/
│   ├── medir-build.mjs
│   └── minify-html.mjs
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

A separação das pastas segue o princípio de **separação de responsabilidades**, mantendo marcação, estilos, scripts e recursos visuais organizados individualmente.

## Pré-requisitos

Para executar o projeto localmente, é recomendado possuir:

- Git instalado
- Navegador web atualizado
- Visual Studio Code ou editor equivalente
- Extensão **Live Server** ou outro servidor HTTP local
- Ligação com a internet para carregamento da biblioteca externa **IMask.js**

## Instalação e execução local

### 1. Clone o repositório

```bash
git clone https://github.com/danillo-oliveira-dev/ong-esperanca-frontend.git
```

### 2. Entre na pasta do projeto

```bash
cd ong-esperanca-frontend
```

### 3. Abra o projeto no Visual Studio Code

```bash
code .
```

### 4. Execute a aplicação

Abra o arquivo:

```text
html/index.html
```

através da extensão **Live Server** ou de outro servidor HTTP local.

> O projeto deve ser executado através de um servidor HTTP local porque utiliza **ES6 Modules, Fetch API e navegação SPA**.

## Testes

Os testes são realizados manualmente no navegador e através das ferramentas de desenvolvimento.

São verificados:

- Navegação entre rotas da SPA
- Funcionamento dos botões de voltar e avançar
- Formulário com dados válidos e inválidos
- Mensagens de validação
- Funcionamento do modal
- Notificações do tipo toast
- Persistência de dados através do `localStorage`
- Máscaras de CPF e CEP
- Navegação responsiva
- Console do navegador sem erros inesperados

## Versionamento

O projeto utiliza **Git** e **GitHub** com uma estratégia baseada em **GitFlow**.

### Branches principais

- `main`: versão estável do projeto
- `develop`: integração das funcionalidades em desenvolvimento
- `feature/*`: desenvolvimento isolado de novas funcionalidades
- `hotfix/*`: correções urgentes em versões estáveis

### Conventional Commits

As mensagens de commit seguem o padrão **Conventional Commits**, utilizando prefixos como:

- `feat:` novas funcionalidades
- `fix:` correções
- `docs:` documentação
- `refactor:` reorganização de código
- `perf:` melhorias de desempenho
- `chore:` tarefas de manutenção

### Semantic Versioning

O versionamento das releases segue o padrão **Semantic Versioning**:

```text
MAJOR.MINOR.PATCH
```

A primeira versão de desenvolvimento registrada foi:

```text
v0.1.0
```

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js
- npm

## Build e execução

Instale as dependências do projeto:

```bash
npm install
```

Para executar em ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a build otimizada de produção:

```bash
npm run build
```

A build é processada pelo **Vite**, e os arquivos finais são gerados na pasta `dist`.

O HTML também passa por uma etapa adicional de minificação utilizando o **html-minifier-terser**.

Para testar localmente a versão de produção:

```bash
npm run preview
```

## Deploy

A aplicação está publicada na **Vercel**, com integração automática ao repositório GitHub.

### Produção

[https://ong-esperanca-frontend.vercel.app](https://ong-esperanca-frontend.vercel.app)

A branch `main` representa a versão estável utilizada no ambiente de produção.

Novas alterações enviadas para essa branch acionam automaticamente o processo de **build e deploy pela Vercel**.

## Versão estável

**Versão atual:** `v1.0.1`

Esta versão inclui a correção das rotas da **SPA (Single Page Application)** identificada após o primeiro deploy em produção.

## Autor

**Danillo Souza Oliveira**

Projeto acadêmico desenvolvido para fins educacionais.