import React from 'react'

function payslip() {
  return (
    <div className='container-fluid'>
    <div className='row my-2 g-3'>
       <span className='fs-3'>payslip</span>
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
            <label id='names'className='label' for='name'>Month upto</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>January</option>
               </select>
               </div>
               </div></div>
               
               <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Employee</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>IND000052-VIVEKANANDAN</option>
               </select>
               </div>
               </div></div>
               <div className='col-3 py-4'>
            <button className='fillter  bg-dark text-white'>Fillter</button>
            <button className='rounded mx-4 bg-secondary'><i className='fa fa-file-pdf' style={{color:'white'}}></i><span className='text-white mx-2'>pdf</span></button>
            <button className='rounded  bg-secondary'><i className='fa fa-print' style={{color:'white'}}></i><span className='text-white mx-2'>print</span></button>
            </div> </div>
               </div>
               </div>
  )
}

export default payslip