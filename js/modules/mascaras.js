export function inicializarMascaras() {
  if (typeof window.IMask !== "function") {
    return;
  }

  const configuracoes = [
    {
      seletor: "#cpf",
      mascara: "000.000.000-00",
    },
    {
      seletor: "#cep",
      mascara: "00000-000",
    },
  ];

  configuracoes.forEach(({ seletor, mascara }) => {
    const campo = document.querySelector(seletor);

    if (!campo || campo.dataset.mascaraAtiva === "true") {
      return;
    }

    window.IMask(campo, {
      mask: mascara,
    });

    campo.dataset.mascaraAtiva = "true";
  });
}
