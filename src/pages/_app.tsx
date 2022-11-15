import "../styles/globals.scss";
import "../styles/_reset.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
