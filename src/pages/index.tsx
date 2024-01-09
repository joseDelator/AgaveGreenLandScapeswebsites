import Head from 'next/head'

import StartHero from '@/componets/StartHero'
import ValuesHeros from '@/componets/ValuesHeros'
import Testimonial from '@/componets/Testimonial'
import ContactFrom from '@/componets/ContactFrom'


export default function Home() {
  return (
    <>
      <Head>
        
        <meta name="description" content="Landscaper in the North bay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta name="google" content="Agave Green Landscapes is quality
         landscaper in Sonoma county, Napa county and Marin county" />
        <link rel="icon" href="./agavelogo.ico" />
      </Head>
      <main >
        <StartHero/>
        <Testimonial/>
        <ValuesHeros/>
        <ContactFrom/>
      </main>
    </>
  )
}
