import React from 'react'

function Salaryprocess() {
  return (
    <div className='container-fluid bg-light vh-100'><br></br>
        <div className='container-fluid bg-white '>
    <div className='row my-2 g-3'>
    <div className='row'>
       <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Year</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>2022</option>
               </select>
               </div>
               </div></div>

               <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Month upto</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>March</option>
               </select>
               </div>
               </div></div>
               
               <div className='col-3'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Company</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>ITPS TECH INFO PVT LTD</option>
               </select>
               </div>
               </div></div>
               <div className='col-3 py-4'>
            <button className='fillter  bg-dark text-white'>Fillter</button></div></div>
        </div>
        </div><br></br>

        <div className='container-fluid'>
             <div className='Row'>
                <div className='col fs-3 .text-dark'>
                     Salary Process
                </div>
             </div><br></br>

             <div className='row'>
             <div className='col-3'>
             <span>show<button className='border'>10</button>entries</span>
         </div>
         <div className='search col-9'>
           <span>Search:</span>
           <input className='border'type='search' class='text' />
         </div>
             </div>
        </div><br></br>
        
        <div className='row'>
        <table class="table table-hover">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Employee Name</th>
        <th>Emp code</th>
        <th>Gross Salary</th>
        <th>Emp salary Type</th>
        <th>Company Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Caroline</td>
        <td>IND000057</td>
        <td></td>
        <td></td>
        <td>ITPS TECH INFO PVT LTD</td> 
      </tr>
      <tr>
        <td>2</td>
        <td>Kalaiarasi</td>
        <td>IND000053</td>
        <td></td>
        <td></td>
        <td>ITPS TECH INFO PVT LTD</td> 
      </tr>
      </tbody>
      </table>
        </div>
        </div>
  )
}

export default Salaryprocess