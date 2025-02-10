//I pretty much got arrays down, so we'll just do this dumb shit here: 

let array = [1, "fart", false, true]

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//trick to get the last element of an array 

const lastElement = array.length -1; 
console.log(`This is the last element: ${array[lastElement]}`);

//or you can do it inline like this: 
console.log(`This is also the last element: ${array[array.length - 1]}`);

//There are other functions for arrays but our instructor isn't going over them right now. 
