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

// Get DOM elements
const chatContent = document.getElementById('chat-content');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Array of responses from the chatbot
const responses = [
    "Hello! How can I assist you today?",
    "How can I help you?",
    "Feel free to ask me anything about your health.",
    "I'm here to provide assistance.",
    "Let me know if you have any questions."
];

// Function to display bot message
function displayBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = message;
    chatContent.appendChild(botMessage);
}

// Function to display user message
function displayUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;
    chatContent.appendChild(userMessage);
}

// Function to handle user input
function handleUserInput() {
    const message = userInput.value.trim();
    
    if (message !== '') {
        // Display user message
        displayUserMessage(message);

        // Get a random response from the chatbot and display
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        displayBotMessage(randomResponse);

        // Clear user input
        userInput.value = '';

        // Scroll to the bottom of the chat box
        chatContent.scrollTop = chatContent.scrollHeight;
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
