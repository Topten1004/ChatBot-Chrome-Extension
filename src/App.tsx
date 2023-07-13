import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Navigate to="/Login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
