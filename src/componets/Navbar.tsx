import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import {TbPlant2} from 'react-icons/tb'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-opacity-60 fixed top-0 z-50 ">
    <div className="navbar-start">
      <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm"><FaPhoneAlt className="m-2"/>(707) 703-3660</a>    
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Contact us!</a></li>
        <li>
          <a>Project gallary</a>
        </li> 
        <li>
          <a>Testimonials</a>
        </li>   
      </ul>
    </div>
    <div className="navbar-end">
    <TbPlant2 size={40} className="text-primary "/>
    <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Contac us!</a></li>
          <li>
            <a className="justify-between">
              Project gallary
            </a>
          </li>
          <li><a>Testimonials</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar