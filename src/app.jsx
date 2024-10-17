import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthCard from './components/AuthCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<AuthCard type="signup" onSubmit={() => {}} />} />
        <Route path="/login" element={<AuthCard type="login" onSubmit={() => {}} />} />
      </Routes>
    </Router>
  );
}

export default App;
