// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </StoreProvider>
  </BrowserRouter>
);
