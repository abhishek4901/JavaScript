const readline = require('readline');

function countAlphabetOccurrence(word) {
  const frequency = {};

  // Convert to lowercase to count letters case-insensitively
  word = word.toLowerCase();

  for (let char of word) {
    if (char >= 'a' && char <= 'z') {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  console.log("Alphabet Occurrences:");
  for (let key in frequency) {
    console.log(`${key}: ${frequency[key]}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a word: ", function(input) {
  countAlphabetOccurrence(input);
  rl.close();
});