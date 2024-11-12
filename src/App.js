// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; 

const App = () => { 
  
  return ( 
     <Router> 
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />  
    </Router> 
  );
};

export default App;
