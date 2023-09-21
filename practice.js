

// Function expression: Another way to declare function
const printMe = function() {
    console.log('print')
}

const printMeAgain = function(a,b) {
    console.log(a, b)
}


function hi() {
    console.log('helo')
}

// rest parameter
function collect(x, ...y) {
    console.log(x)
    console.log(y)
    console.log(typeof(y))
}


// arrow function
const add = function(x,y) {
    return x + y;
}

const addAsArrow = (x,y) => {
    return x + y;
} // if its one block of code in block can just do (x,y) => x + y  (Return is implied)


//nested function
function outer() {
    console.log('outer');
        function inner() {
            console.log('inner')
        }

        inner()
}

outer()