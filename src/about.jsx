import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/header";
import About from "./component/about-component";
createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Header></Header>
    </StrictMode>
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <About/>
    </StrictMode>
);