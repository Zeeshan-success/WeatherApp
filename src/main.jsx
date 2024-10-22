import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import citystore from "../store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={citystore}>
      <App />
    </Provider>
  </StrictMode>
);
