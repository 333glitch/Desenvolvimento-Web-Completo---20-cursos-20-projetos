var ticket = 0
var participant = 0

do {
    var total
    total = Math.floor(Math.random() * 5) + 1;
    ticket += total
    participant++
    if (ticket > 100) {
        difference = ticket - 100
        ticket -= difference
    }
    document.write(`The participant of number: ${participant}, Receives: ${total} tickets and current tickets number sold is: ${ticket}. <br>`)
} while (ticket < 100);