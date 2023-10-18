import React from 'react'
import './Create.css'
function CreateEmployees() {
  return (
    <div className='container-fluid'>
     <div className='row my-2 g-3'>
        <div className='fs-4'>Create Employees</div><br></br>
        <div id='rect1' className=' rect1 col-2 '>
           <center className='mt-3 '><span className='fs-5 '>Step 1</span></center>
           <center><h6>Basic Details</h6></center>
       </div> 
            <div  className='rect1 col-2'>
            <center className='mt-3'><span className='fs-5 '>Step 2</span></center>
           <center><h6>Education Qualification</h6></center>
       </div>
            <div className='rect1 col-2'>
            <center className='mt-3'><span className='fs-5 '>Step 3</span></center>
           <center><h6>Work Experience</h6></center>
          
          </div> 
            <div className='rect1 col-2'>
            <center className='mt-3'><span className='fs-5 '>Step 4</span></center>
           <center><h6>Bank Details</h6></center>
         </div>
            <div className='rect1 col-2'>
            <center className='mt-3'><span className='fs-5 '>Step 5</span></center>
           <center><h6>proof Details</h6></center>
       </div> 
         
        </div>
        </div>
  )
}

export default CreateEmployees