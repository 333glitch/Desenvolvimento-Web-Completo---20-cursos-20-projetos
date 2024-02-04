var resposta = prompt('Digite sim ou não')
var parametro = (resposta === 'Sim' ||  resposta === 'sim') ? 'Sim' : 'Não'

switch (parametro) {
    case 'Sim':
        document.write('Digitou sim.')
        break

    case 'Não':
        document.write('Digitou não.')
        break

    default:
        document.write('Digite apenas sim ou não!')
        break
}