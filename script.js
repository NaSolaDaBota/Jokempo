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

playing.addEventListener("click", () => {
    reset()
    playPc()
})

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='img/" + player1 + ".png'>"
    imgPC.innerHTML = ""
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPC.innerHTML = "<img src='img/" + player2 + ".png'>"
    analyze()
}

function analyze() {

    playing.disabled = true

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

        if (contUser >= 5) {
            winner.classList.remove('none')
            winner.classList.add('center')
        }

        if (contPc >= 5) {
            loser.classList.remove('none')
            loser.classList.add('center')
        }

        setTimeout(() => {
            playing.disabled = false
            clear();
        },1000)
}

function clear() {
    imgPC.innerHTML = ""
    imgUser.innerHTML = ""
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