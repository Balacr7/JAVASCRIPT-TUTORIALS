// variable

var life = 100 ;                                                                        // this is a variable
life = life - 10;                                                                       // life = 90
life = life - 10;                                                                      // life = 80
var name = "Hey Bala";                                                                  // This is the variable name
var checkout = true;                                                                    // this is a boolean
var box ;                                                                               // undefined
var box = null;                                                                        // Null
console.log(life) ;

const life = 100;                                                                       // we cannot modify
let life = 100;                                                                         // Similar to variable
life = life -10; 

// Functions
const Name = 'Bala C'; 
const youtuber = 'Black sheep'                                                           // converting it into Uppercase
funtion toUpper(text){
    const uppercased = text.uppercased();
    console.log(uppercased);
}
toUpper(Name);
toUpper(youtuber);

funtion adder(num1,num2){
    console.log(num1+num2);                                                             // adding two numbers
}       
adder(5,10);

// another version to write the function
const toUpper = function(){

}

// string concatenation
const myAge = 24;
const yourAge = 25;
console.log(myAge+yourAge);

console.log("Hello, my name is " + "Bala")                                              // String concat
console.log("Hello my 'name' is " + "Bala");
console.log("hey,It\'s me Bala");

console.log(`Hello it's me Bala ${Name}`);

const Name = 'Bala';
const Age = '25';

console.log('Hello my name is'+ Name + ' and my age is'+ Age);                    // method 1
console.log(`hello, my name is ${Name} and my age is ${Age}`);                   // method 2 is better to use.

const combined = Name + Age;
console.log(combined);                                                          // cannot add string with number - output - Bala25

console.log(typeof Age);                                                       // to figure out the data type.

// If statements
const age = 25;
if( age> 18){
    console.log("You are good to go");                                        // Will return False or True depending on the condition
} 
else if(age<15){
   console.log("You are too young to be here");
}
else{
    console.log("you are not permitted");                                     // === USED FOR COMPARISON
}

const dice1= 6;
const dice2= 8;
if(dice1===6 && dice2 ===6){                                                 // comparing dice1 and dice2
    console.log("You rolled a double");
}
else{
    console.log("You are ruled out");
}

if(dice1 ===6 || dice2 ===6){
    console.log("you got one coorect");                                       // || or operator
}
else{
    console.log("You didnt get anything right"); 
}


// Arrays

const schedule = ['Wake Up','Eat','Film a Video','Watch things on Netflix'];
schedule.push('added work');                                                              // Adding a word to array
schedule.pop();                                                                          // removes the final string
schedule.shift();                                                                       // removes the first string
schedule.unshift('Hey good morning');                                                  //adds a word in the beginning of the string
console.log(schedule.indexof("Eat"));                                                 // finding the index of the string 
console.log(schedule[3]);

// Objects and Key this
const user = {
    name: 'bala',
    age:24,
    Marriage status: true,
    purchases:['Phone','House']

    sayname: funtion(){
        console.log(this.name);
    }
};
user.sayname();

funtion saymyage(){
    console.log(`my age is ${this}`;)
}
user.saymyage();

// Loops

const Names = ['Bala','Naren','Rohan','Sam'];
For(Name of Names) {
console.log(Name);
}


const Names = ['Bala','Naren','Rohan','Sam'];
For(Name of Names) {
console.log(`Hello there $[Name]`);
}

const Names = ['Bala','Naren','Rohan','Sam'];
for (Name of Names){
console.log (Name);
if(Name === 'Bala') {
console.log("Its in the list");
break;
  }
}

let loading = 0;
while(loading<100){
    console.log("webiste is still loading");

    loading++;
}

// 

