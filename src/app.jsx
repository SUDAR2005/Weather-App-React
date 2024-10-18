import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header'; // Import your Header component
import AuthCard from './components/AuthCard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {/* Pass state to Header */}
      <Routes>
        <Route path="/signup" element={<AuthCard type="signup" onSubmit={() => setIsLoggedIn(true)} />} />
        <Route path="/login" element={<AuthCard type="login" onSubmit={() => setIsLoggedIn(true)} />} />
      </Routes>
    </Router>
  );
}

export default App;
