import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandPage from './Pages/LandPage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { AuthProvider } from './context/authcontext';
import ProtectedRoute from './Components/protectedroute';
import UnprotectedRoute from './Components/UnprotectedRoute';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route
            path="/signin"
            element={
              <UnprotectedRoute>
                <SignIn />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <UnprotectedRoute>
                <SignUp />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
                <NotFound />

            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;