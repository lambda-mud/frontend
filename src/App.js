import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/ProtectedRoute';
import NavBar from './components/Header/NavBar';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/log-in' component={Login} />
      </Router>
    </div>
  );
}

export default App;
