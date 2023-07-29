// Function to register routes for navigation
export const registerRoutes = () => {
  const routes = [
    { path: "#home", handler: showHome },
    { path: "#dashboard", handler: showDashboard },
    // Add more routes here for other pages
  ];

  const handleRouteChange = () => {
    const hash = window.location.hash || "#home";
    const route = routes.find((r) => r.path === hash);
    if (route && route.handler) {
      route.handler();
    }
  };

  // Add event listener to handle initial route change and subsequent hash changes
  window.addEventListener("DOMContentLoaded", handleRouteChange);
  window.addEventListener("hashchange", handleRouteChange);
};
