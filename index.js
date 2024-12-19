// Get user info
const fullName = document.getElementById("fullname");
const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupButton = document.querySelector(".signup-button");
const loginButton = document.querySelector(".login-button");

// User object
const user = { fname: "", gmail: "", password: "" };

// Load existing user info if available
if (localStorage.getItem("user")) {
  alert("User already exists");
  console.log("User already exists...");
}

// Check password match
function checkPassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.style.border = "2px solid #ef4444";
    return false;
  } else {
    confirmPassword.style.border = "2px solid #60a5fa";
    return true;
  }
}

// Event listener for signup button
signupButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (checkPassword()) {
    user.fname = fullName.value;
    user.gmail = gmail.value;
    user.password = password.value;

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully");
    console.log("Account created successfully...");
    window.location.href = "./login.html";
  }
});

// Event listener for login button
loginButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "./index.html";
});
