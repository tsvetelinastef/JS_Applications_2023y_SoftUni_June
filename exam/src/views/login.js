
export const showLogin = () => {
    // Hide all other sections
    hideAllSections();
  
    // Show the Login section
    const loginSection = document.getElementById("login");
    loginSection.style.display = "block";
  
    // Clear the login form inputs
    const loginForm = document.querySelector(".login-form");
    loginForm.reset();
  };
  