let world = "world";

console.log(`hello ${world}`);

console.info(`Is this saving?`);

console.warn('WARNING! If this commit doesn\' go to Github, I\'m going to lose it!');



// new lines of practice code 
function functionScope(word){
    var secretWord = word; 
    return secretWord; 
}


let retrievedWord = functionScope("snake");
console.log(retrievedWord);

