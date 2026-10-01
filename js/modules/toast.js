export function mostrarToast(texto) {
  const toast = document.querySelector("#toast");

  const toastMensagem = document.querySelector("#toast-mensagem");

  if (!toast || !toastMensagem) {
    return;
  }

  toastMensagem.textContent = texto;
  toast.classList.add("mostrar");
}

export function inicializarToast() {
  const toast = document.querySelector("#toast");

  const fecharToast = document.querySelector("#fechar-toast");

  if (!toast || !fecharToast) {
    return;
  }

  fecharToast.addEventListener("click", () => {
    toast.classList.remove("mostrar");
  });
}
