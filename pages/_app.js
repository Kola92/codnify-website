import Head from "next/head";
import Script from 'next/script'
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta name="description" content={Component.description} />
        {/* jQuery */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
