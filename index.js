// src/index.js or src/main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router> {/* Wrap your app in Router */}
    <App />
  </Router>
);
