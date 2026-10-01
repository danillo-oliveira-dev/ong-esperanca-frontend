const dadosProjetos = [
  {
    titulo: "Apoio em eventos",
    badge: "Voluntariado",
    descricao:
      "Os voluntários podem colaborar na organização e realização de campanhas, eventos e ações comunitárias.",
  },
  {
    titulo: "Apoio aos projetos",
    badge: "Projeto ativo",
    descricao:
      "Também é possível participar diretamente de atividades educativas, recreativas e de distribuição de recursos.",
  },
];

export function renderizarProjetos() {
  const lista = document.querySelector("#lista-projetos");

  const template = document.querySelector("#template-projeto");

  if (!lista || !template) {
    return;
  }

  lista.replaceChildren();

  const fragmento = document.createDocumentFragment();

  dadosProjetos.forEach((projeto) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".projeto-titulo").textContent = projeto.titulo;

    card.querySelector(".projeto-badge").textContent = projeto.badge;

    card.querySelector(".projeto-descricao").textContent = projeto.descricao;

    fragmento.append(card);
  });

  lista.append(fragmento);
}
