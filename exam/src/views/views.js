import { loginUser, registerUser, logoutUser } from "../api/api.js";
import { showDashboard, showAddFact, showFactDetails, showEditFact, showHome, showLogin, showRegister } from "./views.js";

// Function to handle login form submission
const handleLoginSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const response = await loginUser(email, password);
    if (response.accessToken) {
      // Store the access token in sessionStorage
      sessionStorage.setItem("accessToken", response.accessToken);
      // Redirect to the Home page
      window.location.hash = "#home";
    } else {
      window.alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error(error);
    window.alert("An error occurred during login.");
  }
};

// Function to handle registration form submission
const handleRegisterSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const response = await registerUser(email, password);
    if (response.accessToken) {
      // Store the access token in sessionStorage
      sessionStorage.setItem("accessToken", response.accessToken);
      // Redirect to the Home page
      window.location.hash = "#home";
    } else {
      window.alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    window.alert("An error occurred during registration.");
  }
};

// Function to handle logout action
const handleLogout = async () => {
  await logoutUser();
  // Clear session information
  sessionStorage.removeItem("accessToken");
  // Redirect to the Home page
  window.location.hash = "#home";
};

// Function to register event handlers
export const registerHandlers = () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }

  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }
};

// Function to show the Home page
export const showHome = () => {
  // ... (implementation of showing the Home page)
};

// Function to show the Dashboard page
export const showDashboard = () => {
  // ... (implementation of showing the Dashboard page)
};

// Function to show the Login page
export const showLogin = () => {
  // ... (implementation of showing the Login page)
};

// Function to show the Register page
export const showRegister = () => {
  // ... (implementation of showing the Register page)
};

// Function to show the Add Fact page
export const showAddFact = () => {
  // ... (implementation of showing the Add Fact page)
};

// Function to show the Fact Details page
export const showFactDetails = () => {
  // ... (implementation of showing the Fact Details page)
};

// Function to show the Edit Fact page
export const showEditFact = () => {
  // ... (implementation of showing the Edit Fact page)
};
