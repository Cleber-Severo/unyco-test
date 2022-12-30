import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import Slider from './components/Slider';



function App() {

  const [courses, setCourses] = useState([]);

   const getAPI = async () => {
    
    try {
     
      const res = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion',{
      
        headers: {
          'Content-Type' : 'application/json',
          'x-mejor-key' : 'unycos'
        }

      });
      
     
      setCourses(res.data.spotlights);
    } catch (error) {
     
    }
  };

  useEffect(() => {
    getAPI();
  }, [])
  
  return (
    
    <div className="App">
      <Navbar/>
      <Banner />
      <Slider courses={courses} />
    </div>
  );
}

export default App;
