import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image src={"/404 Error with a cute animal-bro.svg"} width={400} height={400} alt='404 not found' />
      <Link href={'/'} className='btn'>Go Home</Link>
    </div>
  )
}
