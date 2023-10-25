import React from 'react';
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
  return (
    <div className='container center'>
      <fieldset>
      <legend> Login <i class="fa-solid fa-user"></i></legend>
      <table>
        <tr>
            <th> E-mail/Mobile : </th>
            <td> <input type="text"  className='input-field'/> </td>
        </tr>
        <tr>
            <th>Password : </th>
            <td> <input type="password"  className='input-field'/> </td>
        </tr>
        <tr>
            <td colSpan={2} align='center'> <button className='logInButton'> Login </button> </td>
        </tr>
        <tr>
          <td colSpan={2} align='center'><Link to='./register'> Register </Link> </td>
        </tr>
      </table>
      </fieldset>
      
      
    </div>
  )
}

export default Login;
