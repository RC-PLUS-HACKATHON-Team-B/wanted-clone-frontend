import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RedirectURL from "./pages/RedirectURL.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <GoogleOAuthProvider clientId="941801421178-0b8des5e4usca0hh7nuhr6qesnts8cll.apps.googleusercontent.com">
            <Login />,
          </GoogleOAuthProvider>
        ),
      },
      {
        path: "redirect",
        element: <RedirectURL />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
