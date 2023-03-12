import React from 'react'
import mainimage from '../../public/starting.webp'
import pagen from '../../public/image (1).webp'
import pagess from '../../public/unnamed (3).jpg'
import pages1w from '../../public/unnamed (7).jpg'
import pages2w from '../../public/unnamed (4).jpg'
import pages3w from '../../public/gravelphoto.webp'
import pages4w from '../../public/unnamed (5).jpg'
import pages5w from '../../public/unnamed (2).jpg'
import pages6w from '../../public/floor.webp'
import pages7w from '../../public/unnamed (8).jpg'
import pages8w from '../../public/IMG_0669.webp'
import pages9w from '../../public/image.webp'
import Image from 'next/image'
const Photogallery = () => {
  return (
    <div className='w-full h-full grid rounded-sm  my-2  gap-4 md:grid-cols-3 '>
        <Image alt="napa yard" className='card w-full h-full'  
        width={300} height={300} src={mainimage.src}/>
        <Image alt="napa yard" className='card w-full h-full'  
        width={300} height={300} src={pages4w.src}/>
        <Image alt="napa yard" className='card w-full h-full'  
        width={300} height={300} src={pagen.src}/>
        <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={300} height={300} src={pagess.src}/>
         <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={300} height={300} src={pages1w.src}/>
         <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={300} height={300} src={pages2w.src}/>
         <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={300} height={300} src={pages3w.src}/>
        <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={300} height={300} src={pages5w.src}/>
        <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={500} height={500} src={pages6w.src}/>
        <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={500} height={500} src={pages7w.src}/>
        <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={500} height={500} src={pages8w.src}/>
        <Image alt="Sonoma yard" className='card  w-full h-full'  
        width={500} height={500} src={pages9w.src}/>
    </div>
  )
}

export default Photogallery