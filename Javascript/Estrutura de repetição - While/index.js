var total = 0

while (total < 100) {
    var biscuit = Math.floor(Math.random() * 10) + 1;
    total += biscuit;
    if (total > 100) {
        var difference = total - 100;
        console.log(difference)
        total -= difference
    }
    document.write('I have ' + total + ' biscuits </br>');
}
