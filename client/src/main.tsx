import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import Layout from "@/app/layout";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
