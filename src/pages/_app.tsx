import Footer from '@/componets/Footer'
import Navbar from '@/componets/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return( 
  <> <DefaultSeo
  title="Agave Green Land Scapes"
  description="Agave Green Landscapes is quality
  landscaper in Sonoma county, Napa county and Marin county"
  openGraph={{
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.url.ie/',
      siteName: 'Agave Green Landscapes',
  }}
  twitter={{
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
  }}
/>
<Head>
        <meta name="description" content="Landscape leader in the North bay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta name="google" content="Agave Green Landscapes is quality
         landscaper in Sonoma county, Napa county and Marin county" />
        <link rel="icon" href="./agavelogo.ico" />
      </Head>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}
