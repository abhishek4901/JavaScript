// This script adds an item to a list when the button is clicked

function addItem() {
    // Get the value from the input field
    var input = document.getElementById("itemInput");
    var value = input.value.trim();

    if (value !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.textContent = value;

        // Add the new item to the list
        document.getElementById("itemList").appendChild(li);

        // Clear the input field
        input.value = "";
    } 
} 