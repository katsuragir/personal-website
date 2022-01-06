import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/tooplate-style.css";
import "../styles/unicons.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/Headroom.js"></script>
        <script src="js/jQuery.headroom.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/smoothscroll.js"></script>
        <script src="js/custom.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
