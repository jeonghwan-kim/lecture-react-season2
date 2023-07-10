import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const { worker } = require("../../shared/mocks/browser");
worker.start({
  onUnhandledRequest: "bypass",
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
