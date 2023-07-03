import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./ROUTER/Router.jsx";
import AuthProvider from "./firebase/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto bg-black">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
