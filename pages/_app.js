import React from 'react'
import '../styles/globals.css'
import '../styles/app-base.css'
import '../styles/app-components.css'
import '../styles/app-utilities.css'
import '../styles/print.css'
import '../styles/prism.css'
import '../styles/tables.css'
import '../public/assets/tailwind-base.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
