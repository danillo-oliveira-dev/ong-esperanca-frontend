import { lerEstadoSalvo, salvarEstado } from "./storage.js";

import { mostrarToast } from "./toast.js";

export function inicializarFormulario() {
  const form = document.querySelector("#form-cadastro");

  if (!form) {
    return;
  }

  const nascimento = document.querySelector("#nascimento");

  const mensagem = document.querySelector("#mensagem-formulario");

  const campos = form.querySelectorAll('input:not([type="radio"]), select');

  const radiosParticipacao = form.querySelectorAll(
    'input[name="participacao"]',
  );

  if (nascimento) {
    const agora = new Date();

    const hojeLocal = new Date(
      agora.getTime() - agora.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .split("T")[0];

    nascimento.max = hojeLocal;
  }

  const estadoSalvo = lerEstadoSalvo();

  radiosParticipacao.forEach((radio) => {
    if (radio.value === estadoSalvo.participacao) {
      radio.checked = true;
    }
  });

  function obterMensagemErro(campo) {
    if (campo.validity.valueMissing) {
      return "Este campo é obrigatório.";
    }

    if (campo.validity.typeMismatch && campo.type === "email") {
      return "Digite um endereço de e-mail válido.";
    }

    if (campo.validity.tooShort) {
      return `Digite pelo menos ${campo.minLength} caracteres.`;
    }

    if (campo.validity.patternMismatch) {
      const mensagens = {
        cpf: "Digite o CPF no formato 000.000.000-00.",

        telefone: "Digite um telefone válido, como (11) 99999-9999.",

        cep: "Digite o CEP no formato 00000-000.",
      };

      return mensagens[campo.id] || "Formato inválido.";
    }

    if (campo.validity.rangeOverflow && campo.type === "date") {
      return "A data de nascimento não pode estar no futuro.";
    }

    if (campo.validity.rangeUnderflow && campo.type === "date") {
      return "Informe uma data de nascimento válida.";
    }

    return "Revise o preenchimento deste campo.";
  }

  function obterElementoErro(campo) {
    const idErro = `erro-${campo.id}`;

    let erro = document.querySelector(`#${idErro}`);

    if (!erro) {
      erro = document.createElement("small");

      erro.id = idErro;
      erro.className = "erro-campo";
      erro.hidden = true;

      campo.insertAdjacentElement("afterend", erro);

      const descricaoAtual = campo.getAttribute("aria-describedby") || "";

      const idsDescricao = new Set(descricaoAtual.split(/\s+/).filter(Boolean));

      idsDescricao.add(idErro);

      campo.setAttribute("aria-describedby", [...idsDescricao].join(" "));
    }

    return erro;
  }

  function validarCampo(campo) {
    const erro = obterElementoErro(campo);

    if (campo.checkValidity()) {
      campo.classList.remove("campo-invalido");

      campo.classList.add("campo-valido");

      erro.textContent = "";
      erro.hidden = true;

      return true;
    }

    campo.classList.remove("campo-valido");

    campo.classList.add("campo-invalido");

    erro.textContent = obterMensagemErro(campo);

    erro.hidden = false;

    return false;
  }

  function validarParticipacao() {
    const fieldset = radiosParticipacao[0]?.closest("fieldset");

    if (!fieldset) {
      return true;
    }

    let erro = fieldset.querySelector("#erro-participacao");

    if (!erro) {
      erro = document.createElement("small");

      erro.id = "erro-participacao";

      erro.className = "erro-campo erro-participacao";

      erro.hidden = true;

      fieldset.append(erro);
    }

    const selecionado = [...radiosParticipacao].some((radio) => radio.checked);

    if (selecionado) {
      erro.textContent = "";
      erro.hidden = true;

      return true;
    }

    erro.textContent = "Selecione uma forma de participação.";

    erro.hidden = false;

    return false;
  }

  campos.forEach((campo) => {
    const evento = campo.tagName === "SELECT" ? "change" : "input";

    campo.addEventListener(evento, () => {
      validarCampo(campo);
    });

    campo.addEventListener("blur", () => {
      validarCampo(campo);
    });
  });

  radiosParticipacao.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        salvarEstado({
          participacao: radio.value,
        });
      }

      validarParticipacao();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formularioValido = true;

    campos.forEach((campo) => {
      if (!validarCampo(campo)) {
        formularioValido = false;
      }
    });

    if (!validarParticipacao()) {
      formularioValido = false;
    }

    if (!formularioValido) {
      if (mensagem) {
        mensagem.textContent =
          "Revise os campos destacados antes de continuar.";

        mensagem.classList.remove("sucesso");
      }

      const primeiroInvalido =
        form.querySelector(".campo-invalido") ||
        form.querySelector('input[name="participacao"]:invalid');

      primeiroInvalido?.focus();

      return;
    }

    if (mensagem) {
      mensagem.textContent = "Cadastro validado com sucesso.";

      mensagem.classList.add("sucesso");
    }

    mostrarToast("Cadastro validado com sucesso!");
  });
}
