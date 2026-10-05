import { lerEstadoSalvo, salvarEstado } from "./storage.js";

const rotas = {
  inicio: null,
  projetos: "/html/projetos.html",
  cadastro: "/html/cadastro.html",
};

const titulos = {
  inicio: "ONG Esperança - Início",
  projetos: "ONG Esperança - Projetos",
  cadastro: "ONG Esperança - Cadastro",
};

function obterRotaAtual() {
  const rotaHash = window.location.hash.replace("#", "");

  if (Object.hasOwn(rotas, rotaHash)) {
    return rotaHash;
  }

  const estadoSalvo = lerEstadoSalvo();

  if (Object.hasOwn(rotas, estadoSalvo.ultimaRota)) {
    return estadoSalvo.ultimaRota;
  }

  return "inicio";
}

function descobrirRotaDoLink(href) {
  if (!href) {
    return null;
  }

  if (href.startsWith("#")) {
    const rota = href.slice(1);

    return Object.hasOwn(rotas, rota) ? rota : null;
  }

  if (href.includes("projetos.html")) {
    return "projetos";
  }

  if (href.includes("cadastro.html")) {
    return "cadastro";
  }

  if (href.includes("index.html")) {
    return "inicio";
  }

  return null;
}

function atualizarNavegacao(rota) {
  document.querySelectorAll(".menu-lista a").forEach((link) => {
    link.removeAttribute("aria-current");

    const rotaDoLink = descobrirRotaDoLink(link.getAttribute("href"));

    if (rotaDoLink === rota && !link.closest(".dropdown-menu")) {
      link.setAttribute("aria-current", "page");
    }
  });
}

export function inicializarSPA(inicializarInteracoes) {
  const app = document.querySelector("#app");

  if (!app) {
    return false;
  }

  const templateInicio = app.innerHTML;

  async function renderizarRota(rota, moverFoco = true) {
    try {
      if (rota === "inicio") {
        app.innerHTML = templateInicio;
      } else {
        const resposta = await fetch(rotas[rota]);

        if (!resposta.ok) {
          throw new Error(`Falha ao carregar ${rotas[rota]}`);
        }

        const html = await resposta.text();

        const documento = new DOMParser().parseFromString(html, "text/html");

        const conteudoPrincipal = documento.querySelector("main");

        if (!conteudoPrincipal) {
          throw new Error("Conteúdo principal não encontrado.");
        }

        app.innerHTML = conteudoPrincipal.innerHTML;

        documento.querySelectorAll("dialog, #toast").forEach((extra) => {
          app.append(extra.cloneNode(true));
        });
      }

      document.body.className = `pagina-${rota}`;

      document.title = titulos[rota];

      salvarEstado({
        ultimaRota: rota,
      });

      atualizarNavegacao(rota);

      inicializarInteracoes();

      if (moverFoco) {
        app.focus({
          preventScroll: true,
        });

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (erro) {
      console.error(erro);

      app.innerHTML = `
        <section>
          <h2>Não foi possível carregar o conteúdo</h2>
          <p>
            Tente novamente em alguns instantes.
          </p>
        </section>
      `;
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (!link) {
      return;
    }

    const rota = descobrirRotaDoLink(link.getAttribute("href"));

    if (!rota) {
      return;
    }

    event.preventDefault();

    history.pushState({ rota }, "", `#${rota}`);

    renderizarRota(rota);
  });

  window.addEventListener("popstate", () => {
    renderizarRota(obterRotaAtual());
  });

  const rotaInicial = obterRotaAtual();

  if (!window.location.hash) {
    history.replaceState({ rota: rotaInicial }, "", `#${rotaInicial}`);
  }

  renderizarRota(rotaInicial, false);

  return true;
}
