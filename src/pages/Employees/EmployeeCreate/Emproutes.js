import React from 'react'
import CreateEmployees from  './CreateEmployees'
import Form from './Form';
function Emproutes() {
  return (
    <div className='container-fluid bg-light min-vh-100'>
      <div className='row'>
       <div className='col bg-white vh-100'>
          <CreateEmployees/>
          <Form/>  
       </div>
       </div>
     </div>
  )   
}

export default Emproutes;