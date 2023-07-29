import facts from "../api/data.js";

// Function to show the Dashboard page
export const showDashboard = () => {
  // Hide all other sections
  hideAllSections();

  // Show the Dashboard section
  const dashboardSection = document.getElementById("dashboard");
  dashboardSection.style.display = "block";

  // Check if there are any facts to display
  if (facts.length > 0) {
    // Hide the "No Fun Facts yet" message
    const noFactsMessage = document.querySelector("h2");
    noFactsMessage.style.display = "none";

    // Display all the facts in the dashboard
    const dashboardContainer = document.getElementById("dashboard");
    dashboardContainer.innerHTML = "";

    facts.forEach((fact) => {
      const factDiv = document.createElement("div");
      factDiv.classList.add("fact");

      const image = document.createElement("img");
      image.src = fact.imageUrl;
      image.alt = fact.category;
      factDiv.appendChild(image);

      const category = document.createElement("h3");
      category.classList.add("category");
      category.textContent = fact.category;
      factDiv.appendChild(category);

      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = fact.description;
      factDiv.appendChild(description);

      const moreInfoLink = document.createElement("a");
      moreInfoLink.classList.add("details-btn");
      moreInfoLink.href = `#fact-details/${fact.id}`;
      moreInfoLink.textContent = "More Info";
      factDiv.appendChild(moreInfoLink);

      dashboardContainer.appendChild(factDiv);
    });
  } else {
    // Show the "No Fun Facts yet" message
    const noFactsMessage = document.querySelector("h2");
    noFactsMessage.style.display = "block";
  }
};
