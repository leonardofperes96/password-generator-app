import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GeneratePasswordContextProvider } from "./contexts/generate_password_context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GeneratePasswordContextProvider>
    <App />
  </GeneratePasswordContextProvider>
);
