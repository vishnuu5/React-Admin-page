import React from 'react'

function LeaveApplication() {
  return (
    <div className='container-fluid bg-light vh-100'>
    <div className='row my-2 g-3'>
    <div className='fs-2 col-10'> Leave Application List</div>
      <div className='col-2 d-flex justify-contant-end p-3'>
        <button className='mx-2 px-3 bg-dark text-white'>Add  Leave Application</button></div>
        <div className='row'>
            <div className='col-3'>
            <div className='form-field'>
               <label  className='label px-2 ' for='name'>Date Form</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
            </div>
            <div className='col-3'>
            <div className='form-field'>
               <label className='label px-2 ' for='name'>Date to</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
            </div>
            <div className='col-2'>
            <button className='fillter bg-dark text-white'>Fillter</button>
            </div> 
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
        </div>

        <div><br></br>
        <div className='row'>
      <table class="table table-hover">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Employee Name</th>
        <th>Emp code</th>
        <th>card No</th>
        <th>Department</th>
        <th>From date</th>
        <th>To date</th>
        <th>No days Leave</th>
        <th>Leave Type</th>
        <th>Leave Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Thamaraiselvan</td>
        <td>3THA</td>
        <td>3232432</td>
        <td>Account</td>
        <td>09/03/2021</td>
        <td>09/03/2021</td>
        <center><td>1</td></center>
        <td>Casual Leave</td>
        <td><button className='border-success text-success '>Approved</button></td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Thamaraiselvan</td>
        <td>3THA</td>
        <td>3232432</td>
        <td>Account</td>
        <td>19/04/2021</td>
        <td>19/04/2021</td>
        <center><td>1</td></center>
        <td>Slick Leave</td>
        <td><button className='border-success text-success '>Approved</button></td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      
    </tbody>
  </table>
      </div></div>
  
       </div>
       </div>
  )
}

export default LeaveApplication