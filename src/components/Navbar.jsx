import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen fixed top-0 bg-green-400 flex flex-row justify-between items-center px-36'>
      <span>
        <Link href={'/'} className='font-serif text-3xl'>Webology</Link>
      </span>
      
      <span className='flex flex-row gap-5 text-xl font-mono'>
        <Link href={'#Form'} className='hover:text-white hover:underline'>Form</Link>
        <span>|</span>
        <Link href={'#Contact'} className='hover:text-white hover:underline'>Contact</Link>
      </span>

    </div>
  )
}

export default Navbar;
