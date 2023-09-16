function calculate() {
    let operand1 = document.getElementById("number1").value;
    let operand2 = document.getElementById("number2").value;
    const operator = document.getElementById("mathOp").value;

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById("result").innerHTML = "Enter valid number";
    } else {
        operand1 = +operand1;
        operand2 = +operand2;

        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                if (operand2 === 0) {
                    document.getElementById("result").innerHTML = 'Cannot divide by 0';
                    return; 
                }
                result = operand1 / operand2;
                break;

            }
            document.getElementById("result").innerHTML = result;
    }
}        