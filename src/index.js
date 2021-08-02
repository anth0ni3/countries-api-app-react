import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./store/Theme.context";
import APIContextProvider from "./store/API.context";
import LogicContextProvider from "./store/Logic.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <APIContextProvider>
          <LogicContextProvider>
            <App />
          </LogicContextProvider>
        </APIContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
