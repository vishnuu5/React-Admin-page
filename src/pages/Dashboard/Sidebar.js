import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    
  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2 fs-2'>
        <span>Dashboard</span>
      </div>
      <div className='list-group list-group-flush dropdown'> 
        <a className='list-group-item list-group-item-action py-2'>
            <i className='fa fa-tv fs-5 me-3'></i>
            <spam className='fs-5'> Dashboard</spam>
        </a>
          <a className='list-group-item list-group-item-action py-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-users fs-5 me-3'></i>
            <spam className='fs-5'> Employees</spam>
        </a>
        <ul class="dropdown-menu">
        <Link className='emplist'to='/Emproutes'><li><a class="dropdown-item" href="#" >Employee Create</a></li></Link>
        <Link  className='emplist'to='/RoutesList'><li><a class="dropdown-item" href="#">Employee List</a></li></Link>
        <Link  className='emplist'to='/Empimportroutes'><li><a class="dropdown-item" href="#">Employee Imports</a></li></Link>
        <Link className='emplist'to='/Awardroutes'><li><a class="dropdown-item" href="#">Awards List</a></li></Link>
         <Link  className='emplist'to='/Notice'><li><a class="dropdown-item" href="#">Notice List</a></li></Link>
         </ul>
        <a className='list-group-item list-group-item-action py-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-hand fs-5 me-3'></i>
            <spam className='fs-5'> Attendance</spam>
        </a>
        <ul class="dropdown-menu">
        <Link  className='emplist'to='/Attendanceimport'><li><a class="dropdown-item" href="#">Attendance Import</a></li></Link>
        <Link  className='emplist'to='/Manualpunching'><li><a class="dropdown-item" href="#">Manual Punching</a></li></Link>
        <Link  className='emplist'to='/LeaveApplication'><li><a class="dropdown-item" href="#">Leave Application</a></li></Link>
        <Link  className='emplist'to='/Absentsdetails'><li><a class="dropdown-item" href="#">Absents Details</a></li></Link>
        <Link  className='emplist'to='/ Attendanceverification'><li><a class="dropdown-item" href="#">Attendance verification</a></li></Link>
         </ul>
        <a className='list-group-item list-group-item-action mp-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-bookmark fs-5 me-3'></i>
            <spam className='fs-5 mx-2'> Payroll</spam>
        </a>
        <ul class="dropdown-menu">
        <Link  className='emplist'to='/payslip'><li><a class="dropdown-item" href="#">Payslip</a></li></Link>
        <Link  className='emplist'to='/Salarysetup'><li><a class="dropdown-item" href="#">Salary Setup</a></li></Link>
        <Link  className='emplist'to='/Salaryprocess'><li><a class="dropdown-item" href="#">Salary process</a></li></Link>
        <Link  className='emplist'to='/Employeelone'><li><a class="dropdown-item" href="#">Employee Loan</a></li></Link>
        <Link  className='emplist'to='/Employeeconveyance'><li><a class="dropdown-item" href="#">Employee Conveyance</a></li></Link>
        <Link  className='emplist'to='/Taxupload'><li><a class="dropdown-item" href="#">Tax File upload</a></li></Link>
         </ul>
        <a className='list-group-item list-group-item-action py-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-book fs-5 me-3'></i>
            <spam className='fs-5'> Reports</spam>
        </a>
        <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="#">Attendance</a></li>
         <li><a class="dropdown-item" href="#">Monthly salary</a></li>
         <li><a class="dropdown-item" href="#">Payslip Bulk Download</a></li>
         <li><a class="dropdown-item" href="#">Salary Deduction Details</a></li>
         <li><a class="dropdown-item" href="#">Yearly Salary</a></li>
         </ul>
        <a className='list-group-item list-group-item-action py-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-globe fs-5 me-3'></i>
            <spam className='fs-5'> Job</spam>
        </a>
        <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="#">Candidate Create</a></li>
         <li><a class="dropdown-item" href="#">Candidates List</a></li>
         <li><a class="dropdown-item" href="#">Job Application List</a></li>
         <li><a class="dropdown-item" href="#">Job Openings List</a></li>
         <li><a class="dropdown-item" href="#">Trainings List</a></li>
         </ul>
        <a className='list-group-item list-group-item-action py-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-cube fs-5 me-3'></i>
            <spam className='fs-5'> Masters</spam>
        </a> 
         <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="#">Branch</a></li>
         <li><a class="dropdown-item" href="#">City</a></li>
         <li><a class="dropdown-item" href="#">Company</a></li>
         <li><a class="dropdown-item" href="#">Conveyance</a></li>
         <li><a class="dropdown-item" href="#">Department</a></li>
         <li><a class="dropdown-item" href="#">department Assign</a></li>
         <li><a class="dropdown-item" href="#">Designations</a></li>
         <li><a class="dropdown-item" href="#">Holidays</a></li>
         <li><a class="dropdown-item" href="#">Leave</a></li>
         <li><a class="dropdown-item" href="#">Location</a></li>
         <li><a class="dropdown-item" href="#">Qualification</a></li>
         <li><a class="dropdown-item" href="#">Sources</a></li>
         </ul>
        <a className='list-group-item list-group-item-action py-2 dropdown-toggle' data-bs-toggle='dropdown'>
            <i className='fa fa-database fs-5 me-3'></i>
            <spam className='fs-5'> App Masters</spam>
        </a>
        <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="#">Add Users</a></li>
         <li><a class="dropdown-item" href="#">Common setting</a></li>
         <li><a class="dropdown-item" href="#">List of users</a></li>
         <li><a class="dropdown-item" href="#">Roles</a></li>
         </ul>
      </div>
      
    </div>
   
  )
}

export default Sidebar;