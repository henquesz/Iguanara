import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginScreen from './Screens/LoginScreen';
import LoginComponent from './Components/LoginComponent';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/user/:id" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
