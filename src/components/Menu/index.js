"use client"
import headerNavLinks from '@/data/headerNavLinks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Menu = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  return (
    <header class="">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <figure className='w-[70px] h-[70px] lg:w-[130px] lg:h-[130px] relative'>
                <Image src="/image/logo.png" fill alt="logo"></Image>
              </figure>
            </Link>
            <button
              className="text-white w-[30px] h-[30px] cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <span className='h-[1px] w-full bg-white block'></span>
             <span className='h-[1px] w-full bg-white block mt-2'></span>
             <span className='h-[1px] w-full bg-white block mt-2'></span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {headerNavLinks.map((link) => {
                return (
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
                      href={link?.href}
                      onMouseEnter={() =>
                        link?.menu && setIsServiceMenuOpen(true)
                      }
                      onMouseLeave={() =>
                        link?.menu && setIsServiceMenuOpen(false)
                      }
                    >
                      {link?.title}
                    </Link>
                    {link?.menu && (
                      <div className='text-white absolute bottom-0 left-0 w-full py-[50px]'
                        onMouseEnter={() => setIsServiceMenuOpen(true)}
                        onMouseLeave={() => setIsServiceMenuOpen(false)}>

                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Menu