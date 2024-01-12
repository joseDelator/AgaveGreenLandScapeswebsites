import React from 'react'
import {TbPlant2} from 'react-icons/tb'
import { FaPhoneAlt } from 'react-icons/fa'
function TopBar() {
  return (
    <div className="navbar bg-neutral text-neutral-content hidden  md:flex"> 
    <div className='navbar-start'>
    <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm"><FaPhoneAlt className="m-2"/>(707) 703-3660</a>
    <a href="mailto:agavegreenlandscapes@gmail.com" className="btn btn-ghost normal-case text-sm">Agavegreenlandscapes@gmail.com</a>
    <div  className="btn btn-ghost normal-case text-sm"> LIC# 1060376</div>
    </div>
    <div className="navbar-center ">
   
    </div>
    <div className='navbar-end'>
   
    </div>

  </div>
  )
}

export default TopBar