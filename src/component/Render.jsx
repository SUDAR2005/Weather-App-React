import { StrictMode, useState } from 'react';
import LoginCard from './login-card';
import SignUpCard from './signup-card';
import Button from './button';
import '../style/render.css'
function Render() {
    const [activePage, setActivePage]=useState('login');

    function changePage(pageValue) {
        setActivePage(pageValue);
        console.log("Changed to " + pageValue);
    }
    return (
        <StrictMode>
            <div id="switch">
                <Button act={() => changePage('login')} value='Login'  size='30px'/>
                <Button act={() => changePage('signup')} value='Signup' size='30px'/>
            </div>
            <div id="main">
                {activePage === 'login' && <LoginCard />}
                {activePage === 'signup' && <SignUpCard />}
            </div>
        </StrictMode>
    );
}

export default Render;
