
//============ Assignment 1 (Module 2) ============//

// Exercise 1: 
// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [first_name, last_name] = arr;
    const extractedObject = {name, age};
    return extractedObject;
  }
  const obj = { name: "John", age: 30, city: "New York" };
  const arr = [10, 20, 30, 40];
  const extractedObject = destructureExample(obj, arr);
  console.log("[Exercise 1] Output: ",  extractedObject);


// Exercise 2:
// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
function sumNumbers(...numbers){
    let sum = 0;
    for(let number of numbers ){
        sum +=number;
    }
    return sum;
}
console.log("[Exercise 2] Output: ",  sumNumbers(1, 2, 3, 4, 5));



// Exercise 3:
//  Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
function createGreeting(greeting){
    return `Output: Hello ${greeting}! Welcome to our Website`;
}
console.log("[Exercise 3] ", createGreeting('Alice'));



// Exercise 4: 
// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
function isEven(number){
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log("[Exercise 4] Output: ", isEven(7));



// Exercise 5: 
// Convert the following function to an arrow function:
    const multiply = (a, b) => a * b; 
    console.log("[Exercise 5] OutPut: ", multiply(5, 6));

    

// Exercise 6: 
// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(number1, number2) {

    const isNumber1Larger = number1 > number2 && number1 !== NaN;
    const isNumber2Larger = number2 > number1 || number2 !== NaN;

    return isNumber1Larger ? number1 : isNumber2Larger ? number2 : NaN;
  }
  console.log("[Exercise 6] OutPut: ", getLargestNumber(1, 5));



// Exercise 7: 
// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

const address = { street: '123 Main St', country: 'USA' };

function getAddressCity(address){
    return address?.city ?? "Unknown";
}
const city =  getAddressCity(address.city);
console.log("[Exercise 7] Output: ", city);



// Exercise 8: 
// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

function doubleNumbers(numbers){
    return numbers.map((number) => number *2);
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log("[Exercise 8] Output: ", doubledNumbers);



// Exercise 9: 
// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

function filterEvenNumbers(numbers){
    const evenNumbers = numbers.filter(function(num){
        return num % 2 === 0;
    });
    return evenNumbers;
}
const originaNumbers = [1, 2, 3, 4, 5];
const filterNumbers = filterEvenNumbers(originaNumbers);
console.log("[Exercise 9] Output: " , filterNumbers);


// Exercise 10: 
// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

function sumArray(sum){
    return sum.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log("[Exercise 10] Output: ", sumArray([1, 2, 3, 4, 5]));



// Exercise 11: 
// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

function sortNumbers(numbers){
    return numbers.sort();
}
const originalArray = [5, 2, 8, 1, 4];
const sortedArray = sortNumbers(originalArray);
console.log("[Exercise 11] Output: ", sortedArray);

