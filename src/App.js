import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./componets/Login/login";
import Dash from "./pages/Dashboard/dash";
import Emproutes from  "./pages/Employees/EmployeeCreate/Emproutes";
import RoutesList from "./pages/Employees/Employee List/RoutesList";
import Empimportroutes from './pages/Employees/Employee Imports/Empimportroutes'
import Awardroutes from "./pages/Employees/Awards List/Awardroutes";
import Notice from "./pages/Employees/Notice List/Notice";
import Attendanceimport from './pages/Attendance/Attendance Import/Attendanceimport'
import Manualpunching from "./pages/Attendance/Manual Punching/Manualpunching";
import LeaveApplication from './pages/Attendance/Leave Application/LeaveApplication'
import Absentsdetails from './pages/Attendance/Absents Details/Absentsdetails'
import Attendanceverification from './pages/Attendance/Attendance verification/Attendanceverification'
import Payslip from './pages/Payroll/Payslip/payslip'
import Salarysetup from './pages/Payroll/Salary Setup/Salarysetup'
import Salaryprocess from './pages/Payroll/Salary process/Salaryprocess'
import Employeelone from './pages/Payroll/Employee Loan/Employeelone'
import Addlone from "./pages/Payroll/Employee Loan/Addlone";
import Employeeconveyance from './pages/Payroll/Employee Conveyance/Employeeconveyance'
import Taxupload from './pages/Payroll/Tax File upload/Taxupload'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/Dash" exact element={<Dash/>} />
          <Route path="Emproutes" exact element={<Emproutes/>} />
          <Route path="RoutesList" exact element={<RoutesList/>} />
          <Route path="Empimportroutes" exact element={<Empimportroutes/>} />
          <Route path="Awardroutes" exact element={<Awardroutes/>} />
          <Route path="Notice" exact element={<Notice/>} />
          <Route path="Attendanceimport" exact element={<Attendanceimport/>} />
          <Route path="Manualpunching" exact element={<Manualpunching/>} />
          <Route path="LeaveApplication" exact element={<LeaveApplication/>} />
          <Route path="Absentsdetails" exact element={<Absentsdetails/>} />
          <Route path=" Attendanceverification" exact element={<Attendanceverification/>} />
          <Route path="payslip" exact element={<Payslip/>} />
          <Route path="Salarysetup" exact element={<Salarysetup/>} />
          <Route path="Salaryprocess" exact element={<Salaryprocess/>} />
          <Route path="Employeelone" exact element={<Employeelone/>} />
          <Route path="Addlone" exact element={<Addlone/>} />
          <Route path="Employeeconveyance" exact element={<Employeeconveyance/>} />
          <Route path="Taxupload" exact element={<Taxupload/>} />
          <Route path="" exact element={<a/>} />
           
        </Routes>
        
      </BrowserRouter>
       
    </div>
  );
};

export default App;
