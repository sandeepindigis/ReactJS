import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
