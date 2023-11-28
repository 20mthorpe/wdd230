// Get references to the buttons and the target element
var gridButton = document.querySelector('#gridButton');
var listButton = document.querySelector('#listButton');
var members = document.querySelector('.members');

// Function to handle the click event for switching to the grid
gridButton.addEventListener('click', function() {
    // Change the ID of the target element to 'directorygrid'
    members.id = 'cards';
});

// Function to handle the click event for switching to the list
listButton.addEventListener('click', function() {
    // Change the ID of the target element to 'directorylist'
    members.id = 'memberlist';
});