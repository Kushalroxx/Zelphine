import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Loader({
  className,
}:{
  className?:string
}) {
  return (
    <div className= {`${className} flex justify-center items-center`}>
        <FaSpinner className='animate-spin text-4xl text-blue-600'/>
      </div>
  )
}

export {Loader}
