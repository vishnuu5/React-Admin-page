import React from 'react'
import './Empimp.css'
function Employeeimp() {
  return (
    <div className='container-fluid'>
     <div className='row my-2 g-3'>
     <div className='fs-4'>Employees Import</div><br></br>
     <div className='col '>
        <section>
        <div className='form-field'>
               <label id='names' className='label' for='name'>Date</label>
                  <input  class='input-text' type='text' name=''/>
               </div> <br></br>
               <div className='File-field'>
               <label id='names' className='label' for='name'>Attach Excel</label><br></br>
               <button>File</button>
               <input id='Attachfile' class='input-text' type='text' name=''/>
               </div><br></br>
               <p>Sample file formate <a className=' text-danger'><i className='fa fa-download'></i>Click here</a></p>
               <button className='mx-2 my-3 fs-4 px-5 bg-secondary text-white'>Cancel</button>
               <button className='mx-2 my-3 fs-4 px-5'>Reset</button>
               <button className='mx-2 my-3 fs-4 px-5 text-white bg-dark'>Import</button>
        </section>
     </div>
     </div>
     </div>
  )
}

export default Employeeimp