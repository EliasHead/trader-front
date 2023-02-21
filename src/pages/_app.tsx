import type { AppProps } from 'next/app'

// # Faça a importação do next/router e do NProgress
import Router from 'next/router'
import NProgress from 'nprogress'

// # Import também o next/head, você vai precisar dele
import Head from 'next/head'

import '../styles/globals.css'

// # Esses são os eventos disparados quando o usuário muda de página
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/npprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
