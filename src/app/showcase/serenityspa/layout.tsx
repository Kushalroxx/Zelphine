import ZelphineBack from '@/components/majorUi/zelphineBack'
import React from 'react'

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
      {children}
      <ZelphineBack />
    </div>
  )
}
