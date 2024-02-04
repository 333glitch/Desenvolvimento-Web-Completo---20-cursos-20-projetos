var nota = parseFloat(prompt('Digite sua nota'));
var faltas = parseFloat(prompt('Digite a quantidade de faltas'));

var media = 7;
var faltas_max = 15;

resultado = (nota >= media && faltas <= faltas_max) ? 'Aprovado' : 'Reprovado'

document.write(resultado)
