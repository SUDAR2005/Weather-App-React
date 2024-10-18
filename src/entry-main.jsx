import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Render from './component/Render'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Render/>
    </StrictMode>
);