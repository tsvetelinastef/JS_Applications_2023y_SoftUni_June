
export const showCreateFact = () => {
    // Hide all other sections
    hideAllSections();
  
    // Show the Create Fact section
    const createSection = document.getElementById("create");
    createSection.style.display = "block";
  
    // Clear the form inputs
    const createForm = document.querySelector(".create-form");
    createForm.reset();
  };
  