import Head from "next/head";
import Script from 'next/script'
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'antd/dist/antd.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta name="description" content={Component.description} />
        
      </Head>
      
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
