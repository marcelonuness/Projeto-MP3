let musicas = [
    {titulo:'Best Part Of Me', artista:'Ed Sheeran ft. Yebba', src:'./musicas/ed_sheeran_best_part_of_me_feat_yebba_official_lyric_video_3131468281568568928.mp3', img:'./imagens/best-part-img.jpg'},
    {titulo:'Transmissão de Pensamento', artista:'Melim', src:'./musicas/melim_transmissao_de_pensamento_ao_vivo_-6431821278913897694.mp3', img:'./imagens/transmissao-melim.jpg'},
    {titulo:'Off My Face', artista:'Justin Bieber', src:'./musicas/justin_bieber_off_my_face_live_from_paris_8094897589030745844.mp3', img:'./imagens/off-my-face.jpg'}
]

// variaveis
let musica = document.querySelector('audio')
let quantoDura = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.informacoes h3')
let nomeArtista = document.querySelector('.informacoes p')
let indexMusica = 0

mudarDeMusica(indexMusica)

quantoDura.textContent = minutos(Math.floor(musica.duration))

// eventos
musica.ontimeupdate = function() {
    let barra = document.querySelector('progress')
    
}


musica.addEventListener('ended', () => {
    if (true) {
        indexMusica++
    } if (indexMusica < 0) {
        indexMusica = 2
    } if(indexMusica > 2) {
        indexMusica = 0
    }
    mudarDeMusica(indexMusica)
    iniciar()
})


document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--    
    if(indexMusica < 0) {
        indexMusica = 2
    }
    mudarDeMusica(indexMusica)
    iniciar()
})

document.querySelector('.posterior').addEventListener('click', () => {
    indexMusica++   
    if(indexMusica > 2) {
        indexMusica = 0
    }
    mudarDeMusica(indexMusica)
    iniciar()
})


// funcoes
function mudarDeMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        quantoDura.textContent = minutos(Math.floor(musica.duration))        
    })
}

function iniciar() {
       
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'

}

function pausar() {
       
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'

}

function atualizando() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempo = document.querySelector('.inicio')
    tempo.textContent = minutos(Math.floor(musica.currentTime))
}

function minutos(segundos) {
    let segundosParaMinutos = Math.floor(segundos / 60)
    let minutosParaSegundos = segundos % 60
    if (minutosParaSegundos < 10) {
        minutosParaSegundos = '0' + minutosParaSegundos
    } 

    return segundosParaMinutos + ':' + minutosParaSegundos
}
