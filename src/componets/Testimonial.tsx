import React from 'react'
import fss from '../../public/starting.webp'
import image from '../../public/image.webp'
import dsf from '../../public/grass.webp'
import {BsGoogle} from 'react-icons/bs'
import {FaYelp} from 'react-icons/fa'
import Testimaonalcard from './Testimaonalcard'
const Testimonial = () => {
    return (
        <div className="hero min-h-screen sm:bg-fixed "  id="testimonial">

        <div className="hero-content text-center text-neutral-content grid w-full  lg:grid-cols-3 ">
            <div className="lg:col-span-3"> 
            <p className="text-secondary text-4xl">Testimonials</p>
                    <div className="rating rating-secondary">
                        <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-secondary"  />
                        <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-secondary" checked readOnly/>'s
                    </div>
                        <p className="text-xl text-primary">on Google and Yelp </p>
                        <a href="https://www.google.com/search?q=agave+green+landscapes&sxsrf=AJOqlzVl5Y5TysRBkwBbG
                        DhB5amoDJcphA%3A1677558555293&source=hp&ei=G4P9Y66YD6qC0PEPheKH4Ag&iflsig=AK50M_UAAAAAY_2RKw8LKpc3uTHK1t6YGaZGIn
                        QUfU9A&oq=aga&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIECCMQJzIICC4QsQMQkQIyBQguEJECMgsILhCDARCxAxCABDILCC4Q1AIQs
                        QMQgAQyCAguEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQM6BAguECc6EQguEIAEELEDEIMB
                        EMcBENEDOgsILhCABBCxAxCDAToFCC4QgAQ6BQgAEJECUABY-QJgtgxoAHAAeACAAWmIAaUCkgEDMi4xmAEAoAEB&sclient=gws-wiz#ip=1"
                        className="btn btn-circle m-2 btn-info"><BsGoogle/></a>
                        <a href="https://www.yelp.com/biz/agave-green-landscapes-petaluma"
                        className="btn btn-circle btn-error"><FaYelp/></a>
                     </div>
                   
                <Testimaonalcard image={dsf.src} message={
                    <p>
                        Couldn’t be happier with the work Agava Green did on our property. 
                        Erik and Enrique were great to work with. The entire crew did a awesome job. Highly recommend!<span 
                    className="font-bold">- Matthew Woerner</span></p>} tag="New"/>     
            <Testimaonalcard image={image.src} message={ <p>
                    The redisd our whole backyard and it looks incredible. 
                    We asked them to use native plants that were drought resistant and 
                    made some tweaks along the way and they worked with us. 
                    The end result looks amazing. Hard workers and easy to work with and 
                    communicate with. Highly recommend working with them!<span 
                    className="font-bold">- Melanie Russell</span></p>} tag="New"/>  
            <Testimaonalcard image={fss.src} message={ <p>These guys are amazing! They came out quickly 
                finished our front and side yard in a day, 
                which was A LOT of work and in bad shape. Best of all it looks better 
                than it ever has. I highly recommend them and will be using them again<span 
                className="font-bold">- Sarah Hudspeth</span></p>} tag="Favorite"/>
        </div>
      </div>  
    )
}

export default Testimonial
