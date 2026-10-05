import { lerEstadoSalvo, salvarEstado } from "./storage.js";

export function inicializarContraste() {
  const botao = document.querySelector("#alternar-contraste");

  if (!botao) {
    return;
  }

  function aplicarContraste(ativado) {
    document.documentElement.classList.toggle("alto-contraste", ativado);

    botao.setAttribute("aria-pressed", String(ativado));

    botao.textContent = ativado ? "Contraste normal" : "Alto contraste";
  }

  const estadoSalvo = lerEstadoSalvo();
  const contrasteAtivo = estadoSalvo.altoContraste === true;

  aplicarContraste(contrasteAtivo);

  if (botao.dataset.contrasteInicializado === "true") {
    return;
  }

  botao.addEventListener("click", () => {
    const novoEstado =
      !document.documentElement.classList.contains("alto-contraste");

    aplicarContraste(novoEstado);

    salvarEstado({
      altoContraste: novoEstado,
    });
  });

  botao.dataset.contrasteInicializado = "true";
}
