import React from 'react'
import './course.css'

const Course = ({description, title, image}) => {
    console.log({title});
   
    // const slideImage = {
    //   backgroundImage: `url(${image})`,
    //   backgroundSize: 'cover',
    //   width: '50px',

    // }

  return (


    <article className='course'>
       
        <img src={image} alt={title} />
        
    </article>
  )
}

export default Course