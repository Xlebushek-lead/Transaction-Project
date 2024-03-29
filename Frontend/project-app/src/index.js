import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SaveInputProvider } from "./provider/SaveInputProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SaveInputProvider>
    <App />
  </SaveInputProvider>
);
