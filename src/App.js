import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import Slider from './components/Slider';



function App() { 
  
  return (
    
    <div className="App">
      <Navbar/>
      <Banner />
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  );
}

export default App;
