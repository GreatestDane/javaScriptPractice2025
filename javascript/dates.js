let date = new Date();

//get the time
//returns the time in miliseconds since January 1 1970 (time stamp, not actual date)
//getTime() is an instance method and can be used on this instance of the Date object
console.log(date.getTime());

//now() is a static method and must be used directly on the Date object, not an instance of the object. 
console.log(Date.now());

//getDay() is also an instance method and can be used on the instance of the Date object that we created
//getDay() results in an integer that each day is mapped to: 
// 0 = sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday 
// 6 = saturday
console.log(date.getDay());  // == 1 

//to have human readable days, you must create an array of the day names first like this: 

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = date.getDay();
console.log(`This output should be human readable. Today's date is: ${daysOfTheWeek[day]}`);
