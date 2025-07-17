// sections
const inicio = document.getElementById("inicio")
const jogo = document.getElementById("jogo")

// botões
const adivinharButton = document.getElementById("btn-adivinhar").addEventListener("click", () => adivinhar())
const um = document.getElementById('1').addEventListener('click', () => adicionarNumero(1))
const dois = document.getElementById('2').addEventListener('click', () => adicionarNumero(2))
const tres = document.getElementById('3').addEventListener('click', () => adicionarNumero(3))
const quatro = document.getElementById('4').addEventListener('click', () => adicionarNumero(4))
const cinco = document.getElementById('5').addEventListener('click', () => adicionarNumero(5))
const seis = document.getElementById('6').addEventListener('click', () => adicionarNumero(6))
const sete = document.getElementById('7').addEventListener('click', () => adicionarNumero(7))
const oito = document.getElementById('8').addEventListener('click', () => adicionarNumero(8))
const nove = document.getElementById('9').addEventListener('click', () => adicionarNumero(9))
const zero = document.getElementById('0').addEventListener('click', () => adicionarNumero(0))
const apagar = document.getElementById('apagar').addEventListener('click', () => removerNumero())

// tentativas
const numeroCerto = Math.floor(Math.random() * 1000) + 1;
const menor = document.getElementById('menor')
const palpite = document.getElementById('palpite')
const maior = document.getElementById('maior')

// turnos
const turnos = document.getElementById("turnos")
let quantidadeTurnos = 0



// começar jogo
const start = document.getElementById("start")
start.addEventListener("click", function () {
    inicio.style.display = "none"
    jogo.style.display = "block"
})


let valorAtual = ""

const adicionarNumero = function (index) {

    if ((valorAtual + index) <= 1000 && ((valorAtual + index)) >= 1) {

        valorAtual += index
        atualizarValorAtual()

    }
}

const atualizarValorAtual = function () {

    palpite.innerHTML = Number(valorAtual)

    if (palpite.innerHTML == 0) {
        palpite.innerHTML = "?"
    }
}

const atualizarTurno = function () {

    quantidadeTurnos += 1
    turnos.innerHTML = quantidadeTurnos
}

const removerNumero = function () {

    const valorAtualArray = valorAtual.split("")
    valorAtualArray.pop()
    valorAtual = valorAtualArray.join("")

    atualizarValorAtual()

}

const adivinhar = function () {

    if (valorAtual < numeroCerto && valorAtual > Number(menor.innerHTML)) {
        console.log(numeroCerto)

        menor.innerHTML = palpite.innerHTML

        valorAtual = ""
        atualizarValorAtual()
        atualizarTurno()
    }
    else if (valorAtual > numeroCerto && valorAtual < Number(maior.innerHTML)) {
        console.log(numeroCerto)

        maior.innerHTML = palpite.innerHTML

        valorAtual = ""
        atualizarValorAtual()
        atualizarTurno()
    }
    else if (valorAtual == numeroCerto) {
        console.log('ACERTOU')
    }
}

const terminarJogo = function () {
    
}