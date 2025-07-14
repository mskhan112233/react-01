// import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home'; 
import './App.css';
import Nave from './nave';
import About from './about';

function App() {
  return (
    <div className="App">
      <h1>Muhammad Shoaib</h1>
       <Nave />
       <About />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
