// Function to toggle dark/light mode
function toggleDarkMode() {
    const DARK_MODE_CLASS = 'dark-mode';
    const body = document.body;

    // Check current mode
    const isDarkMode = body.classList.contains(DARK_MODE_CLASS);

    // Toggle mode
    if (isDarkMode) {
        // Switch to light mode
        body.classList.remove(DARK_MODE_CLASS);
    } else {
        // Switch to dark mode
        body.classList.add(DARK_MODE_CLASS);
    }
}

// Function to toggle the menu
function toggleMenu() {
    var menuLinks               = document.getElementById("menuLinks");
    var sidebar                 = document.querySelector(".sidebar");

    if (menuLinks.style.display === "block") {
        sidebar.classList.remove("open");
    } else {
        sidebar.classList.add("open");
    }
}

// Function to validate email address
function validateEmail(email) {
    var re                      = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to display error messages
function showError(message) {
    // Create a new paragraph element to display the error message
    var errorElement            = document.createElement("p");
    errorElement.textContent    = message;
    errorElement.classList.add("error");

    // Insert the error message before the form
    var form                    = document.querySelector("form");
    form.parentNode.insertBefore(errorElement, form);
}

// Function to remove error messages
function clearErrors() {
    // Remove all elements with the 'error' class
    var errors                  = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.remove();
    });
}

// Function to initialize event listeners
function initialize() {
    var form                    = document.querySelector("form");
    form.addEventListener("submit", sendMessage);
    form.addEventListener("input", clearErrors);

    // Add event listener for dark/light mode toggle button
    const modeToggleBtn         = document.getElementById('mode-toggle');
    modeToggleBtn.addEventListener('click', toggleDarkMode);
}

// Call the initialize function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initialize);

