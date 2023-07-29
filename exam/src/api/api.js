const API_URL = "http://localhost:3000"; // Replace with the actual API URL

// Function to handle user login
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const { accessToken } = await response.json();
    return { accessToken };
  } catch (error) {
    throw new Error("An error occurred during login.");
  }
}

// Function to handle user registration
export async function registerUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const { accessToken } = await response.json();
    return { accessToken };
  } catch (error) {
    throw new Error("An error occurred during registration.");
  }
}

// Function to handle user logout
export async function logoutUser() {
  try {
    await fetch(`${API_URL}/users/logout`, {
      method: "GET",
      headers: {
        "X-Authorization": getAccessToken(),
      },
    });

    // Clear the access token from sessionStorage
    sessionStorage.removeItem("accessToken");
  } catch (error) {
    throw new Error("An error occurred during logout.");
  }
}
