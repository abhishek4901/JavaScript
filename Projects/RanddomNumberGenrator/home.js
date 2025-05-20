 let div = document.querySelector('.generatedNumber');
    let p = document.querySelector('p');
    let button = document.querySelector('#generateButton');

    function generateRandomNumber() {
      // Generate random number between 1 and 100
      let randomNumber = Math.floor(Math.random() * 1000) + 100;

      // Display the random number
  
      div.innerText = randomNumber;
    }
    // Add event listener to the button
    button.addEventListener('click', generateRandomNumber);