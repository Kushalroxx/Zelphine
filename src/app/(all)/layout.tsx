import Footer from '@/components/sections/footer'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-background relative '>   
    <div className='h-screen'>
      {children}
      <Footer/>
    </div>
    </div>
  )
}
