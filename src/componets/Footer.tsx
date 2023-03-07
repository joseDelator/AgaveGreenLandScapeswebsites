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
    <a href="https://www.google.com/search?q=agave+green+landscapes&sxsrf=AJOqlzVl5Y5TysRBkwBbG
                        DhB5amoDJcphA%3A1677558555293&source=hp&ei=G4P9Y66YD6qC0PEPheKH4Ag&iflsig=AK50M_UAAAAAY_2RKw8LKpc3uTHK1t6YGaZGIn
                        QUfU9A&oq=aga&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIECCMQJzIICC4QsQMQkQIyBQguEJECMgsILhCDARCxAxCABDILCC4Q1AIQs
                        QMQgAQyCAguEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQM6BAguECc6EQguEIAEELEDEIMB
                        EMcBENEDOgsILhCABBCxAxCDAToFCC4QgAQ6BQgAEJECUABY-QJgtgxoAHAAeACAAWmIAaUCkgEDMi4xmAEAoAEB&sclient=gws-wiz#ip=1"
                        className="btn btn-ghots"><BsGoogle size={25}/></a>
                        <a href="https://www.yelp.com/biz/agave-green-landscapes-petaluma"
                        className="btn btn-ghost"><FaYelp size={25}/></a>
    </div>
  </div>
</footer>
    )
}

export default Footer
