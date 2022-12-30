import React from 'react'
import Course from '../Course';
import './slider.css'

const Slider = ({courses}) => {
  console.log(courses);
  console.log(courses[0].image);
  return (
    <div className='Slider'>
        <div className='carrousel'>
          {courses.map(course => 
              <Course description={course.description} title={course.title} image={course.image} />
          )}
        </div>
    </div>
  )
}

export default Slider