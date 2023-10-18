import React from 'react'

function Sum() {
  return (
    <div className='container-fluid'>
     <div className='row my-2 g-3'>
        <div className='fs-4'>Department Summary</div><br></br>
        <div className='col-3 p-2 py-4'>
        <div className=' p-5 my-3 bg-light border shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <center><small><h5 className='fs-5 px-4  '>Accounts</h5></small></center>
                <center><label className='px-5 fs-5'>1</label></center>
            </div>
            </div>
        </div>
        <div className='col-3 p-1 py-4'>
        <div id='card' className='p-5 my-3 bg-light border shadow-sm d-flex  justify-content-around align-items-center rounded'>
            <div>
            <center><h3 className='fs-5 px-4 '>Development</h3></center>
                <center><label className='px-5 fs-5'>1</label></center>
            </div>
        </div>
        </div>
        <div className='col-3 p-1 py-4'>
        <div id='card' className='p-5 my-3 bg-light border shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
            <center><h3 className='fs-5 px-4 '>Administrator</h3></center>
                <center><label className='px-5 fs-5'>1</label></center>
            </div>
        </div>
        </div>
        <div className='col-3 p-1 py-4'>
        <div id='card' className='p-5 my-3 bg-light border shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
            <center><h3 className='fs-5 px-4 '>Sales</h3></center>
                <center><label className='px-5 fs-5'>4</label></center>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Sum