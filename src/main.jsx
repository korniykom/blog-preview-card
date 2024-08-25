import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" bg-[#F4D04E] w-dvh h-dvh flex items-center justify-center ">
      <Card />
    </div>
  </StrictMode>
);
