import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Render from './component/Render'
import LoginHeader from './component/header';
createRoot(document.getElementById('header')).render(
    <StrictMode>
        <LoginHeader></LoginHeader>
    </StrictMode>
);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Render/>
    </StrictMode>
);