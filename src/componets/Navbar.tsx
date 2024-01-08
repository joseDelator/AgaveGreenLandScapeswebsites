import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import {TbPlant2} from 'react-icons/tb'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="navbar  bg-base-100  sticky top-0 z-50 ">
      
    <div className="navbar-start">
      <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm"><FaPhoneAlt className="m-2"/>(707) 703-3660</a>    
    </div>
    <div className="navbar-end ">
    <Link  href="/"  className='btn btn-ghost justify-end'>
    <TbPlant2 size={40} className="text-primary "/>
    </Link>

    <div className="drawer justify-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button"> 
           <svg xmlns="http://www.w3.dorg/2000/svg" className="h-5 w-5"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul  className="menu p-4 w-80 min-h-full bg-base-200  text-base-content">
            {/* Sidebar content here */}
            <li className='text-center'>
              Agave Green Landscapes
              
            </li>
            <div className='divider divider-neutral ' ></div>
            <li>
              <Link    href="/#Contact" scroll={false}>Contact us!</Link>
            </li>
            <div className='divider  ' ></div>
            <li>
              <Link   href="/OurProcess" >Our Process</Link>
            </li> 
            <div className='divider '></div>
            <li>
              <Link href="/#testimonial"  scroll={false}>Testimonials</Link>
            </li>
            <div className='divider ' ></div>
            <li>
              <h2 className=" flex items-center gap-4 px-1.5"><span className="">
           </span> Services</h2> 
           <ul>
            <li><Link href="/LandscapeMangment" className="group"> <span>Landscape Management</span> </Link></li>
            <li> <a href="/LandScapeDesign" className="group"> <span>LandScape Design</span> </a></li>
            <li><Link href="/LandscapeContruction" className="group"> <span>Landscape Contruction</span> </Link></li>
            </ul> 
            </li>
            <div className='divider ' ></div>
          </ul>    
  </div>
</div>
    </div>
  </div>
  
  )
}

export default Navbar