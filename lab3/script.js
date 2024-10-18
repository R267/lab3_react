// 2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function getFibonacci() {
    const fibInput = document.getElementById("fibInput").value;
    const n = parseInt(fibInput, 10);
    if (isNaN(n) || n < 0) {
        document.getElementById("fibResult").innerText = "Повинно бути введене ціле додатнє число";
        return;
    }

    if (n > 30) {
        document.getElementById("fibResult").innerText = "Число має бути в діапазоні від 0 до 30 включно";
        return;
    }

    const result = fibonacci(n);
    document.getElementById("fibResult").innerText = result;
}


// 3
function filter(handler, array) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (handler(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function filterArray() {
    const arrayInput = document.getElementById("arrayInput").value;
    const handlerInput = document.getElementById("handlerInput").value;
    const array = arrayInput.split(',').map(Number);
    const threshold = parseInt(handlerInput, 10);
    
    if (isNaN(threshold)) {
        document.getElementById("filterResult").innerText = "Введіть число, щоб відфільтрувати";
        return;
    }

    const handler = function(element) {
        return element > threshold;
    };

    const result = filter(handler, array);
    document.getElementById("filterResult").innerText = `[${result.join(', ')}]`;
}


// 4
function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent < 0) {
        return 1 / pow(base, -exponent);
    }

    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

function calculatePower() {
    const baseInput = document.getElementById("baseInput").value;
    const exponentInput = document.getElementById("exponentInput").value;
    const base = parseFloat(baseInput);
    const exponent = parseInt(exponentInput, 10);

    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById("powerResult").innerText = "Необхідне заповнення всіх полів числами";
        return;
    }

    const result = pow(base, exponent);
    document.getElementById("powerResult").innerText = result;
}


// 5
function powList(numbers, exponent) {
    return numbers.map(function(number) {
        return pow(number, exponent);
    });
}

function calculatePowerForList() {
    const arrayInput = document.getElementById("arrayPowerInput").value;
    const exponentInput = document.getElementById("exponentPowerInput").value;
    const numbers = arrayInput.split(',').map(Number);
    const exponent = parseInt(exponentInput, 10);

    if (isNaN(exponent)) {
        document.getElementById("powListResult").innerText = "Введіть степінь";
        return;
    }

    const result = powList(numbers, exponent);
    document.getElementById("powListResult").innerText = `[${result.join(', ')}]`;
}


// 6
function powAndFilter(numbers, exponent, minValue) {
    const poweredNumbers = powList(numbers, exponent);
    
    const filteredNumbers = filter(function(number) {
        return number >= minValue;
    }, poweredNumbers);
    
    return filteredNumbers;
}

function calculatePowerAndFilter() {
    const inputArray = document.getElementById('arrayPowerInput2').value.split(',').map(Number);
    const exponent = Number(document.getElementById('exponentPowerInput2').value);
    const minValue = Number(document.getElementById('handlerInput2').value);

    const result = powAndFilter(inputArray, exponent, minValue);
    document.getElementById('powListResult2').innerText = `[${result.join(', ')}]`;
}


// 7
function sum(handler) {
    function calc() {
        const numbers = handler();
        return numbers.reduce((acc, num) => acc + num, 0);
    }

    return calc;
}

function getNumbersFromInput() {
    const input = document.getElementById('numberArrayInput').value;
    return input.split(',').map(Number);
}

function calculateSum() {
    const calc = sum(getNumbersFromInput);
    const result = calc();
    document.getElementById('sumResult').innerText = result;
}