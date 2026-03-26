import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL || "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="216690250177-nai4sul9b700ivcuraa3uv6v0ogj09f2.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
