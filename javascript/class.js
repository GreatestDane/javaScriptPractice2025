
//Create a constructor for the class 
//use the "this." syntax to give the class attributes 
//Classes can also have functions (the start() or speak() functions)
class Car {
    constructor(brand, wheels, engine) {
        this.brand = brand,
        this.wheels = wheels,
        this.engine = engine
    }
    start() {
        console.warn("engine started"); 
    }
};

car = new Car("porsche", 4, "v6"); 

console.log(car);

car.start();


//Here is an example of making new people: 
class Person {
    constructor(name, age, gender, hobby) {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.hobby = hobby
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, I am a ${this.gender}, and my hobby is ${this.hobby}.`)
    }
};

hank = new Person("Hank", 39, "male", "music"); 

hank.speak(); 


//Extending a class can borrow the attributes of another existing class, like so: 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Dog class extends Animal and can now use it's attributes 
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!`);
    }
}

let dog = new Dog("Buddy");
dog.speak(); // Buddy barks!


//Okay, let's try another SUPER practice


class Hero {
    constructor(name, affiliation, power) {
        this.name = name,
        this.affiliation = affiliation,
        this.power = power
    }
    usePower() {
        console.log(`${this.name} the ${this.affiliation}, uses his ${this.power} power in a shower of force!`);
    }
};

superMan = new Hero("superMan", "hero", "laser eyes")

superMan.usePower();

class Antihero extends Hero {
    constructor(name, affiliation, power, guns) {
        super(name, affiliation, power)
        this.guns = guns
    }
    usePower() {
        super.usePower()
        console.log (`And then he takes out his ${this.guns} and blasts a hole through the bad guys`);
    }

};

let superPunisher = new Antihero("SuperPunisher", "AntiHero", "grenade bombs", "twin glocks");

superPunisher.usePower();