import Head from 'next/head'

import StartHero from '@/componets/StartHero'
import ValuesHeros from '@/componets/ValuesHeros'
import Testimonial from '@/componets/Testimonial'
import ContactFrom from '@/componets/ContactFrom'


export default function Home() {
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
        <StartHero/>  
        <ValuesHeros/>
        <Testimonial/>
        <ContactFrom  />
      </main>
    </>
  )
}
