

checkEvenOdd(n);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (input) => {
    let n = Number(input); // Convert input to a number
    console.log("You entered:", n);

    function checkEvenOdd(n) {
        if (isNaN(n)) {
            console.log('Please enter a valid number');
            readline.close();
            return;
        }
        if (n % 2 === 0) {
            console.log('Number is even');
        } else {
            console.log('Number is odd');
        }
        readline.close();
    }

    checkEvenOdd(n);
});