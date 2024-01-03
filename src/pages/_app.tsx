import '@/styles/globals.css'
import "@/components/MultiRangeSlider/mltirangeslider.css";
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title key="site-title">ADN Agro Ltd.</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}
