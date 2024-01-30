var numero1 = prompt('Digite seu primeiro número');
var numero2 = prompt('Digite seu segundo número');

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

document.write(`O valor da soma dos dois números inteiros é: ${numero1 + numero2}. E seu tipo é: ${typeof numero1 + numero2}</br>`);

var numero3 = prompt('Digite seu terceiro número (com pontos flutuantes)');
var numero4 = prompt('Digite seu quarto número (com pontos flutuantes)');
document.write(`A soma dos dois números com pontos flutuantes é: ${numero3 + numero4}. E seu tipo é: ${typeof numero3}</br>`)

var numero5 = prompt('Digite seu quinto número, este será uma string');
var numero6 = prompt('Digite seu sexto número, este será uma string');
numero5 = parseFloat(numero5)
numero6 = parseInt(numero6)
document.write(`convertendo para número ${numero5} e ${numero6}, seu typeof é: ${typeof numero5}<br/>`)
numero5 = numero5.toString();
numero6 = numero6.toString();
document.write(`convertendo para número ${numero5} e ${numero6}, seu typeof é: ${typeof numero5}<br/>`)
document.write(`A soma dos dois valores não é válida, pois será uma string que concatenada é: ${numero5 + numero6}`)