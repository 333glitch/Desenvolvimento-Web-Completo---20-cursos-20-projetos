var width;
var height;

function getScreen() {
  width = window.innerWidth;
  height = window.innerHeight;
}

getScreen();

function randomPosition() {
  var x = Math.floor(Math.random() * width) - 90;
  var y = Math.floor(Math.random() * height) - 90;
  x = x < 0 ? 0 : x;
  y = x < 0 ? 0 : y;
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();
  }
  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = getRandomClass() + ' ' + getSide();
  mosquito.style.left = `${x}px`;
  mosquito.style.top = `${y}px`;
  mosquito.style.position = "absolute";
  mosquito.id = 'mosquito';
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