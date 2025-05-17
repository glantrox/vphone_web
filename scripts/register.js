const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach(e => {
        e.style.display = "none";
    });

    if (name.value.trim() === "") {
        showError("nameError", "Full name is required.");
        isValid = false;
    }

    if (!email.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        showError("emailError", "Enter a valid email address.");
        isValid = false;
    }

    if (password.value.length < 6) {
        showError("passwordError", "Password must be at least 6 characters.");
        isValid = false;
    }

    if (confirmPassword.value !== password.value) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
        form.reset();
    }
});

function showError(id, message) {
    const error = document.getElementById(id);
    error.textContent = message;
    error.style.display = "block";
}
