var width;
var height;
var life = 1;
var time = 10

function getScreen() {
  width = window.innerWidth;
  height = window.innerHeight;
}

getScreen();

var stopwatch = setInterval(() => {
  if (time < 0) {
    clearInterval(stopwatch);
    clearInterval(createMosca);
    window.location.href = 'vitória.html';
  }
  time--
  document.getElementById('time').innerHTML = time
}, 1000);

function randomPosition() {
  var x = Math.floor(Math.random() * width) - 90;
  var y = Math.floor(Math.random() * height) - 90;
  x = x < 0 ? 0 : x;
  y = x < 0 ? 0 : y;
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();

    if (life > 3) {
      window.location.href = 'fim_de_jogo.html'
    }
    else {
      console.log(life)
      document.getElementById('v' + life).src = './imagens/coracao_vazio.png'
      life++
    }
  }
  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = getRandomClass() + ' ' + getSide();
  mosquito.style.left = `${x}px`;
  mosquito.style.top = `${y}px`;
  mosquito.style.position = "absolute";
  mosquito.id = 'mosquito';
  mosquito.onclick = function() {
    this.remove();
  }
  document.body.appendChild(mosquito);
}

function getRandomClass() {
  var classy = Math.floor(Math.random() * 3);
  switch (classy) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
    default:
      return "mosquito1";
  }
}

function getSide() {
  var side = Math.floor(Math.random() * 2)
  switch (side) {
    case 0:
      return 'sideA';
      case 1:
      return 'sideB';
  }
}