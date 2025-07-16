// sections
const inicio = document.getElementById("inicio")
const jogo = document.getElementById("jogo")

// começar jogo
const start = document.getElementById("start")
start.addEventListener("click", function () {
    inicio.style.display = "none"
    jogo.style.display = "block"
})