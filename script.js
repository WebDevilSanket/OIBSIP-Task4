// Predefined user credentials (you can replace these with your own authentication logic)
const users = [
  { email: "sanketpehere234@gmail.com", password: "Sanket" },
  { email: "user2@example.com", password: "password2" },
  // Add more users as needed
];

// Function to handle the login process
function handleLogin() {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const errorMessage = document.getElementById("error-message");

  // Get user input
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  // Check if the entered email and password match any user
  const user = users.find(
    (user) => user.email === enteredEmail && user.password === enteredPassword
  );

  if (user) {
    // Authentication successful, redirect or perform desired action
    alert("Login successful!");
  } else {
    // Authentication failed, display an error message
    errorMessage.textContent = "Invalid email or password";
    alert("Invalid email or password");
  }
}

// Event listener for the login button
const loginButton = document.getElementById("signinBtn");
loginButton.addEventListener("click", handleLogin);
