import React from 'react'
import{Link} from 'react-router-dom'
function Employeeconveyance() {
  return (
    <div className='container-fluid bg-light vh-100'>
    <div className='row my-2 g-3'>
    <div className='fs-2 col-10 text-dark'>Employee conveyance List</div>
      <div className='col-2 d-flex justify-contant-end p-4'>
        <Link to='/Addlone'><button className='mx-3 py-2 px-2 bg-dark text-white 'type='button'>Add conveyance</button></Link></div>
        
            <div><br></br>
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
        <th>Company Name</th>
        <th>conveyance Date</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Caroline</td>
        <td>ITPS TECH INFO PVT LTD</td>
        <td>11/04/2021</td>
        <td>600</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      </tbody>
      <thead>
      <tr>
        <th>S.No</th>
        <th>Employee Name</th>
        <th>Comp Name</th>
        <th>conveyance Date</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
  </table>
      </div></div>

      <div className='row'>
        <div className='col-9'>
          <div  className=' mx-1 pt-3'> <span>Showing 1 to 2 of 2 entries</span></div>
        </div>
        <div className='col-3'>
        <ul class="pagination  mx-5 py-3 px-5">
            <li class="page-item "><a class="page-link" href="#">Previous</a></li>
            <li class="page-item "><a class="page-link text-white border rounded bg-dark" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
         </ul>
        </div>

      
       </div>
       </div>
  )
}

export default Employeeconveyance