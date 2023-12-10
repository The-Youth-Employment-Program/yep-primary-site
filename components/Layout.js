import Link from 'next/link'
import Head from 'next/head'
import { YepFoot } from '../components/YepFoot'
import { YepHead } from '../components/YepHead'

export const Layout = (props) => {
  return (
    <>
    <Head>
      <title>Youth Employment Program</title>
      <meta name="description" content="Non-Profit helping to build the next generation of community leaders" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/styles/global.css" />
    </Head>
    <body className="bg-slate-100">
      <YepHead />
      <main>{props.children}</main>
      <YepFoot />
    </body>
    </>
  )
}
