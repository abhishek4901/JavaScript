// That program run on console
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

// Power function using arrow function
var powerof = (a, b) => {
    console.log(`Power: ${a}^${b} = ${a ** b}`);
}

powerof(a, b); // Using user input

// Sum function using arrow function
let sum = (a, b) => {
    console.log(`This is sum = ${a + b}`); // Template literal use and store data in single variable
    console.log("This is sum = ", a + b);  // there store in 2 variable
}

sum(a, b); // Using user input
