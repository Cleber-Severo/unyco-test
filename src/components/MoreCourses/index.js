import React from 'react'
import './morecourses.css'

const MoreCourses = () => {
  return (
    <section className='moreCourses'>
        <h2 className='moreCourses__title'>MÁS CURSOS</h2>
        <div className='moreCourses__course--marcus'>
            <div className="course-info">
                <h3>Marcus Cooper</h3>
                <h4>enseña piragüismo</h4>
            </div>
        </div>
        <div className='moreCourses__course--ismael'>
            <div className="course-info">
                <h3>ISMAEL CALA</h3>
                <h4>enseña DESARROLLO PERSONAL</h4>
            </div>
        </div>
        <div className='moreCourses__course--lewis'>
            <div className="course-info">
                <h3>LEWIS AMARANTE</h3>
                <h4>enseña MAQUILLAJE</h4>
            </div>info
        </div>
    </section>
  )
}

export default MoreCourses