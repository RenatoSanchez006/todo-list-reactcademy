import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ItemsContextProvider } from "./context/items-context";

ReactDOM.render(
  <React.StrictMode>
    <ItemsContextProvider>
      <App />
    </ItemsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
