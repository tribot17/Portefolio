import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../styles/index.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>)
}
