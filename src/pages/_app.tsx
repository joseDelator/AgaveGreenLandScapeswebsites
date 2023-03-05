import Footer from '@/componets/Footer'
import Navbar from '@/componets/Navbar'
import TopBanner from '@/componets/TopBanner'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <div>
    <TopBanner/>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </div>)
}
