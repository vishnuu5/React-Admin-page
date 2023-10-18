import React from 'react'

function Attendanceverification() {
  return (
    <div className='container-fluid'>
    <div className='row my-2 g-3'>
       <span className='fs-3'>Attendance Verify</span>
       <div className='row'>
       <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Year</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>2022</option>
               </select>
               </div>
               </div></div>

               <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Month</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>March</option>
               </select>
               </div>
               </div></div>
               
               <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Company</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>select Company</option>
               </select>
               </div>
               </div></div>
               <div className='col-2 py-4'>
            <button className='fillter mx-1  bg-dark text-white'>Fillter</button>
            </div></div>
               </div>
               </div>
     
  )
}

export default Attendanceverification