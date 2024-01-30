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
    <div className="bg-salmon-light-g2"> {/* bg-slate-100 */}
      <YepHead />
      <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>{props.children}</main> {/* className='2xl:mx-40' */}
      <YepFoot />
    </div>
    </>
  )
}
