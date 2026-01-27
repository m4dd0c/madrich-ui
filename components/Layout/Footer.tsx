import React from 'react'
import Link from 'next/link'

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
  },
];

const Footer = () => {
  return (
   <>
   <div className='h-18 w-full  border-t-4 flex items-center justify-center border-foreground bg-[#BC96D4]'>
  <div className=" py-6 text-center text-sm font-press-start-2p">
  © {new Date().getFullYear()} Madrich UI. All rights reserved.
   </div>
   </div>
   </>
  )
}

export default Footer