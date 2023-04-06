//CONTAGEM DE PONTOS
var contUser = 0
var contPc = 0

//ELEMENTOS DA APLICAÇÃO
const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")


//VARIAVEIS DO ELEMENTO
var player1 = ""
var player2 = ""

//analisa e quando der um click no botao "jogar" ele executa as duas funçoes
playing.addEventListener("click", () => {
    reset()
    playPc()
})

//pega o botao escolhido pelo user e muda a img
function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='img/" + player1 + ".png'>" //concatena a pasta com o "valor" escolhido formando a img
    imgPC.innerHTML = ""
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor'] //[0,1,2]
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //sorteia um numero de 0 a 2
    player2 = opt[num] //pega o nome sorteado
    imgPC.innerHTML = "<img src='img/" + player2 + ".png'>" //concatena a pasta com o "valor" escolhido formando a img
    analyze()
}

//verifica o resultado
function analyze() {

    playing.disabled = true

    //0=empate, 1=vitoria, -1 derrota
    let win = "0"

    if (player1 == player2) {

        } else if(player1 == "rock") {
            win = player2 == "scissor" ? 1 : -1
        } else if(player1 == "paper") {
            win = player2 == "rock" ? 1 : -1
        } else if(player1 == "scissor") {
            win = player2 == "paper" ? 1 : -1
        }

        if(win == 0) {

        } else if(win > 0){
            contUser = contUser + 1 
        } else {
            contPc = contPc + 1 
        }

        contador.innerHTML = contUser + ":" + contPc

        //se o user chegar a 5, remove o none e add o center no html
        if (contUser >= 5) {
            winner.classList.remove('none')
            winner.classList.add('center')
        }

        //se o pc chegar a 5, remove o none e add o center no html
        if (contPc >= 5) {
            loser.classList.remove('none')
            loser.classList.add('center')
        }

        //habilita o botao "jogar" novamente
        setTimeout(() => {
            playing.disabled = false
        },1000)
}

function newGame() {
    contador.innerHTML = "0:0"
    contPc = 0
    contUser = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove  ('center')
}