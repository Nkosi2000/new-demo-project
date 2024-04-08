function toggleMenu() {
    var menuLinks = document.getElementById("menuLinks");
    var sidebar = document.querySelector(".sidebar");

    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
        sidebar.classList.remove("open");
    } else {
        menuLinks.style.display = "block";
        sidebar.classList.add("open");
    }
}

// Function to handle form submission
function sendMessage(event) 
{
    // Prevent the form from submitting by default
    event.preventDefault();

    // Retrieve input values
    var name = document.querySelector("input[name='Name']").value.trim();
    var email = document.querySelector("input[name='Email']").value.trim();
    var message = document.querySelector("textarea[name='Message']").value.trim();

    // Validation
    if (name === "") 
    {
        showError("Please enter your name.");
        return;
    }

    if (email === "") 
    {
        showError("Please enter your email address.");
        return;
    } 
    else if (!validateEmail(email)) 
    {
        showError("Please enter a valid email address.");
        return;
    }

    if (message === "") 
    {
        showError("Please enter your message.");
        return;
    }

    // If all validations pass, submit the form
    document.querySelector("form").submit();
}

// Function to validate email address
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to display error messages
function showError(message) 
{
    // Create a new paragraph element to display the error message
    var errorElement = document.createElement("p");
    errorElement.textContent = message;
    errorElement.classList.add("error");

    // Insert the error message before the form
    var form = document.querySelector("form");
    form.parentNode.insertBefore(errorElement, form);
}

// Function to remove error messages
function clearErrors() 
{
    // Remove all elements with the 'error' class
    var errors = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.remove();
    });
}

// Function to initialize event listeners
function initialize() 
{
    var form = document.querySelector("form");
    form.addEventListener("submit", sendMessage);
    form.addEventListener("input", clearErrors);
}

// Call the initialize function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initialize);
