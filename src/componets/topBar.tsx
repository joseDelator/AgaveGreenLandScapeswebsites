import React from 'react'
import {TbPlant2} from 'react-icons/tb'
function TopBar() {
  return (
    <div className="navbar bg-neutral text-neutral-content "> 
    <div className='navbar-start'></div>
    <div className="navbar-center ">
    <div className="  text-xl">Agave Green Landscapes</div>
   
    <TbPlant2 size={40} className="text-primary  p-1"/>
    </div>
    <div className='navbar-start'></div>

  </div>
  )
}

export default TopBar