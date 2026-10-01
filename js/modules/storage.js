const CHAVE_ESTADO = "ongEsperancaEstado";

export function lerEstadoSalvo() {
  const estadoPadrao = {
    ultimaRota: "inicio",
    participacao: "",
  };

  try {
    const estadoString = localStorage.getItem(CHAVE_ESTADO);

    if (!estadoString) {
      return estadoPadrao;
    }

    const estado = JSON.parse(estadoString);

    if (!estado || typeof estado !== "object" || Array.isArray(estado)) {
      return estadoPadrao;
    }

    return {
      ...estadoPadrao,
      ...estado,
    };
  } catch (erro) {
    console.warn("Não foi possível recuperar os dados locais.", erro);

    return estadoPadrao;
  }
}

export function salvarEstado(alteracoes) {
  try {
    const estadoAtual = lerEstadoSalvo();

    const novoEstado = {
      ...estadoAtual,
      ...alteracoes,
    };

    localStorage.setItem(CHAVE_ESTADO, JSON.stringify(novoEstado));
  } catch (erro) {
    console.warn("Não foi possível salvar os dados locais.", erro);
  }
}
