import React from 'react'
import {TbPlant2} from 'react-icons/tb'
import {BsGoogle} from 'react-icons/bs'
import {FaYelp,  FaPhoneAlt} from 'react-icons/fa'
import Link from 'next/link'
import Iconsvg from '../../public/Green Creative Growing Seed For Agriculture, Farming, Gardening Logo 2-optimized.svg'
import Image from 'next/image'
const Footer = () => {
    return (
      <>
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
  <Link  href="/"  className='btn btn-ghost'>
  <Image src={Iconsvg}  alt="Agave Green Logo"   height={55} />
    </Link>
    <p>Agave Green Landscapes<br/>Providing reliable Landscaping since 2000</p>
  </div> 
  <div>
    <span className="footer-title">Check us out on</span> 
    <div className="grid grid-flow-col gap-4">
    <a href="https://www.google.com/search?q=agave+green+landscapes&sxsrf=AJOqlzVl5Y5TysRBkwBbG
                        DhB5amoDJcphA%3A1677558555293&source=hp&ei=G4P9Y66YD6qC0PEPheKH4Ag&iflsig=AK50M_UAAAAAY_2RKw8LKpc3uTHK1t6YGaZGIn
                        QUfU9A&oq=aga&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIECCMQJzIICC4QsQMQkQIyBQguEJECMgsILhCDARCxAxCABDILCC4Q1AIQs
                        QMQgAQyCAguEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQM6BAguECc6EQguEIAEELEDEIMB
                        EMcBENEDOgsILhCABBCxAxCDAToFCC4QgAQ6BQgAEJECUABY-QJgtgxoAHAAeACAAWmIAaUCkgEDMi4xmAEAoAEB&sclient=gws-wiz#ip=1"
                        className="btn btn-accent"><BsGoogle size={25}/></a>
                        <a href="https://www.yelp.com/biz/agave-green-landscapes-petaluma"
                        className="btn btn-secondary"><FaYelp size={25}/></a>
    </div>
  </div>
  
</footer>
<footer className="footer  py-4 border-t  text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    <p><br/>Copyright © 2024 - All right reserved by Agave Green Landscapes</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
  <a href="tel:+1-707-703-3660" className="btn btn-accent normal-case text-sm"><FaPhoneAlt className="m-2"/>(707) 703-3660</a>  
  <a href="mailto:agavegreenlandscapes@gmail.com" className="btn btn-neutral normal-case text-sm">Agavegreenlandscapes@gmail.com</a>
  </nav>
</footer>

</>
    )
}

export default Footer
