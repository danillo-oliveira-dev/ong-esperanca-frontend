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
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── modules/
├── imagens/
├── README.md
└── .git/
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

## Execução para produção

Atualmente, o projeto é uma aplicação **front-end estática** e não necessita de instalação de dependências NPM para funcionar.

A preparação específica de **build, otimização e deploy** será realizada durante a etapa de produção do projeto.

## Autor

**Danillo Souza Oliveira**

Projeto acadêmico desenvolvido para fins educacionais.