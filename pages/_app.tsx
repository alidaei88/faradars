import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/globals.css";
import "../styles/font.css";
import { CurrentUserProvider } from "../src/ContextAPi";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <CurrentUserProvider>
      <Component {...pageProps} />
    </CurrentUserProvider>
  )
}

export default MyApp;
