import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './slider.css'

const Slider = ({courses}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const {  title, description, image } = courses[currentSlide]

  return (
    <section className='Slider'>

        <div className="Slider__left">
          <img className='slider__mainImage' src={image} alt="" />
        </div>


        <div className="Slider__right">
          <h3>{title}</h3>
          <p>{description}</p>

          <div className='carrousel'>
            {courses.map((course, index) => 
                <img className='course-image' onClick={()=>setCurrentSlide(index)} key={index} src={course.image} alt="course.title" />
                )}
          </div>
        </div>


    </section>
  )
}

export default Slider