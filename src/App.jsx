
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";

import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import SignUp from "./pages/Auth/SignUP";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route (decides where to go based on login status) */}
        <Route path="/" element={<Root />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  );
};

export default App;

// ✅ Root Redirect Logic
const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect based on authentication status
  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
