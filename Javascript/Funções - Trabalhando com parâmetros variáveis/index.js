var result = 0
function get() {
    for (const i in arguments) {
        result += arguments[i];
    }
    return result
}

console.log(get(5, 3, 3, 3, 1, 6, 7))