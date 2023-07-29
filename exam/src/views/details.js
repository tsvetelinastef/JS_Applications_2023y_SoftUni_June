// views/details.js

import facts from "../api/data.js";

// Function to show the Fact Details page
export const showFactDetails = (factId) => {
  // Find the selected fact
  const fact = facts.find((item) => item.id === parseInt(factId));

  if (!fact) {
    // If the fact is not found, redirect to the Dashboard
    window.location.hash = "#dashboard";
    return;
  }

  // Hide all other sections
  hideAllSections();

  // Show the Details section
  const detailsSection = document.getElementById("details");
  detailsSection.style.display = "block";

  // Update the content with the fact details
  const detailsImage = document.getElementById("details-img");
  detailsImage.src = fact.imageUrl;
  detailsImage.alt = fact.category;

  const detailsCategory = document.getElementById("details-category");
  detailsCategory.textContent = fact.category;

  const description = document.getElementById("description");
  description.textContent = fact.description;

  const moreInfo = document.getElementById("more-info");
  moreInfo.textContent = fact.additionalInfo;

  const likesCount = document.getElementById("likes");
  likesCount.textContent = 0; // For simplicity, set the likes count to 0 (will be updated later)
};
