import { StrictMode } from "react"; // Import StrictMode from React for highlighting potential problems in an application
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client for creating a root to render the React component tree
import App from "./Components/App.tsx"; // Import the App component
import "./index.css"; // Import the CSS file for styling

// Get the root element from the DOM
const container = document.getElementById("root"); // Get the HTML element with the ID 'root'

// Check if the root element exists
if (container) {
  // If the container is not null
  const root = createRoot(container); // Create a root for the React component tree
  root.render(
    // Render the React component tree into the root
    <StrictMode>
      {/* Wrap the App component in StrictMode for highlighting potential problems*/}
      <App /> {/* // Render the App component */}
    </StrictMode>
  );
} else {
  console.error("Root element not found"); // Log an error if the root element is not found
}

// {" "}
