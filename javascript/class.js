
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