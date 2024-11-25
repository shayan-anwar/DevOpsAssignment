// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("user-form");
    const resultSection = document.getElementById("result-section");
    const formSection = document.getElementById("form-section");
    const resultName = document.getElementById("result-name");
    const resultMessage = document.getElementById("result-message");

    form.addEventListener("submit", function(event) {
        // Prevent page refresh on form submit
        event.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        // Display the result section
        resultName.textContent = name;
        resultMessage.textContent = message;

        // Hide the form and show the result
        formSection.style.display = "none";
        resultSection.style.display = "block";
    });
});
