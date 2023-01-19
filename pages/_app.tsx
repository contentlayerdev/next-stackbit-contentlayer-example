import Head from 'next/head'

import '../styles/globals.css'

import { Header } from '../components/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stackbit Example - Next.js + Contentlayer</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>

      <Header />

      <div className="px-6">
        <Component {...pageProps} />
      </div>
    </>
  )
}
