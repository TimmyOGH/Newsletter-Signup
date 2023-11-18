// Validate email
function validateEmail(event) {
    // Check for valid email format using regular expression.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Prevent the default form submission
    event.preventDefault();

    var email = document.getElementById("email");

    if (emailRegex.test(email.value)) {
        // Close index and show success page
        window.location.href = "success.html";

        // Pass email to success page using session storage
        sessionStorage.setItem("email", email.value);

    } else {
        // Show error message
        document.getElementById("error_text").style.display = "block";

        // Change styles
        email.style.boxShadow = "none";
        email.style.outline = "none";
        email.style.border = "1px solid hsl(4, 100%, 67%)";
        email.style.color = "hsl(4, 100%, 67%)";
        email.classList.add('invalid');
        email.style.backgroundColor = "hsl(4, 100%, 95%)";
    }
}