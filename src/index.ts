import { createPortal } from "react-dom";

import { app } from "./app.js";

const root = document.getElementById("root");

createPortal(app(), root);
