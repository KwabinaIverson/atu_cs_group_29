// Get user info
const fullName = document.getElementById("fullname");
const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupButton = document.querySelector(".signup-button");

// User object
const user = {fname: "", gmail: "", password: ""};


// Load existing user info if available
if (localStorage.getItem("user")) {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  alert("User already exits")
}

function checkPassword() {
  confirmPassword.addEventListener("blur", function() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.style.border = "2px solid #ef4444";
      return false;
    }
    else {
      confirmPassword.style.border = " 2px solid #60a5fa";
      return true;
    }
  });
}

checkPassword();

// Event listener for button click
signupButton.addEventListener("click", function() {

  if (checkPassword === true) {
    // Update user object
    user.fname = fullName.value;
    user.gmail = gmail.value;
    user.password = password.value;

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));
  }
  else {
    confirmPassword.addEventListener("blur", ()=> {
      confirmPassword.style.border = "2px solid #ef4444";
    });
  }

});


// Select the elements
const images = document.querySelectorAll('.image-container');
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector('.background').style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (currentIndex === 0) {
  setTimeout(() => {
    currentIndex = 0;
    document.querySelector('.background').style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 500);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.querySelector('.background').style.transform = `translateX(-${currentIndex * 100}%)`;
}


setInterval(showNextImage, 3000);