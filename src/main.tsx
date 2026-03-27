import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics"; // 1. Add this import

// 2. Initialize Vercel Analytics
inject();

createRoot(document.getElementById("root")!).render(<App />);