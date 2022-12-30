import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import Slider from './components/Slider';
import ExclusiveContent from './components/Exclusive-content';
import MoreCourses from './components/MoreCourses';


function App() { 

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

   const getAPI = async () => {
    
    try {
     
      const res = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion',{
      
        headers: {
          'Content-Type' : 'application/json',
          'x-mejor-key' : 'unycos'
        }

      });
      
     
      setCourses(res.data.spotlights);
      setLoading(false)
    } catch (error) {
     
    }
  };

  useEffect(() => {
    getAPI();
  }, [])
  

  if(loading) {
    return <h2>Loading ...</h2>
  }


  return (
    
    <div className="App">
      <Navbar/>
      <Banner />
      <div className="slider-container">
        <Slider courses={courses} />
      </div>
      <ExclusiveContent />
      <MoreCourses />
    </div>
  );
}

export default App;
