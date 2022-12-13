import type { AppProps } from 'next/app'
import React, { useEffect, useState } from "react";
import Border from '../components/Border'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import "../styles/index.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <Header/>
    <Component {...pageProps} />
    <Nav/>
    <Footer/>
    <Border/>
    </div>)
}
