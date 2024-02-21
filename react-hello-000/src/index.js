import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// index.js 는 1개만 import 한다.

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
