import facts from "../api/data.js";

// Function to show the Edit Fact page
export const showEditFact = (factId) => {
  // Find the selected fact
  const fact = facts.find((item) => item.id === parseInt(factId));

  if (!fact) {
    // If the fact is not found, redirect to the Dashboard
    window.location.hash = "#dashboard";
    return;
  }

  // Hide all other sections
  hideAllSections();

  // Show the Edit section
  const editSection = document.getElementById("edit");
  editSection.style.display = "block";

  // Pre-fill the form with existing fact data
  const editForm = document.querySelector(".edit-form");
  editForm.elements.category.value = fact.category;
  editForm.elements["image-url"].value = fact.imageUrl;
  editForm.elements.description.value = fact.description;
  editForm.elements["additional-info"].value = fact.additionalInfo;
};
