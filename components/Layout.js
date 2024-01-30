import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  return (
    <>
    <Head>
      <title>Youth Employment Program</title>
      <meta name="description" content="Non-Profit helping to build the next generation of community leaders" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/styles/global.css" />
    </Head>
    <div className='min-h-screen bg-salmon-red'>
      <div className="bg-salmon-light-g2"> {/* bg-slate-100 */}
        <main>{props.children}</main> {/* className='2xl:mx-40' */}
      </div>
    </div>
    </>
  )
}
