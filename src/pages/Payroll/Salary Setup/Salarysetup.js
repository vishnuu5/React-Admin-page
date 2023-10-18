import React from 'react'

function Salarysetup() {
  return (
    <div className='container-fluid bg-light vh-100'>
    <div className='row my-2 g-3'>
    <div className='fs-2 col-10'>List of Paysetup</div>
      <div className='col-2 d-flex justify-contant-end p-3'>
        <button className='mx-2 px-3 p-2 bg-dark text-white'>Add Paysetup</button></div>
          
        <div className='row' >
         <div className='col-3'>
             <span>show<button className='border'>10</button>entries</span>
         </div>
         <div className='search col-9'>
           <span>Search:</span>
           <input className='border'type='search' class='text' />
         </div>
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
        <th>Designation</th>
        <th>Company name</th>
        <th>Salary Amt</th>
        <th>Effective Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Muthu krishnan</td>
        <td>IND00242</td>
        <td>32929009</td>
        <td>Administrator</td>
        <td>Senior Engineer</td>
        <td>ITPS TECH INFO PVT LTD</td>
        <td>26000</td>
        <td>07/04/2021</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr>
      <tr>
        <td>1</td>
        <td>Thamaraiselvan</td>
        <td>3THA</td>
        <td>3232432</td>
        <td>Accounts</td>
        <td>Senior Engineer</td>
        <td>ITPS TECH INFO PVT LTD</td>
        <td>30000</td>
        <td>06/03/2021</td>
        <td><button className='rounded' style={{backgroundColor:'rgb(82, 224, 94)'}}><i className='fa fa-pen'></i></button>
        <button className='rounded mx-3' style={{backgroundColor:'rgb(235, 121, 15)'}}><i className='fa fa-trash'></i></button></td>
      </tr> 
    </tbody>
  </table>
      </div></div>
       <div className='row'>
        <div className='col'>
          Add Paysetup
        </div>
       </div>
        
        <div className='row'>
       <div className='col-3'><br></br>
         <div className='form-field'>
            <label id='names'className='label mb-4' for='name'>Month upto</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>January</option>
               </select>
               </div>
               </div></div>
               <div className='col-3'><br></br>
         <div className='form-field'>
            <label id='names'className='label mb-1' for='name'>Month upto</label>
               <div className='my-3 m-2'>  
                <span>January</span>
               <input id='names' class='input-text color ' type='text' name=''/>
               </div><br></br>
               </div></div>

               <div className='row'>
                  <center><input type='radio'/><label className='mx-2'>Daywise Salary</label>
                  <input type='radio'/><label className='mx-2'>Monthly Salary</label>
                  <input type='radio'/><label className='mx-2'>Hours Based Salary</label></center>
               </div>
               
               </div>

               <div className='row'>
               <div className='col-6'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>ESI NO</label>
            <input id='names' class='input-text' type='text' name=''/>
            <div>
             </div>   
               </div>         
        </div>
        <div className='col-6'>
        <div className='form-field'>
            <label id='names'className='label' for='name'>PF NO</label>
            <input id='names' class='input-text' type='text' name=''/>
            <div></div></div>
         </div>
        </div>
        </div><br></br>
        
        <div className='row'>
        <table class="table">
    <thead>
      <tr className='table-dark'>
        <th>Addition Head</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>S.No</td>
        <td>Name</td>
        <td>Percentage</td>
        <td>Calculation</td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>
        </div><br></br>

        <div className='row'>
        <table class="table">
    <thead>
      <tr className='table-dark'>
        <th>Deduction Head</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>S.No</td>
        <td>Name</td>
        <td>Percentage</td>
        <td>Calculation</td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>
        </div>

        </div>
  )
}

export default Salarysetup