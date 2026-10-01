export function inicializarModal() {
  const modal = document.querySelector("#modal-participacao");

  const abrirModal = document.querySelector("#abrir-modal");

  const fecharModal = document.querySelector("#fechar-modal");

  if (modal && abrirModal) {
    abrirModal.addEventListener("click", () => {
      modal.showModal();
    });
  }

  if (modal && fecharModal) {
    fecharModal.addEventListener("click", () => {
      modal.close();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  }
}
