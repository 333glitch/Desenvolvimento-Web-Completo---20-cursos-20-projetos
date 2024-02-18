const f = function (value, index, array) {
    document.write(`Value: ${value}, Index: ${index}, Array: ${array}. </br>`);
}

const array = ['Ryan', 'John', 'Jane', 'Maria', 'Lucia', 'Davy'];

array.forEach(f);