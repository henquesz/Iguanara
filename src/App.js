import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginScreen from './Screens/LoginScreen';
import LoginComponent from './Components/LoginComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
