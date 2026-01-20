"use client"


import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Moon, Sun } from "lucide-react"

import { useTheme } from "next-themes"


const links = [
  {
    name: "Components",
    href: "#",
  },
  {
    name: "Docs",
    href: "#",
  },
  {
    name: "Templates",
    href: "#",
  },
  {
    name: "Showcase",
    href: "#",
  }
]

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className='fixed z-50 w-full h-18 font-grotesk flex items-center justify-around p-4 bg-background  shadow-lg'>
        <div className='flex items-center space-x-10'>
          <h1 className='text-2xl dark:text-neutral-200 font-bold cursor-pointer ring ring-foreground dark:ring-neutral-200 p-2  dark:shadow-[5px_5px_0px_1px_#ffff] shadow-[5px_5px_0px_1px_#000]'>Madrich UI</h1>
          <div className='flex items-center space-x-4 font-medium text-lg text-neutral-700 dark:text-neutral-200'>
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className='flex items-center space-x-6'>
          <div className='flex items-center space-x-6'>
            <Link href="#" className='cursor-pointer ring ring-foreground p-2  dark:shadow-[5px_5px_0px_1px_#ffff] shadow-[5px_5px_0px_1px_#000]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-twitter-x" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height="18" width="18">
                <desc>
                  Twitter X Streamline Icon: https://streamlinehq.com
                </desc>
                <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth="1"></path>
              </svg>
            </Link>
            <Link href="#" className='cursor-pointer ring ring-foreground p-2  dark:shadow-[5px_5px_0px_1px_#ffff] shadow-[5px_5px_0px_1px_#000]'>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Github--Streamline-Simple-Icons" height="18" width="18">
                <desc>
                  Github Streamline Icon: https://streamlinehq.com
                </desc>
                <title>GitHub</title>
                <path d="M12 0.297c-6.63 0 -12 5.373 -12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82 -0.258 0.82 -0.577 0 -0.285 -0.01 -1.04 -0.015 -2.04 -3.338 0.724 -4.042 -1.61 -4.042 -1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087 -0.744 0.084 -0.729 0.084 -0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108 -0.776 0.417 -1.305 0.76 -1.605 -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 0 -1.31 0.465 -2.38 1.235 -3.22 -0.135 -0.303 -0.54 -1.523 0.105 -3.176 0 0 1.005 -0.322 3.3 1.23 0.96 -0.267 1.98 -0.399 3 -0.405 1.02 0.006 2.04 0.138 3 0.405 2.28 -1.552 3.285 -1.23 3.285 -1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61 -2.805 5.625 -5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606 -0.015 2.896 -0.015 3.286 0 0.315 0.21 0.69 0.825 0.57C20.565 22.092 24 17.592 24 12.297c0 -6.627 -5.373 -12 -12 -12" fill="#000000" strokeWidth="1"></path>
              </svg>
            </Link>
          </div>

          <div className='flex items-center space-x-2 border border-foreground h-[36px] pl-2  dark:shadow-[5px_5px_0px_0px_#ffff] shadow-[5px_5px_0px_0px_#000]'>
            <Search /><input className='outline-none' type="text" placeholder="Search Components" />
          </div>


          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='transition-all relative cursor-pointer ring ring-foreground p-2 text-foreground  dark:shadow-[5px_5px_0px_1px_#ffff] shadow-[5px_5px_0px_1px_#000]'>
            {
              theme === "dark" ? <Sun width={18} height={18} /> : <Moon width={18} height={18} />
            }
          </button>
        </div>
      </div>

      <div className='z-50 fixed mt-18 h-1 w-full bg-foreground'>

      </div>
    </>
  )
}

export default Header