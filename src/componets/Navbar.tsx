import React, { useId, useState } from 'react'
import {FaPhoneAlt} from 'react-icons/fa'

import Iconsvg from '../../public/Green Creative Growing Seed For Agriculture, Farming, Gardening Logo 2-optimized.svg'
import Link from 'next/link'
import Image from 'next/image'
Image
const Navbar = () => {
  const [Checked, setChecked] = useState(false)
  const toggle =()=>{
    setChecked(!Checked) 
  }
  return (
    <div className="navbar  bg-base-100  sticky top-0 z-50 ">
    <div className="navbar-start">
    <Link  href="/"  className="btn btn-ghost" scroll={false} >
    <div className="text-s md:text-lg">Agave Green Landscapes</div>
    <Image src={Iconsvg}  alt="Agave Green Logo" height={35} />
   </Link>
    </div>
    <div className="navbar-end ">
    <div className="drawer justify-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={Checked} onClick={toggle} />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button"> 
           <svg xmlns="http://www.w3.dorg/2000/svg" className="h-5 w-5"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>  </svg>
        </label>
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer"  aria-label="close sidebar" className="drawer-overlay"></label>
          <ul  className="menu p-4 w-80 min-h-full bg-base-200  text-base-content">
            <li className='text-center items-center' aria-label="close sidebar">
            <Link    href="/"  onClick={toggle} scroll={false}>Agave Green Landscapes</Link>
            </li>
            <div className='divider divider-neutral' ></div>
            <li>
              <Link   onClick={toggle}  href="/#Contact" scroll={false}>Contact us!</Link>
            </li>
            <div className='divider' ></div>
            <li>
              <Link onClick={toggle}   href="/OurProcess" >Our Process</Link>
            </li> 
            <div onClick={toggle} className='divider '></div>
            <li>
              <Link onClick={toggle} href="/#testimonial"  scroll={false}>Testimonials</Link>
            </li>
            <div className='divider ' ></div>
            <li>
              <h2  onClick={toggle} className=" flex items-center gap-4 px-1.5"><span className="">
           </span> Services</h2> 
           <ul>
            <li><Link onClick={toggle}  href="/LandscapeMangment" className="group p-3" > <span>Landscape Management</span> </Link></li>
            <li><Link onClick={toggle} href="/LandScapeDesign" className="group p-3"> <span>LandScape Design</span> </Link></li>
            <li><Link onClick={toggle} href="/LandscapeContruction" className="group p-3"> <span>Landscape Contruction</span> </Link></li>
            </ul> 
            </li>
            
            <div className='divider ' ></div>
  <a href="tel:+1-707-703-3660" className="btn btn-ghost underline normal-case text-sm p-1 m-1">
    <FaPhoneAlt className="m-2"/>(707) 703-3660</a>  
  <a href="mailto:agavegreenlandscapes@gmail.com" className="btn btn-ghost normal-case underline p-1 text-sm">
    Agavegreenlandscapes@gmail.com</a>
          </ul>  
            
  </div>
  
</div>
    </div>
  </div>
  
  )
}

export default Navbar