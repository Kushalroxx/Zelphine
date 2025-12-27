import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
   <div className="border-t border-t-border px-4 md:px-10 py-8 ">
  <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start flex-wrap">
    <div className="md:w-1/4 min-w-[200px]">
       <Link href="/" className="text-xl md:text-2xl flex items-center">
       <img src="/assets/logo.png" className='w-8 md:w-10' alt="" />
      <span className="font-bold text-muted-foreground">ZELPHINE</span>
    </Link>
      <p className="text-sm text-foreground/80">Helping you build fast, user-focused digital products.</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 flex-grow">
      <div>
        <h2 className="font-semibold mb-2">Address</h2>
        <ul className="space-y-1 text-sm text-foreground/80">
          <li>West Bengal, India</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Contact</h2>
        <ul className="space-y-1 text-sm text-foreground/80">
         
          <li>support@zelphine.com</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Social</h2>
        <ul className="space-y-1 text-sm text-foreground/80">
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/#"}>Instagram</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/#"}>Facebook</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/#"}>Twitter</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/#"}>LinkedIn</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/#"}>YouTube</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Company</h2>
        <ul className="space-y-1 text-sm text-foreground/80">
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/about"}>About</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/insights"}>Insights</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/contactus"}>Contact Us</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/case-studies"}>Case Studies</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/"}>Home</Link></li>
          <li><Link className='hover:underline hover:text-blue-600 active:text-blue-600' href={"/#services"}>Services</Link></li>
        </ul>
      </div>
    </div>
  </div>


  <div className="mt-8 border-t border-foreground/10 pt-4 text-center text-xs text-foreground/50">
    © {new Date().getFullYear()} ZELPHINE. All rights reserved.
  </div>
</div>

  )
}
