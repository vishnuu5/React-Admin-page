import React from 'react'

function Home() {
  return (
    <div className='container-fluid'>
     <div className='row my-2 g-3'>
        <div className='fs-4'>Dashboard</div><br></br>
        <div className='col-4 p-1 py-4'>
        <div className=' p-5 my-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <h3 className='fs-5 px-5 me-3'>Total Employees</h3>
                <label>7</label>
                <div class="progress" style={{height:'10px'}}>
                <div class="progress-bar" style={{width:'40%'}}></div>
                 </div>
            </div>
            </div>
        </div>
        <div className='col-4 p-1 py-4'>
        <div id='card' className='p-5 my-3 bg-info shadow-sm d-flex  justify-content-around align-items-center rounded'>
            <div>
                <h3 className='fs-5 px-5'>Total Present</h3>
                <label>0</label>
                <div class="progress" style={{height:'10px'}}>
                <div style={{width:'40%'}}></div>
                 </div>
            </div>
        </div>
        </div>
        <div className='col-4 p-1 py-4'>
        <div id='card' className='p-5 my-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <h3 className='fs-5 px-5'>Total Absents</h3>
                <label>7</label>
                <div class="progress " style={{height:'10px'}}>
                <div class="progress-bar bg-warning" style={{width:'40%'}}></div>
                 </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home