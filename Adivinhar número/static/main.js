let numeroCerto

const roletarNumero = function () {
    numeroCerto = Math.floor(Math.random() * 1000) + 1;
}

roletarNumero()


let intervalo = false

// sections
const inicio = document.getElementById("inicio")
const jogo = document.getElementById("jogo")
const final = document.getElementById('final')
const reiniciar = document.getElementById('reiniciar')

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
const menor = document.getElementById('menor')
const palpite = document.getElementById('palpite')
const maior = document.getElementById('maior')

// turnos
const turnos = document.getElementById("turnos")
let quantidadeTurnos = 0
let melhorTurno = document.getElementById('melhor-turno')


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
    turnos.innerHTML = `${quantidadeTurnos} Turnos`
}

const removerNumero = function () {

    const valorAtualArray = valorAtual.split("")
    valorAtualArray.pop()
    valorAtual = valorAtualArray.join("")

    atualizarValorAtual()

}

const adivinhar = function () {

    if (!intervalo) {
        if (valorAtual < numeroCerto && valorAtual > Number(menor.innerHTML)) {

            menor.innerHTML = palpite.innerHTML

            valorAtual = ""
            atualizarValorAtual()
            atualizarTurno()
        }
        else if (valorAtual > numeroCerto && valorAtual < Number(maior.innerHTML)) {

            maior.innerHTML = palpite.innerHTML

            valorAtual = ""
            atualizarValorAtual()
            atualizarTurno()
        }
        else if (valorAtual == numeroCerto) {

            atualizarValorAtual()
            atualizarTurno()
            terminarJogo()
        }
    }
}

class MelhorPontuacao {
    constructor(turnos) {
        this.turnos = turnos
    }
}

const melhoresPontuacoes = JSON.parse(localStorage.getItem('melhoresPontuacoes')) || []

let melhorPontuacao = localStorage.getItem("melhorPontuacao") || 0

const salvarPontuacao = function () {

    const novaPontuacao = new MelhorPontuacao(quantidadeTurnos)
    melhoresPontuacoes.push(novaPontuacao)

    localStorage.setItem('melhoresPontuacoes', JSON.stringify(melhoresPontuacoes))
    localStorage.setItem('melhorPontuacao', JSON.stringify(quantidadeTurnos))

    melhorPontuacao = localStorage.getItem("melhorPontuacao") || 0

}

const terminarJogo = function () {

    const melhorTurnoNumero = Number(melhorPontuacao) || 0

    if (melhorTurnoNumero == 0 || quantidadeTurnos < melhorTurnoNumero) {
        salvarPontuacao()
    }

    intervalo = true

    setTimeout(() => {
        intervalo = false

        final.style.display = ""
        jogo.style.display = "none"

        melhorTurno.innerHTML = Number(melhorPontuacao) + " Turnos"
    }, 3000);
}

reiniciar.addEventListener('click', () => reiniciarJogo())

const reiniciarJogo = function () {
    final.style.display = "none"
    jogo.style.display = ""

    quantidadeTurnos = 0
    turnos.innerHTML = quantidadeTurnos + " TURNOS"
    valorAtual = ""

    maior.innerHTML = 1000
    menor.innerHTML = 1

    roletarNumero()
    atualizarValorAtual()
}

console.log(numeroCerto)