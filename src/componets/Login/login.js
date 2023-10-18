import React from 'react'
import './login.css'
import logo from './remove.png'
import { Link } from 'react-router-dom'
import {useState} from 'react'


function Login() {
    const [data,setData] = useState({
      Email : 'user',
      password : 'user@123',
    })
    const{Email,password} = data;
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
    return (
      <div className='container'>
        <form className='form' onSubmit={submitHandler}>
          <div className='left'>
            <div className='img'><img src={logo} height='100'/></div>
            <h2>Login form</h2>
          <input type='Email' className='box'  placeholder='enter Email ' name='Email' value={Email} onChange={changeHandler}/>
          <input type='password' className='box' placeholder='enter password' name='password' value={password} onChange={changeHandler}/>
           <Link to='/dash'><botton className= 'btn   btn'>Login</botton> </Link>
         <a href='#' className='a'>Forrget password</a>
         </div>
        </form>
       </div>
       
      

    )
}

export default Login;