import React from 'react'

function Awardlist() {
  return (
    <div className='container-fluid bg-light vh-100'>
    <div className='row my-2 g-3'>
    <div className='fs-2 col-10'>Award List</div>
      <div className='col-2 d-flex justify-contant-end p-4'>
        <button className='mx-4 py-2 px-3 bg-dark text-white'>Add Awards</button></div>
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
        <th>Award Name</th>
        <th>Gift</th>
        <th>Award date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Kalairasi</td>
        <td>IND000053</td>
        <td>Best Performance</td>
        <td>Cash</td>
        <td>31/08/2021</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Divya</td>
        <td>IND000054</td>
        <td>Best Performance</td>
        <td>Dinner set</td>
        <td>31/08/2021</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
    </tbody>
  </table>
      </div></div>
      <div className='row'>
        <div className='col-9'>
          <div  className=' mx-1 pt-3'> <span>Showing 1 to 2 of 2 entries</span></div>
        </div>
        <div className='col-3'>
        <ul class="pagination  mx-5 py-3 px-5">
            <li class="page-item "><a class="page-link" href="#">Previous</a></li>
            <li class="page-item "><a class="page-link text-white border rounded" href="#"  style={{backgroundColor:'slateblue'}}>1</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
         </ul>
        </div>

      </div>
       </div>
       </div>
  )
}

export default Awardlist