'use client'

import Link from 'next/link'
import Head from 'next/head'
import { useCallback, useState } from 'react'

export const YepHead = () => {

  
  const [isOpen, toggleIsOpen] = useToggle();
  const active = isOpen ? 'block' : 'hidden'

  return (
  <header className="bg-salmon-tan sm:flex sm:justify-between sm:items-center">
    <div className="flex items-center justify-between px-4 py-3">
      <div className="">
        <Link href="/">
          <img src="/logo.svg" alt="Home" className="h-12 cursor-pointer"/>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="https://time.youthemploymentprogram.org/">
          <a className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:hidden stroke-salmon-red hover:stroke-salmon-green focus:stroke-salmon-green h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg></a>
        </Link>
        <button onClick={toggleIsOpen} type="button" className='ml-2 items-center sm:hidden text-salmon-red hover:text-salmon-green'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current h-8">
            {isOpen && <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />}
            {!isOpen && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
          </svg>
        </button>
      </div>
    </div>
    <div className={`px-2 pt-0 pb-3 ${active} sm:flex sm:justify-around sm:items-center sm:pb-0 sm:pr-0`}>
      <Link href="/about">
        <a className="block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider sm:mt-0 sm:mr-2">About</a>
      </Link>
      <Link href="/support">
        <a className="mt-2 block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider sm:mt-0 sm:mr-2">Support</a>
      </Link>
      <Link href="/posts">
        <a className="mt-2 block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider sm:mt-0 sm:mr-2">Posts</a>
      </Link>
      <Link href="/contacts">
        <a className="mt-2 block px-2 py-1 text-salmon-red rounded hover:bg-salmon-red hover:text-salmon-tan focus:text-salmon-green focus:bg-salmon-tan font-medium tracking-wider sm:mt-0 sm:mr-2">Contact</a>
      </Link>
      <div className="hidden sm:flex sm:items-center sm:pr-4">
          <Link href="https://time.youthemploymentprogram.org/">
            <a className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-salmon-red hover:stroke-salmon-green focus:stroke-salmon-green h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg></a>
          </Link>
      </div>
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