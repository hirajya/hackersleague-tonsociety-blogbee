import React from 'react'
import Image from 'next/image'

export default function Logohead() {
  return (
    <div className='p-4'>
      <Image
              className=""
              src="./BlogbeeLogo.svg"
              alt="Blogbee Logo"
              width={100}
              height={100}
            />
    </div>
  )
}