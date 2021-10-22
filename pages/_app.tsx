import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <> 
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
