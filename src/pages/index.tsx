import Head from 'next/head'
import { useRef } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '@/componets/Navbar'
import StartHero from '@/componets/StartHero'
import ValuesHeros from '@/componets/ValuesHeros'
import Testimonial from '@/componets/Testimonial'
import Footer from '@/componets/Footer'
import ContactFrom from '@/componets/ContactFrom'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Contactref = useRef(null)
  return (
    <>
      <Head>
        <title>Agave Green Land Scapes</title>
        <meta name="description" content="LandScaper in the North bay of san Farnisco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="./agavelogo.ico" />
      </Head>
      <main >
          <Navbar />
        <StartHero/>  
        <ValuesHeros/>
        <Testimonial/>
        <ContactFrom  />
        <Footer/>
        
      </main>
    </>
  )
}
