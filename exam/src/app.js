import { registerHandlers } from "./lib.js";
import { registerRoutes } from "./util.js";
import { showHome, showDashboard } from "./views/views.js";

// Function to handle user login
async function handleLogin(email, password) {
  // ... (same as before)
}

// Function to handle user registration
async function handleRegistration(email, password) {
  // ... (same as before)
}

// Function to handle user logout
async function handleLogout() {
  // ... (same as before)
}

// Function to check if the user is logged in
function isLoggedIn() {
  return !!sessionStorage.getItem("accessToken");
}

// Function to get the access token
function getAccessToken() {
  return sessionStorage.getItem("accessToken");
}

// Register event handlers
registerHandlers();

// Register routes for navigation
registerRoutes();

// Check if the user is logged in and show the appropriate view
if (isLoggedIn()) {
  showDashboard();
} else {
  showHome();
}
