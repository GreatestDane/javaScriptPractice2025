
//Here's my first attempt without watching the instructor 
function add(num1, num2) {
    var total; 
    total = num1 + num2;
    return total; 
}

let total = add(4, 5);

console.log(`First attempt by myself: ${total}`); 


//Second attempt after watching instructor 

function addAgain(num1, num2) {
    let total2 = num1 + num2;
    console.log(`This is the easier way the instructor showed me: ${total2}`);
}

addAgain(11, 20); 


// Arrow function are not hoisted and must be defined before they are used. 
//Use Const when using an arrow function because function expressions are always a constant value 

const arrowFunction = (num1, num2) => num1 + num2; 

console.log(`Here is an arrow function: ${arrowFunction(5, 5)}`); 