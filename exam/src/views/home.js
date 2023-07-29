
export const showHome = () => {
    // Hide all other sections
    hideAllSections();
  
    // Show the Home section
    const homeSection = document.getElementById("home");
    homeSection.style.display = "block";
  };
  