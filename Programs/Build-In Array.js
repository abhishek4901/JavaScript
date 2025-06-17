 // Example: Using built-in array methods in JavaScript

let numbers = [10, 20, 30, 40, 50];

// 1. forEach: Print each element
numbers.forEach(function(num) { 
    console.log("Number:", num);  
});   
 
// 2. map: Create a new array with each value doubled
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled:", doubled);

// 3. filter: Get numbers greater than 25
let filtered = numbers.filter(function(num) {
    return num > 25;
});
console.log("Filtered (greater than 25):", filtered);

// 4. reduce: Sum all numbers
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log("Sum:", sum);

// 5. push: Add a new number to the array
numbers.push(60);
console.log("After push:", numbers);

// 6. pop: Remove the last number from the array
let last = numbers.pop();
console.log("Popped value:", last);
console.log("After pop:", numbers);
