
export const showRegister = () => {
    // Hide all other sections
    hideAllSections();
  
    // Show the Register section
    const registerSection = document.getElementById("register");
    registerSection.style.display = "block";
  
    // Clear the register form inputs
    const registerForm = document.querySelector(".register-form");
    registerForm.reset();
  };
  