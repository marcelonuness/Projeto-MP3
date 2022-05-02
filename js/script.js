let music = document.getElementById('music')
let imagem = document.getElementById('imagem')
let duracao = document.getElementById('progress')

let tempoDuracaoFinal = parseInt(music.duration)
let duracaoAtual = parseInt(music.currentTime)

function progresso() {
    duracaoAtual ++
}



function iniciar() {
    music.play()
    console.log(music.currentTime)
}

function pausar() {
    music.pause()
}