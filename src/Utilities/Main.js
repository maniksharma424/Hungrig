import React, { StrictMode } from "react";
import ReactDom from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import { MyRouter } from "./MyApp";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<StrictMode><RouterProvider router={MyRouter}/></StrictMode>)