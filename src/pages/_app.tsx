import Footer from '@/componets/Footer'
import Navbar from '@/componets/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import TopBar from '@/componets/topBar'
export default function App({ Component, pageProps }: AppProps) {
  return( 
  <> <DefaultSeo
  title="Agave Green Land Scapes"
  description="Agave Green Landscapes A quality
  landscaper in Sonoma county, Napa county and Marin county"
  openGraph={{
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.AgaveGLS.com/',
      siteName: 'Agave Green Landscapes',
  }}
  twitter={{
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
  }}
/>
  <TopBar/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}
