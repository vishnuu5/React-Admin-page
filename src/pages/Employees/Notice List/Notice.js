import React from 'react'

function Notice() {
  return (
    <div className='container-fluid bg-light vh-100'>
    <div className='row my-2 g-3'>
    <div className='fs-2 col-10 p-2'>Notice List</div>
    <div className='col-2 p-4'>
        <div className='mx-2 px-6  '><button className='mx-2 p-2  px-6  bg-dark text-white'>Add New Notice</button></div></div>
    </div>
    <div className='row'>
            <div className='col-3'>
            <div className='form-field'>
               <label  className='label px-2 ' for='name'>Date Form</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
            </div>
            <div className='col-3'>
            <div className='form-field'>
               <label className='label px-2 ' for='name'>Date Upto</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
            </div>
            <div className='col-2'>
            <button className='fillter bg-dark text-white'>Fillter</button>
            </div> </div>
            <div className=' '><br></br>
            <div className='row' >
         <div className='col-3'>
             <span>show<button className='border'>10</button>entries</span>
         </div>
         <div className='search col-9'>
           <span>Search:</span>
           <input className='border'type='search' class='text' />
         </div>
      </div></div>
      <div><br></br>
        <div className='row p-2'>
      <table class="table table-hover">
    <thead>
      <tr><br></br>
        <th>S.No</th>
        <th>Titel</th>
        <th>Description</th>
        <th>Status</th>
        <th>Created on</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr><br></br>
        <td>1</td>
        <td>Company Innovation Award Function</td>
        <td>It is very important for the patient to be patient, and the patient will suffer from the 
          incident as a great deal of pain and suffering. For in the exercise of any kind of labor, unless some of it,
           like pain in rebuke in pleasure, wants to be a hair</td>
        <td>Active</td>
        <td>//03/08/2021</td>
        <td><button className='rounded m-1' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded m-1' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr><br></br>
        <td>2</td>
        <td>Attention: WFH User Attendance Verification</td>
          <td>It is very important for the client to be patient, and the client will be followed by
           the incident as a great deal of work and pain. As for the exercise of any kind of work,
            unless some part of it is like pain</td>
        <td>Active</td>
        <td>//03/08/2021</td>
        <td><button className='rounded m-1' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded m-1 ' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
    </tbody>
  </table>
      </div></div>
    
    </div>
    
  )
}

export default Notice