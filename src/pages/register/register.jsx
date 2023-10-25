import React from 'react';
import { Link } from "react-router-dom";
import './register.css';

const Registration = () => {
  return (
    <div className='container center'>
      <fieldset>
      <legend> New User<i class="fa-solid fa-person-circle-plus"></i></legend>
      <table>
        <tr>
            <th> Full Name: </th>
            <td> <input type="text"  className='input-field'/> </td>
        </tr>
        <tr>
            <th> E-mail : </th>
            <td> <input type="text"  className='input-field'/> </td>
        </tr>
        <tr>
            <th> Mobile : </th>
            <td> <input type="text"  className='input-field'/> </td>
        </tr>
        <tr>
            <th> Create Password: </th>
            <td> <input type="password"  className='input-field'/> </td>
        </tr>
        <tr>
            <th> Confirm Password: </th>
            <td> <input type="text"  className='input-field'/> </td>
        </tr>
        <tr>
            <td colSpan={2} align='center'> <button className='registerButton'> Register </button> </td>
        </tr>
        <tr>
            <td colSpan={2} align='center'> Aredy have <Link to='./login'> Login </Link> </td>
        </tr>
      </table>
      </fieldset>
      
      
    </div>
  )
}

export default Registration;
