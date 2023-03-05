import Link from 'next/link'
import React from 'react'
import dsf from '../../public/IMG_0669.webp'
const ValuesHeros = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={dsf.src} className=" w-full sm:max-w-sm rounded-lg shadow-2xl" alt='Marin yard' />
          <div>
            <h1 className="text-5xl font-bold">OUR PROMISE</h1>
            <p className="py-6">Our commitment is to bring the most value to our customers.
             We set ourselves to the highest standards resulting in the best customer care and service quality. </p>
            <Link href="/#Contact" scroll={false} className="btn btn-primary">Contact us!</Link>
          </div>
        </div>
      </div>
    )
}

export default ValuesHeros
