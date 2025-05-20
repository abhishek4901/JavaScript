function generateColor() {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

  // Set the background color and text
  const colorBox = document.getElementById("colorBox");
  colorBox.style.backgroundColor = randomColor;
  colorBox.textContent = randomColor;
}
  