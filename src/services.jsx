// eslint-disable-next-line no-unused-vars
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/header";
import Services from "./component/service-card";

createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Header></Header>
    </StrictMode>
);

createRoot(document.getElementById("service-list")).render(
    <StrictMode>
        <Services></Services>
    </StrictMode>
);
