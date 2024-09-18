// Select form by id
const loginForm = document.querySelector("#login-form");

// Handle form submit event 
loginForm, addEventListener ("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get("username"),
        formData.get("password")
    );
    // Save user information
    // Send a confirmation email
    // Display success message
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Login sucessful!";
});