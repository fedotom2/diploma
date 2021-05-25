import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes.js';
import { useAuth } from './hooks/auth.hook.js';
import { AuthContext } from './context/AuthContext.js';
import { Loader } from './components/Loader.js';

function App() {
  const { token, login, logout, userId, role, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, role);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, userId, role, isAuthenticated }}>
      <Router>
        { routes }

        <div className="error-display"></div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
