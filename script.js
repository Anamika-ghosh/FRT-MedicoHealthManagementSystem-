// script.js
// Functionality for login page
function handleLogin() {
    // Add login functionality here
}

// Functionality for registration page
function handleRegistration() {
    // Add registration functionality here
}

// Functionality for other pages (e.g., home, labs, assistance)
function handleOtherPages() {
    // Add functionality common to multiple pages here
}

// Event listeners for different pages
document.addEventListener('DOMContentLoaded', function() {
    // Check if the login page
    if (document.querySelector('.login-container')) {
        handleLogin();
    }

    // Check if the registration page
    if (document.querySelector('.register-container')) {
        handleRegistration();
    }

    // For other pages
    handleOtherPages();
});
// script.js

// Functionality for login page
function handleLogin() {
    // Add login functionality here
}

// Functionality for registration page
function handleRegistration() {
    // Add registration functionality here
}

// Functionality for other pages (e.g., home, labs, assistance)
function handleOtherPages() {
    // Add functionality common to multiple pages here
}

// Event listeners for different pages
document.addEventListener('DOMContentLoaded', function() {
    // Check if the login page
    if (document.querySelector('.login-container')) {
        handleLogin();
    }

    // Check if the registration page
    if (document.querySelector('.register-container')) {
        handleRegistration();
    }

    // For other pages
    handleOtherPages();
});

// bot 
// assisstance page 
// Get DOM elements
let currentIndex = 0;

function showNextImage() {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

function toggleChat(chatboxId) {
    const chatbox = document.getElementById(chatboxId);
    if (chatbox.classList.contains('chatbox-hidden')) {
        chatbox.classList.remove('chatbox-hidden');
        chatbox.classList.add('chatbox-visible');
    } else {
        chatbox.classList.remove('chatbox-visible');
        chatbox.classList.add('chatbox-hidden');
    }
}

// Event listener for send button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for pressing Enter key
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting from the bot
displayBotMessage("Hello! How can I assist you today?");

// Get all the book buttons
const bookButtons = document.querySelectorAll('.book-btn');

// Function to handle booking
function bookAppointment(event) {
    // Prevent the default action of the button
    event.preventDefault();
    
    // Get the lab name
    const labName = event.target.closest('.lab-box').querySelector('h2').innerText;
    
    // Simulate booking process (you can replace this with your actual booking logic)
    // For demonstration purpose, we'll just display an alert message
    alert(`Appointment booked for ${labName}`);
}

// Add click event listener to each book button
bookButtons.forEach(button => {
    button.addEventListener('click', bookAppointment);
});

//contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        // Display alert message
        alert('Thank you for reaching out to us!');
        
        // Optional: Reset the form after submission
        contactForm.reset();
    }

    // Add event listener to the form submission
    contactForm.addEventListener('submit', handleSubmit);
});
