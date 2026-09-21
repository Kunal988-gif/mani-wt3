import React from 'react'
import './App.css'
import courses from './mockdata'
import CourseCard from './CourseCard'
const Header=()=>{
  return(
    <nav>
<a href="http://H" target="_blank" rel="noopener noreferrer">Home</a>
<a href="http://" target="_blank" rel="noopener noreferrer">About</a>
<a href="http://" target="_blank" rel="noopener noreferrer">All Courses</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Contact</a>
    </nav>
  )
}

const Body=()=>{

  return(
    <div className='course-container'>
{courses.map((course)=>{
  return <CourseCard key={course.id} coursedata={course} />
})}
    </div>
  )
}


const App=()=>{
return(
  <>
  
<Body></Body>
  </>
)
}

export default App