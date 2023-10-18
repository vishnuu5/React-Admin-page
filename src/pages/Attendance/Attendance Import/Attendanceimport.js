import React from 'react'

function Attendanceimport() {
  return (
    <div className='container-fluid'>
       <div className='row my-2 g-3'>
          <span className='fs-3'>Employee</span>
        <div className='col-9'>
            <div className='row'>
            <div className='form-field'>
               <label id='names'className='label' for='name'>Year</label>
               <div><br></br>
                <select className='text-select ' style={{width:'100%'}}>
                  <input id='names' class='input-text' type='text' name=''/>
                  <option>2022</option>
                  </select>
                  </div><br></br>
               </div>
            </div>
            <div className='row'>
            <div className='form-field'>
               <label id='names'className='label' for='name'>Month</label>
               <div><br></br>
                <select className='text-select ' style={{width:'100%'}}>
                  <input id='names' class='input-text' type='text' name=''/>
                  <option>january</option>
                  </select>
                  </div><br></br>
               </div>
            </div>
            <div className='row'>
            <div className='form-field'>
               <label id='names'className='label' for='name'>Company Name</label>
               <div><br></br>
                <select className='text-select ' style={{width:'100%'}}>
                  <input id='names' class='input-text' type='text' name=''/>
                  <option>ITPS TECH INFO PVT LTD</option>
                  </select>
                  </div><br></br>
               </div>
            </div>
            <div className='row'>
            <div className='File-field'>
               <label id='names' className='label' for='name'>Attach Excel</label><br></br><br></br>
               <button className='px-2 '>File</button>
               <input id='Attachfile' class='input-text mb-4' type='text' name=''/>
               </div>
               <p>Sample file formate <a className=' text-danger'><i className='fa fa-download'></i>Click here</a></p>
            </div>
        </div>
       </div>
       </div>
  )
}

export default Attendanceimport