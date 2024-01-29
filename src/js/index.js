
//document.getElementById = procura por um id
const botao = document.querySelector(".btn-plataforma")

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
        elementoPlataformas.classList.toggle("ativo");
    //o toggle tira e remove a palavra que esta no parentese a frente
})
    
