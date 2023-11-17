import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ErrorBoundary from "./pages/ErrorBoundary";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </ErrorBoundary>
);
