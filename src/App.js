import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import Slider from './components/Slider';
import ExclusiveContent from './components/Exclusive-content';



function App() { 
  
  return (
    
    <div className="App">
      <Navbar/>
      <Banner />
      <div className="slider-container">
        <Slider />
      </div>
      <ExclusiveContent />
    </div>
  );
}

export default App;
