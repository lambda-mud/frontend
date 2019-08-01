import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from './components/auth/ProtectedRoute';
import NavBar from './components/Header/NavBar';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import './App.css';
import GamePage from './components/Gamepage/GamePage.js'
import ProtectedRoute from './components/auth/ProtectedRoute'
function App() {
  return (
      <Router className="App">
        <NavBar />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/log-in' component={Login} />
        <ProtectedRoute path="/" exact component={GamePage}/>
        {/* <GamePage /> */}
      </Router>
  );
}

export default App;
