function color(hexadecimal) {
    var number = 1
    const element = document.getElementById('element');
    element.style.background = hexadecimal;
    element.textContent += parseInt(number++);
}