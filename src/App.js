import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {

   const getAPI = async () => {
    
    try {
     
      const res = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion',{
      
        headers: {
          'Content-Type' : 'application/json',
          'x-mejor-key' : 'unycos'
        }

      });
      
      console.log(res.data.spotlights);

    } catch (error) {
     
    }
  };

  useEffect(() => {
    getAPI();
  }, [])
  
  return (
    
    <div className="App">
      something
    </div>
  );
}

export default App;
