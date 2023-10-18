import React from 'react'
import './List.css'
function List() {
  return (
    <div className='container-fluid'>
     <div className='row my-2 g-3'>
     <div className='fs-4'>Employees List</div><br></br>
     <div className='col-2 '>
     <h6>Company</h6>
     <div>
        <select className='text-select ' style={{width:'100%'}}>
                  <input id='names' class='input-text' type='text' name=''/>
                  <option>All</option>
                  </select>
                  </div>    
     </div>
      <div className='col-2'>
          <button className='fillter bg-dark text-white'>Fillter</button>
      </div>
      <div className='row'>
         <div className='col-3'><br></br><br></br>
             <span>show<button className='border'>10</button>entries</span>
         </div>
         <div className='search col-9'>
           <span>Search:<input className='border' type='search' class='text' /></span>
         </div>
      </div>
      <div className='row'>
      <table class="table table-hover">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Profile</th>
        <th>Join Date</th>
        <th>Emp No</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Designation</th>
        <th>Email/Mobile</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Profile</td>
        <td>09-08-2021</td>
        <td>IND000055</td>
        <td>Vishal</td>
        <td><button className='bg-info border'>M</button></td>
        <td>Pre-sales Executive</td>
        <td>sales@itpstect.com<br></br>9585852619</td>
        <td>sales</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Profile</td>
        <td>16-08-2021</td>
        <td>IND000058</td>
        <td>Dinesh Anand</td>
        <td><button className='bg-info border'>M</button></td>
        <td>Senir Engineer</td>
        <td>hr@itpstect.com<br></br>9327627738</td>
        <td>sales</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Profile</td>
        <td>04-08-2021</td>
        <td>IND000054</td>
        <td>Divya</td>
        <td><button className='bg-success border'>F</button></td>
        <td>Pre-sales Executive</td>
        <td>sales@itpstect.com<br></br>8364773299</td>
        <td>sales</td>
      </tr>
    </tbody>
  </table>
      </div>
     </div>
     </div>
  )
}

export default List