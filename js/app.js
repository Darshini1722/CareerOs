// Show / Hide Password

function togglePassword(id) {

    const field = document.getElementById(id);

    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}


// Clear errors while typing

document.getElementById("password").addEventListener("input", function () {
    document.getElementById("passwordError").innerText = "";
});

document.getElementById("confirmPassword").addEventListener("input", function () {
    document.getElementById("confirmPasswordError").innerText = "";
});

document.getElementById("firstName").addEventListener("input", function () {
    document.getElementById("firstNameError").innerText = "";
});

document.getElementById("lastName").addEventListener("input", function () {
    document.getElementById("lastNameError").innerText = "";
});

document.getElementById("email").addEventListener("input", function () {
    document.getElementById("emailError").innerText = "";
});


// Signup Validation

function validateSignup() {

    const firstName =
        document.getElementById("firstName").value.trim();

    const lastName =
        document.getElementById("lastName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // Error Elements

    const firstNameError =
        document.getElementById("firstNameError");

    const lastNameError =
        document.getElementById("lastNameError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");


    // Clear Previous Errors

    firstNameError.innerText = "";
    lastNameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";


    // First Name Validation

    if (firstName === "") {

        firstNameError.innerText =
            "First Name is required";

        return;
    }


    // Last Name Validation

    if (lastName === "") {

        lastNameError.innerText =
            "Last Name is required";

        return;
    }


    // Email Validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        emailError.innerText =
            "Enter a valid email address";

        return;
    }


    // Password Validation

    const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPassword.test(password)) {

        passwordError.innerText =
            "Minimum 8 characters, uppercase, lowercase, number and special character required.";

        return;
    }


    // Confirm Password Validation

    if (password !== confirmPassword) {

        confirmPasswordError.innerText =
            "Passwords do not match.";

        return;
    }


    // Success Message

    document.getElementById("successMessage")
        .style.display = "block";


    // Redirect after 2 seconds

    setTimeout(function () {

        window.location.href =
            "profile.html";

    }, 2000);
}