import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import LandPage from './Pages/LandPage';
import ProtectedDashboard from './Pages/ProtectedDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;