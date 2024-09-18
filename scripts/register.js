// Select form by id
const registerForm = document.querySelector("#register-form");
// Handle form submit event 
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get("Username"),
        formData.get("email"),
        formData.get("password")
    );
    // Save user information
    // Send a confirmation email
    // Display success message
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Account registered sucessfully!";
});

// Age variable
const age = 44;
// Square of age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}
const squaredAge = squareAge(45);
// console.log(squaredAge);


// function to get full name
function fullName(firstName, LastName) {
    // return FirstName + LastName;
    return `${firstName} ${LastName}`;
}

const myFullName = fullName("Nkunim", "Osei");
// console.log (myFullName);