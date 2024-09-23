import { createPortal } from "react-dom";
import { jsx } from "react/jsx-runtime";
import { app } from "./app.js";

const root = document.getElementById("root");

createPortal(jsx(app, {}), root);
