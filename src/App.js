// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Footer from './components/Footer'; 
import Contact from './components/Contact';
import OurProcess from './components/OurProcess';
import OurProcessMobile from './components/OurProcessMobile';
import Team from './components/team';
import Expertise from './components/Expertise';
import Approach from './components/Approach';

import './App.css';  

const App = () => { 
  
  return ( 
     <Router> 
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path='/approach' element={<Approach />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/our-process" element={<OurProcess />} /> */}
          <Route path="/our-process" element={window.innerWidth <= 768 ? <OurProcessMobile /> : <OurProcess />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />  
    </Router> 
  );
};

export default App;
