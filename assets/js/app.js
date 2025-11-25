let input = document.getElementById("display");
let firstNum;
let secondNum;
let operator;

function calculate() {
    secondNum = input.value;
    input.value = "";
    console.log(firstNum + " " + operator + " " + secondNum);

    switch (operator) {
        case "+":
            input.value = Number(firstNum) + Number(secondNum);
            clear();
            break;
        case "-":
            input.value = Number(firstNum) - Number(secondNum);
            clear();
            break;
        case "*":
            input.value = Number(firstNum) * Number(secondNum);
            clear();
            break;
        case "/":
            input.value = Number(firstNum) / Number(secondNum);
            clear();
            break;
        case "%":
            input.value = Number(firstNum) % Number(secondNum);
            clear();
            break;
    }
}

function setNumber(num) {
    if (input.value == "0") {
        input.value = "";
        input.value += num;
        return;
    }
    input.value += num;
}

function setOperator(op) {
    firstNum = input.value;
    if (operator != null) {
        return;
    }
    operator = op;
    console.log(operator);
    input.value = "";
}

function deleteLast() {
    input.value = input.value.slice(0, input.value.length - 1);
}

function clear() {
    firstNum = null;
    secondNum = null;
    operator = null;
}

function clearDisplay() {
    input.value = "0";
    firstNum = null;
    secondNum = null;
    operator = null;
}