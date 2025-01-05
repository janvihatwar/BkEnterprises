import React from 'react';
import { createRoot } from "react-dom/client"; // Correct import for createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Get the root element from your HTML
const rootElement = document.getElementById('root');

// Create the root and render your application
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
