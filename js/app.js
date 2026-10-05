import { renderizarProjetos } from "./modules/projetos.js";

import { inicializarMascaras } from "./modules/mascaras.js";

import { inicializarToast } from "./modules/toast.js";

import { inicializarFormulario } from "./modules/formulario.js";

import { inicializarModal } from "./modules/modal.js";

import { inicializarSPA } from "./modules/router.js";

import { inicializarContraste } from "./modules/contraste.js";

function inicializarInteracoes() {
  renderizarProjetos();
  inicializarMascaras();
  inicializarToast();
  inicializarFormulario();
  inicializarModal();
}

function iniciarAplicacao() {
  function iniciarAplicacao() {
    inicializarContraste();

    const spaAtivada = inicializarSPA(inicializarInteracoes);

    if (!spaAtivada) {
      inicializarInteracoes();
    }
  }

  const spaAtivada = inicializarSPA(inicializarInteracoes);

  if (!spaAtivada) {
    inicializarInteracoes();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarAplicacao, {
    once: true,
  });
} else {
  iniciarAplicacao();
}
