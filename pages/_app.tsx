import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/tooplate-style.css";
import "../styles/unicons.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>RGB Solution: Website Personal Resume</title>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Script src="/public/js/jquery-3.3.1.min.js" />
      <Script src="/public/js/popper.min.js" />
      <Script src="/public/js/bootstrap.min.js" />
      <Script src="/public/js/Headroom.js" />
      <Script src="/public/js/jQuery.headroom.js" />
      <Script src="/public/js/owl.carousel.min.js" />
      <Script src="/public/js/smoothscroll.js" />
      <Script src="/public/js/custom.js" />
    </>
  );
}

export default MyApp;
