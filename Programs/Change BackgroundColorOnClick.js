    // Create a button to change background color
window.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = "Change Background Color"; 
    document.body.appendChild(button);   
 
    // Function to generate a random color    
    function getRandomColor() { 
        const letters = '0123456789ABCDEF';    
        let color = '#';   
        for (let i = 0; i < 6; i++) { 
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add click event to button
    button.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });
});
