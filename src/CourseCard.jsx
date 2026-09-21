import React from 'react'
import './CourseCard.css'

const CourseCard=({coursedata})=>{
    let prog;
    console.log(coursedata);
    
if (coursedata.progress==100) {
    prog="Completed"
}else if(coursedata.progress<100 &&coursedata.progress>0){
    prog="In Progress";
}else{
    prog="Not started";
}
return(
    <div className='course-card'>
<p>{coursedata.title}</p>
<p>{coursedata.instructor}</p>
<p>{coursedata.duration}</p>
{/* Use of conditional statement */}
<button onClick={()=>{
    while(coursedata.progress<=100){
        coursedata.progress++;
        prog=coursedata.progress;
    }
}}>Increase Progress</button>
<p>{prog}</p>

    </div>
)


}



export default CourseCard