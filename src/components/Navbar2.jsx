import React, { useState } from 'react';
import { Camera, Car, ChevronDown, ChevronUp,Aperture,   Footprints, Gamepad, Gamepad2, Home, HomeIcon, Luggage, Menu, Refrigerator, ScanFace, Ship, Shirt, User, Watch, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'


const menuItems = [
  { icon: <Home size={20} />, text: 'Home & Garden' },
  { icon: <User size={20} />, text: 'Hair Extensions & Wigs' },
  { icon: <Shirt size={20} />, text: "Men's Clothing" },
  { icon: <Watch size={20} />, text: 'Accessories' },
  { icon: <Camera size={20} />, text: 'Consumer Electronics' },
  { icon: <Refrigerator size={20} />, text: 'Home Appliances' },
  { icon: <Car size={20} />, text: 'Automotive & Motorcycle' },
  { icon: <Luggage size={20} />, text: 'Luggages & Bags' },
  { icon: <Footprints size={20} />, text: 'Shoes' },
  { icon: <ScanFace size={20} />, text: 'Special Occasion Costume' },
  { icon: <Gamepad2 size={20} />, text: 'Toys & Games' },
  { icon: <Aperture size={20} />, text: 'Sports & Entertainment' },
  { icon: <Phone size={20} />, text: 'Phones & Telecommunications' },
];

const Nav2Items = [
  {name: '3 items from US $4.49' ,class: "text-red-600" },
  {name: 'Choice'},
  {name: 'SuperDeals'},
  {name: 'Plus'},
  {name: 'New'},
  {name: 'AppCut Business'},
 
]

export default function Navbar2() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className='h-[70px] pb-5 bg-black py-2 px-28 flex  justify-between items-center '>
   <section className='w-[260px] py-1.5 rounded-full bg-gray-400/50 px-5'>
<div
  onMouseEnter={handleMouseEnter}
  className='flex relative justify-between items-center text-white'>
  <Menu size={20} />
  <h1 className='text-lg'>All Categories</h1>
  {open ? (
    <div onMouseLeave={handleMouseLeave} className='absolute -top-1 -right-[22.5px] rounded-2xl w-[262px] h-[600px] shadow-xl bg-gray-50 transition ease-in-out'>
      {/* Drop DownContent */}
      <section className=' py-2 flex text-gray-800  flex-col items-cente justify-start'>
        {/* HEADING CONTET OF DROPDOWN */}
        <div className='flex items-center  px-5'>
          <Menu size={20} />
          <h1 className='font-bold text-lg  pl-3 pr-10'>All Categories</h1>
          <ChevronUp size={20} className="" />
        </div>
        <ul className='pt-5 font-light flex overflow-y-auto flex-col gap-3 text-gray-800' style={{ maxHeight: '550px' }}>
          {menuItems.map((item, index) => (
            <Link to="#" className='flex px-5 hover:bg-white hover:text-black hover:font-semibold text-sm w-full gap-3 py-2 items-center' key={index}>
              {item.icon} {item.text}
            </Link>
          ))}
        </ul>
      </section>
    </div>
  ) : null}
  <ChevronDown size={20} />
</div> 
</section>
    <ul className='flex justify-between gap-5 text-white'>
      {Nav2Items.map((item, index) => (
        <li key={index}>
          <button className='px-3 py-2 hover:bg-gray-400/50 rounded-full'>
            <Link to='#' className={`text-lg ${item.class || ""}`}>{item.name}</Link>
          </button>
        </li>
      ))}
      <li>
        <button className='px-5 py-2 hover:bg-gray-400/50 rounded-full'>
        <Link to='#' className='text-lg flex gap-2 items-center'>More <ChevronDown size={20}/></Link>
        </button>
      </li>
    </ul>
  </div>
  );
}
