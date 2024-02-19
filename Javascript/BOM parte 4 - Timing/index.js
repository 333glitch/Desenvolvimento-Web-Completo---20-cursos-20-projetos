let i = 0

var time = setInterval(() => {
    document.write(i + "<br>")
    i++
    if (i === 10) {
        clearInterval(time)
    }
}, 1000);

time(); 
