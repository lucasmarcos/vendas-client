import { createRoot } from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import { app } from "./app.js";

const root = createRoot(document.getElementById("root"));
root.render(jsx(app, {}));
