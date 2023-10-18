import React from 'react'

function Addlone() {
  return (
  
     <div class="modal modal-content  modal-dialog vh-80">
     <div class="modal-header">
        <h4 class="modal-title">Add Loan</h4>
        </div>

        <div class="modal-body">
        <div className='row'>
        <div className='col-6'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Loan type</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>Choose a Loan Type</option>
               </select>
               </div>
               </div></div>

               <div className='col-6'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Loan or Advance Name</label>
            <div>
               <input id='names' class='input-text' type='text' name=''/>
               </div>
               </div></div>
        </div>
        <div className='row'>
        <div className=''>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Employee code</label>
            <div><br></br>
             <select className='text-select ' style={{width:'100%'}}>
               <input id='names' class='input-text' type='text' name=''/>
               <option>Choose a Employee</option>
               </select>
               </div>
               </div></div>

               <div className='col'>
         <div className='form-field'>
            <label id='names'className='label' for='name'>Loan Amount</label>
            <div>
               <input id='names' class='input-text' type='text' name=''/>
               </div>
               </div></div>
        </div>
        <div className='form-field'>
            <label id='names'className='label' for='name'>EMI start Date</label>
            <div>
               <input />
               </div>
               </div>
      </div>
      <div className='row'>
        <center className='mb-2'><button className='bg-dark text-white'>submit</button><button className='bg-secondary text-white mx-2'>cancel</button></center>

      </div>
      </div>

  )
}

export default Addlone