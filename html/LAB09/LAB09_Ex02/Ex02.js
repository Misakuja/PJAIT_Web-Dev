const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
}

const getResult = (operation, ...args) => {
    const fn = operations[operation];
    return fn(...args);
};

function calculate() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;

    const main = document.getElementById("main");
    let resultDiv = document.getElementById("result");
    if (!resultDiv) {
        resultDiv = document.createElement("div");
        resultDiv.id = "result";
        main.insertBefore(resultDiv, document.getElementById("form"));
    }

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers.";
    }

    try {
        resultDiv.textContent = getResult(operation, num1, num2);

    } catch (error) {
        resultDiv.textContent = "Error: " + error.message;
    }

}