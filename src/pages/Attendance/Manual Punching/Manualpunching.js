import React from 'react'

function Manualpunching() {
  return (
    <div className='container-fluid bg-light vh-100'>
    <div className='row my-2 g-3'>
    <div className='fs-2 col-10'>Manual punching List</div>
      <div className='col-2 d-flex justify-contant-end p-3'>
        <button className='mx-2 px-3 bg-dark text-white'>Add Manual punching</button></div>
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
        <th>Punch date</th>
        <th>In Time</th>
        <th>Out Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Vivekanandan</td>
        <td>IND000052</td>
        <td>000052</td>
        <td>02/08/2021</td>
        <td>10.00</td>
        <td>03.32</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr>
        <td>1</td>
        <td>Vivekanandan</td>
        <td>IND000052</td>
        <td>000052</td>
        <td>05/08/2021</td>
        <td>10.00</td>
        <td>03.32</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr>
        <td>1</td>
        <td>Vivekanandan</td>
        <td>IND000052</td>
        <td>000052</td>
        <td>06/08/2021</td>
        <td>10.00</td>
        <td>03.32</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr>
        <td>1</td>
        <td>Vivekanandan</td>
        <td>IND000052</td>
        <td>000052</td>
        <td>07/08/2021</td>
        <td>10.00</td>
        <td>03.32</td>
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

export default Manualpunching