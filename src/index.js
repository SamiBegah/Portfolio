import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const main = ReactDOM.createRoot(document.querySelector("main"));
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
