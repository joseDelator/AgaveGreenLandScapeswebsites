import React from 'react'
import Link from 'next/link'
const StartHero = () => {
    return (
        <div className="hero min-h-screen sm:bg-fixed starting-hero" >
        <div className="hero-overlay bg-opacity-4"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5"> Welcome to Agave Green Landscapes the Hightest quality Land Scaping in the North Bay.
 </p>
            <Link  href="/#Contact" scroll={false} className="btn btn-accent"> Contact Us </Link>
          </div>
        </div>
      </div>  
    )
}

export default StartHero
