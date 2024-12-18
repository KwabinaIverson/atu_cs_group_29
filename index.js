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


// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault();
//     const url = link.href;
    
//     document.startViewTransition(() => {
//       fetch(url)
//         .then(response => response.text())
//         .then(html => {
//           document.body.innerHTML = html;
//           history.pushState(null, '', url);
//         });
//     });
//   });
// });