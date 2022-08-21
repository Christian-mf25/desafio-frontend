import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Providers from "./Providers";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
