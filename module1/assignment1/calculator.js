/**
 * To read the value written in a text field,
 *  use code like the following to read from the input field identified with id equals to "number1":
 * 
 * const val1 = document.getElementById("number1").value;
 * const val2 = document.getElementByID("number2").value
 */

/**
 * To read the value selected in a dropdown menu,
 *  use code like the following to read the selected math operation from the "select" element identified with id equals to "mathOp":
 * 
 * const op = document.getElementById("mathOp").value;
 * 
 */

/**
 * To write some value (e.g. result) to a text field
 *  use code like the following to update the field identified with id equals to "result":
 * 
 *  document.getElementById("result").innerHTML = "<your result here>";
 * 
 */


function calculate() {
    let operand1 = document.getElementById("number1").value;
    operand1 = +operand1
    let operand2 = document.getElementById("number2").value
    operand2 = +operand2
    
    // if (typeof(operand1) || typeof(operand2) != 'number') {
    //     document.getElementById("result").innerHTML = 'Enter Valid Number'
    // }
    const operator = document.getElementById("mathOp").value;
    if (operator === '+') {
        result = operand1 + operand2;
        document.getElementById("result").innerHTML = result
    } else if (operator === '-') {
        result = operand1 - operand2;
        document.getElementById("result").innerHTML = result
    } else if (operator === '*') {
        result = operand1 * operand2;
        document.getElementById("result").innerHTML = result
    } else if (operator === '/') {
        if (operand2 === 0) {
            document.getElementById("result").innerHTML = "Cant divide by 0"
        } else if (result = operand1 / operand2) {
            document.getElementById("result").innerHTML = result
        }

    } else {
        document.getElementById("result").innerHTML = 'error'
    }
}



