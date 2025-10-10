
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUP from './pages/Auth/SignUP';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" elelemt={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUP />} />
          <Route path="/Dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
   
    </div>
  );
};
export default App

const Root = () => { 
  //check if token exits in localStorage 
  const isAuthenticated = !!localStorage.getItem("token"); 
  //Redirect to dashboard if authenticate, to otherwise to login 
  return isAuthenticated ? (
    <Navigate to="/dashboard" />

  ) : ( 
    < Navigate to="login"/>
  );
}