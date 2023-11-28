import Link from 'next/link'
import Head from 'next/head'
import { YepFoot } from '../components/YepFoot'
import { YepHead } from '../components/YepHead'

export const Layout = (props) => {
  return (
    <div
      style={{
        margin: '3rem',
      }}
    >
      <Head>
        <title>Youth Employment Program</title>
        <meta name="description" content="Non-Profit helping to build the next generation of community leaders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <YepHead />
      <main>{props.children}</main>
      <YepFoot />
    </div>
  )
}
