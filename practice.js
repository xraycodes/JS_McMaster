

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

// closure
function outer(x) {
    function inner(y){
        return x + y
    }
    return inner; 
}

const outerReturn = outer(3) //even outer function is over, the value of 3 still is available for when you call the inner
console.log(outerReturn(2))  // will return 5, as the function definition is inner() at this point, value of x still remains after execution

// Recursion
function foo(){
    console.log('foo')
    foo()
}

const foos = function buz() {  //another way to write recursion
    console.log('s')
    buz()
    
}

function recurse(){
    if(base_condition) {
        // do something
        return;
    }

    recurse()
}

function fetchWater(count){
    if(count === 0) {
        console.log("No more water left")
        return;
    }

    console.log("Fetching water...")
    fetchWater(count - 1)
}

fetchWater(5)