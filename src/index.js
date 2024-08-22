import React from "react";
import ReactDOM from "react-dom/client";  // Update this import
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports.js";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(<App />); // Render app
