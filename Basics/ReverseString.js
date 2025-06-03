// Prompt the user to enter a string
const input = prompt("Enter a string to reverse:");

// Check if input is not null
if (input !== null) {
    // Reverse the string
    const reversed = input.split(',').reverse().join(',');
    // Show the reversed string
    alert("Reversed string: " + reversed);
} else {
    alert("No input provided.");
}