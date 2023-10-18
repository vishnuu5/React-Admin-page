import React from 'react'

function Taxupload() {
  return (
    <div className='container-fluid'>
     <div className='row my-2 g-3'>
     <div className='fs-4'>Employees</div><br></br>
     <div className='col-8 '>
        <section>
        <div className='form-field'>
               <label id='names' className='label' for='name'>Year</label>
               <select className='text-select ' style={{width:'100%'}}>
                  <input  class='input-text' type='text' name=''/>
                  <option>2022</option>
               </select>
               </div> <br></br>
               <div className='form-field'>
               <label id='names' className='label' for='name'>Employee Name</label>
               <select className='text-select ' style={{width:'100%'}}>
                  <input  class='input-text' type='text' name=''/>
                  <option>VIVEKANANDAN</option>
               </select>
               </div> <br></br>
               <div className='File-field'>
               <label id='names' className='label' for='name'>Attach Excel</label><br></br>
               <button>File</button>
               <input id='Attachfile' class='input-text' type='text' name=''/>
               </div><br></br>
               <p>Sample file formate <a className=' text-danger'><i className='fa fa-download'></i>Cancel</a></p>
               <button className='mx-2 my-3 fs-4 px-5 bg-secondary text-white'>Cancel</button>
               <button className='mx-2 my-3 fs-4 px-5'>Reset</button>
               <button className='mx-2 my-3 fs-4 px-5 text-white bg-dark'>Upload</button>
        </section>
     </div>
     </div>
     </div>
  )
}

export default Taxupload