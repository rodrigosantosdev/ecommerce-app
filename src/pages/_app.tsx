import type { AppProps } from "next/app";
import "../styles/swiper.css";
import "../styles/global.css";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
