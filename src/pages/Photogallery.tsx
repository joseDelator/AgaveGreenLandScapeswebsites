import React from 'react'
import mainimage from '../../public/starting.jpg'
import pagen from '../../public/protrait.jpg'
const Photogallery = () => {
  return (
    <div className='w-full h-full  grid rounded-sm   gap-4 md:grid-cols-3 '>
        <div className='bg-primary card  md:col-span-2'> <img className='card w-full h-full' src={mainimage.src}>
            </img ></div>
        <div className='bg-primary card'><img className='card w-full h-full' src={pagen.src}/></div>
        <div className='bg-secondary card'><img className='card w-full h-full' src={mainimage.src}/></div>
        <div className='bg-primary card'>4</div>
        <div className='bg-primary card'>5</div>
        <div className='bg-primary card'>6</div>
        <div className='bg-primary card'>7</div>
        <div className='bg-primary card'>8</div>

    </div>
  )
}

export default Photogallery