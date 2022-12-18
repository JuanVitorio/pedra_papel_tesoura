let placar_p1 = document.querySelector('#player1')
let placar_p2 = document.querySelector('#player2')

let pontos_p1 = 0
let pontos_p2 = 0

let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')

let btn = document.querySelector('#btn').addEventListener('click', jogar)

function jogar() {
  let imagens = ['img/pedra.png', 'img/tesoura.png', 'img/papel.png']

  let sortear = Math.floor(Math.random() * 3)
  let sortear2 = Math.floor(Math.random() * 3)



  /*
  0 = pedra
  1 = tesoura
  2 = papel
  */

  //empates

  if (sortear == 0) {
    img1.src = imagens[sortear]
    if (sortear2 == 0) {
      img2.src = imagens[sortear2]
      alert('Empate')
    } else if (sortear2 == 1) {
      img2.src = imagens[sortear2]
      alert('Pedra ganha de tesoura - Player1 + 1 ponto')
      pontos_p1 += 1
      placar_p1.innerHTML = pontos_p1
    } else if (sortear2 == 2) {
      img2.src = imagens[sortear2]
      alert('Papel ganha de pedra - Player2 + 1 ponto')
      pontos_p2 += 1
      placar_p2.innerHTML = pontos_p2
    }

  }

  if (sortear == 1) {
    img1.src = imagens[sortear]
    if (sortear2 == 0) {
      img2.src = imagens[sortear2]
      alert('Pedra ganha de tesoura - Player2 + 1 ponto')
      pontos_p2 += 1
      placar_p2.innerHTML = pontos_p2
    } else if (sortear2 == 1) {
      img2.src = imagens[sortear2]
      alert('Empate')
    } else if (sortear2 == 2) {
      img2.src = imagens[sortear2]
      alert('Tesoura ganha de papel - Player1 + 1 ponto')
      pontos_p1 += 1
      placar_p1.innerHTML = pontos_p1
    }

  }

  if (sortear == 2) {
    img1.src = imagens[sortear]
    if (sortear2 == 0) {
      img2.src = imagens[sortear2]
      alert('Papel ganha de pedra - Player1 + 1 ponto')
      pontos_p1 += 1
      placar_p1.innerHTML = pontos_p1
    } else if (sortear2 == 1) {
      img2.src = imagens[sortear2]
      alert('Tesoura ganha de papel - Player2 + 1 ponto')
      pontos_p2 += 1
      placar_p2.innerHTML = pontos_p2
    } else if (sortear2 == 2) {
      img2.src = imagens[sortear2]
      alert('Empate')

    }

  }

}

