'use client'
import React from 'react'

export default function Navbar() {
  console.log('Client component')
  return (
    <header className='
    sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-grey-800 shadow-md
    '>
        <div>Left</div>
        <div>Center</div>
        <div>Right</div>
    </header>
  )
}
