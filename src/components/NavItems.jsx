import React from 'react'
import {  Square, Banknote, Heart, MessageSquare, Clipboard, Circle } from 'lucide-react'

export default function NavItems() {
  return (
    <>
      <ul className='flex flex-col justify-start font-normal items-start gap-2 mt-2 '>
                <li className='text-black flex items-center gap-3 hover:bg-gray-200  w-full rounded p-1'><Clipboard size={15} /> <span className='text-lg hover:text-red-500'> My Order </span></li>
                <li className='text-black flex items-center gap-3 hover:bg-gray-200   w-full rounded p-1'><Circle size={15} /> <span className='text-lg hover:text-red-500'> My Coins </span></li>
                <li className='text-black flex items-center gap-3 hover:bg-gray-200  w-full rounded p-1'><MessageSquare size={15} /> <span className='text-lg hover:text-red-500'> Message center</span></li>
                <li className='text-black flex items-center gap-3 hover:bg-gray-200  w-full rounded p-1'><Banknote size={15} /> <span className='text-lg hover:text-red-500'> Payment </span></li>
                <li className='text-black flex items-center gap-3 hover:bg-gray-200  w-full rounded p-1'><Heart size={15} /> <span className='text-lg hover:text-red-500'> Wish List </span></li>
                <li className='text-black flex items-center gap-3 hover:bg-gray-200  w-full rounded p-1'><Square size={15} /> <span className='text-lg hover:text-red-500 mb-2'> My Coupon </span></li>
              </ul>
    </>
  )
}
