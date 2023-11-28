import Link from 'next/link'
import Head from 'next/head'

export const YepHead = () => {
  return (
      <header>
        <Link href="/">
          <img src="/logo.svg" alt="Home | " width="60em" />
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        {' | '}
        <Link href="/support">
          <a>Support</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        {' | '}
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        {' | '}
        <Link href="https://time.youthemploymentprogram.org/">
          <a>Login</a>
        </Link>
      </header>
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
