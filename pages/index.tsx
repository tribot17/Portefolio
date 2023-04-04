import { NextPage } from "next";
import Head from "next/head";
import MainPage from "./home/index";

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tristan BOETTGER-MAGNIER</title>
        <meta name="description" content="nextCV_page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  );
};

export default Home;
