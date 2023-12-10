'use client'

import Link from 'next/link'
import Head from 'next/head'
import { useCallback, useState } from 'react'

export const YepHead = () => {
  // export default {
  //   data() {
  //     return {
  //       isOpen: false,
  //     }
  //   }
  // }
  const [isOpen, toggleIsOpen] = useToggle();
  const active = isOpen ? 'block' : 'hidden'

  // function handleToggle(e) {
  //   toggleMenu(e.target)
  // }
  // function toggleOpen(){
  //   isOpen = !isOpen
  // }

  return (
  <header className="bg-salmon-tan">
    <div className="flex items-center justify-between px-4 py-3">
      <div className="">
        <Link href="/">
          <img src="/logo.svg" alt="Home" className="h-12"/>
        </Link>
      </div>
      <div className="flex">
        <Link href="https://time.youthemploymentprogram.org/">
          <a className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-salmon-red hover:stroke-salmon-green focus:stroke-salmon-green h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg></a>
        </Link>
        <button onClick={toggleIsOpen} type="button" className='text-salmon-red hover:text-salmon-green'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current h-8">
            {isOpen && <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />}
            {!isOpen && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
          </svg>
        </button>
      </div>
    </div>
    <div className={`px-2 pt-0 pb-3 ${active}`}>
      <Link href="/about">
        <a className="block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider">About</a>
      </Link>
      <Link href="/support">
        <a className="mt-2 block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider">Support</a>
      </Link>
      <Link href="/posts">
        <a className="mt-2 block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider">Posts</a>
      </Link>
      <Link href="/contact">
        <a className="mt-2 block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider">Contact</a>
      </Link>
    </div>
    
  </header>
  )
}

export default function useToggle(initialValue = false) {
  const [value,setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value,toggle];
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