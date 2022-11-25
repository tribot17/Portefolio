import { NextPage } from 'next'
import Head from 'next/head'
import Border from '../components/Border';
import Nav from '../components/Nav';
import MainPage from './Home';

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Border/>
      <MainPage />
      <Nav />
    </div>
  )
}


export default Home;
