import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/main.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
  </React.StrictMode>
);
