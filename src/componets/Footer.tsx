import React from 'react'
import {TbPlant2} from 'react-icons/tb'
import {BsGoogle} from 'react-icons/bs'
import {FaYelp} from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <TbPlant2  size={55}className="text-primary"></TbPlant2>
    <p>Agave Green LandScapes<br/>Providing reliable Landscaping since 2000</p>
  </div> 
  <div>
    <span className="footer-title">Check us out on</span> 
    <div className="grid grid-flow-col gap-4">
      <a className='btn btn-ghost'><BsGoogle size={24}/></a> 
      <a className='btn btn-ghost'><FaYelp size={24}/></a>
    </div>
  </div>
</footer>
    )
}

export default Footer
