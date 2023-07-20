import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage}/>
      </Routes>
    </Router>
  );
}

export default App;
