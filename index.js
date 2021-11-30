// 1 - Consoling

console.log('hello world');

const place = "world";
console.log("%s", place);

console.log(`${place}`);

// 2 - Comments

// Single line comment

/*Multi Line comments  */

// 3 - Variables

var one = 1; // function level, used before declaration
let two = 2; // class level, used after declaration
const three = 3; // block scoped, used after declaration, can not be changed

// 4 - String concatination

let x = "akanksha";
let y = "patel";
let z = x + y;

// 5 - template literals

let x = "akanksha";
let y = "patel";

console.log(`hello miss ${x} ${y} !!!!`);


// 6 - Data Type

const people = ["akanksha", "abhishek", "ayush"];
const one = 1;
const str = "Hello world";
const b = true;
const person = {
    firstName = "akanksha",
    lastName = "patel"
}

function sayHello(person){
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);