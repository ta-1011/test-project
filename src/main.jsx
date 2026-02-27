import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NewsList from "./NewsList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsList />
  </StrictMode>
);
