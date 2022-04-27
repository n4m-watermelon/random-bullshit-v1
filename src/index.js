import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import Background from "./components/Background";
import Toggle from "./components/ThemeToggle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className="fixed right-0 bottom-0 mr-4 mb-4 md:mr-6 md:mb-6">
          <Toggle />
        </div>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
