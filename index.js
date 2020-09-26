const cupom = document.querySelector(".cupom-inteiro");
const aviso = document.querySelector("h5");

cupom.addEventListener("click", () => {
    cupom.setAttribute("hidden", "")
    aviso.toggleAttribute("hidden")
});

const tempo = document.querySelector("span");



