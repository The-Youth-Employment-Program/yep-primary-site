import Link from 'next/link'
import Head from 'next/head'

export const YepHead = () => {
  return (
  <nav className="bg-white dark:bg-gray-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <Link href="/">
          <img src="/logo.svg" alt="Home | " width="60em" className='m-5'/>
        </Link>
        <Link href="/about">
          <a className='text-base font-medium rounded-lg p-3 text-white bg-orange'>About</a>
        </Link>
        <Link href="/support">
          <a>Support</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="https://time.youthemploymentprogram.org/">
          <a className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg></a>
        </Link>
  </nav>
  )
}

/*
      <Head>
        <title>Youth Employment Program</title>
        <meta name="description" content="Non-Profit helping to build the next generation of community leaders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </header>
*/
{/* <header className="bg-blue grid grid-flow-col">
        <Link href="/">
          <img src="/logo.svg" alt="Home | " width="60em" className='m-5'/>
        </Link>
        <Link href="/about">
          <a className='text-base font-medium rounded-lg p-3 text-white bg-orange'>About</a>
        </Link>
        <Link href="/support">
          <a>Support</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="https://time.youthemploymentprogram.org/">
          <a className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></a>
        </Link>
      </header> */}