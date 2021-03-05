// --- Basic Javascript ---

// Add element to the end of an array with push()
var myArray = [["John", 23]];
myArray.push(["Sherlock", 24]);
console.log(myArray); // [["John", 23], ["Sherlock", 24]]


// Remove element from the end of an array with pop()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray); // [["John", 23]]


// Remove element from the beginning of an array with shift()
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(myArray); // [["dog", 3]]


// Add element to the beginning of an array with unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray); // [["Paul", 35], ["dog", 3]]


// Using a switch statement with a default
function switchOfStuff(val) {
    var answer = "";

    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}
  
switchOfStuff(1); // returns "stuff"


// --- ES6 (aka ES2015) ---

// Using let for block scope
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}


// An element in array declared as a constant can still be altered
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]


// Destructuring an array
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


