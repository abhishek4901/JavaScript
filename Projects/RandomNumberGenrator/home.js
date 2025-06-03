 let div = document.querySelector('.generatedNumber');
    let p = document.querySelector('p');
    let button = document.querySelector('#generateButton');

    function generateRandomNumber() {
      let randomNumber = Math.floor(Math.random() * 100) + 100;// 100 to 200 only random number

      // Display the random number
  
      div.innerText = randomNumber;
    }
    // Add event listener to the button
    button.addEventListener('click', generateRandomNumber);