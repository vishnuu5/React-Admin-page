import React from 'react'
import './Foms.css'
function Form() {
  return (
    <section>
    <div className='container-fluid'>
       <div className='row my-2 g-3'>
          <div className='contact-form col-6'>
               <div className='form-field'>
               <label id='names' className='label px-2 ' for='name'>Emp No</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
               <div className='form-field'>
               <label id='names' className='label' for='name'>Card NO(8 digit only)</label>
                  <input  class='input-text'maxLength={'8'} type='text' name=''/>
               </div>
               <div className='form-field'>
               <label id='names' className='label' for='name'>Full Name</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
               <div className='form-field'>
               <label id='names' className='label' for='name'>Father Name</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
               <div className='form-field'>
               <label id='names' className='label' for='name'>Email</label>
                  <input  class='input-text' type='text' name=''/>
               </div>
          
          </div>

          <div className='contact-form col-6'>
          <div className='form-field'>
               <label className='label' for='name'>Present Address</label>
                  <textarea className='address'><input  class='input-text' type='text'/></textarea>
               </div>
               <div className='form-field'>
               <label id='names'className='label' for='name'>Present Address</label>
               <textarea className='address '><input id='names' class='input-text' type='text'/></textarea>
               </div>
               <div className='form-field'>
               <label id='names'className='label' for='name'>City</label>
               <div><select className='text-select ' style={{width:'100%'}}>
                  <input id='names' class='input-text' type='text' name=''/>
                  <option>Choose a city</option>
                  </select>
                  </div>
               </div>
               <div className='form-field'>
               <label id='names'className='label' for='name'>Pincode</label>
                  <input id='names' class='input-text' type='text' name=''/>
               </div>
               <div className='form-field'>
               <label id='names'className='label' for='name'>Company Name</label>
               <div><select className='text-select ' style={{width:'100%'}}>
                  <input id='names' class='input-text' type='text' name=''/>
                  <option>Choose a Company</option>
                  </select>
                  </div>
               </div>
          
          </div>
          
       </div>
    </div>
    </section>
  )
}

export default Form