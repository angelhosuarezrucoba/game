import React from "react";
import ReactDOM from "react-dom/client";
import {ApplicationContext} from "./context/store";
import {Router} from "./routes/routes";
import "./assets/css/styles.scss";
import "./firebase/firebase"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
        <ApplicationContext>
            <Router/>
        </ApplicationContext>
    // </React.StrictMode>
);