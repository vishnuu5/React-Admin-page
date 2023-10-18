import React from 'react'
import Sidebar from  './Sidebar';
import Home from './Home'
import Sum from './Sum'
function Dash() {
  return (
    <div className='container-fluid bg-light min-vh-100'>
        <div className='row'>
           <div className='col-2 bg-white vh-100'>
              <Sidebar/>
           </div>
           <div className='col-10'>
               <Home/>
               <Sum/>
           </div> 
        </div>
       
    </div>
  )
}

export default Dash;