import React from 'react'
import Link from 'next/link'
const StartHero = () => {
    return (
        <div className="hero min-h-screen sm:bg-fixed starting-hero" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 card "> Welcome to Agave Green Land Scapes the Hightest qualty Land Scaping in the North Bay.
 </p>
            <Link href="/Photogallery" className="btn btn-primary">See Gallary </Link>
          </div>
        </div>
      </div>  
    )
}

export default StartHero
