// Select the contact form and other page elements
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const currentYear = document.getElementById("currentYear");

// Display the current year in the footer
currentYear.textContent = new Date().getFullYear();

// Handle the contact form submission
contactForm.addEventListener("submit", function (event) {
    // Prevent the browser from refreshing the page
    event.preventDefault();

    // Display a confirmation message
    formStatus.textContent =
        "Thank you. Your enquiry has been submitted successfully.";

    // Clear the completed form
    contactForm.reset();
});