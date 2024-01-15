import React from "react"; //호환성을위한거라서 써도디고 안써도댐
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
