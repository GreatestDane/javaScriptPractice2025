let world = "world";

console.log(`hello ${world}`);

console.info(`Is this saving?`);

console.warn('Now what?');



// new lines of practice code 
function functionScope(word){
    var secretWord = word; 
    return secretWord; 
}


let retrievedWord = functionScope("snake");
console.log(retrievedWord);

