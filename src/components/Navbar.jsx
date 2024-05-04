import React, { useState } from 'react'
import { Search, Flag, UserRound, ShoppingCart, LayoutDashboard, Square, Banknote, Heart, MessageSquare, Clipboard, Circle, Menu } from 'lucide-react'
import NavItems from './NavItems';


const NavData = [
  { name: "Settings" },
  { name: "Join Businesses" },
  { name: "DS Center" },
  { name: "Seller Logins" },
  { name: "Buyer Protection" },
  { name: "Help Center " },
  { name: "Disputes & Reports" },
  { name: "Report IPR Infringement" },
  { name: "Accessiblity" },

]



const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState('')
  // console.log(search);

  const HandleSearch = (event) => {
    event.preventDefault();
    console.log("hello world");
  }


  return (
    <div className='h-20 max-w-screen-2xl bg-black '>
      <nav className='lg:px-28 md:px-5 py-3 h-full justify-between flex items-center'>
        <h1 className='lg:text-4xl text-xl text-gray-50 font-medium'>APPCUT</h1>
        <div className={`lg:h-[40px] ${nav ? "hidden" : 'flex'} h-[30px] lg:w-[400px] w-[200px] md:w-[350px] flex bg-white my-5 rounded-full relative `}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="I'm searching for ...." className='absolute left-3 lg:w-[300px]  w-[110px] md:w-[250px] outline-none bottom-1 lg:bottom-2.5 ' />
          <button onClick={HandleSearch} className='absolute right-2 bottom-1 rounded-3xl px-4 bg-black text-white lg:py-1 flex items-center justify-center'>
            <Search />
          </button>
        </div>
        <ul className='lg:flex justify-between gap-7 text-white hidden '>
          <div className='flex items-center gap-2 font-semibold'><LayoutDashboard size={30} /><div className='lg:flex flex-col text-xs hidden '> Download the  <h1>AppCut app </h1></div></div>
          <div className='flex items-center gap-1 font-semibold'>
            <span className='text-sm'>
              <Flag />
            </span>
            <h1 className='lg:flex flex-col text-xs hidden'> EN/ <span>NGN</span>
            </h1>
          </div>
          <li onMouseEnter={() => setIsHovered(true)} className='flex items-center gap-2 relative'>
            <UserRound size={30} />
            <h1 className='lg:text-xs flex lg:block flex-col text-white font-semibold sm:hidden'> Welcome <span className='hidden lg:block'>Sign in / Register</span>
              {isHovered ? (<div onMouseLeave={() => setIsHovered(!isHovered)} className='absolute top-[48px] -right-16 h-[750px] rounded-3xl w-[300px] shadow-xl bg-white transition ease-in-out'>
                <section className='px-5 py-5 gap-2 flex flex-col item-center font-semibold justify-start'>
                  <li>
                    <button className='w-[250px] py-2 text-white bg-black rounded-full text-xl font-bold'>Sign in </button>
                  </li>
                  <li className='text-gray-700 text-sm mb-3 self-center'>Register</li>
                  <hr className='border-spacing-x-0.5 border-gray-200 w-full ' />
                  {/* The dropDown  second Items */}
                  <NavItems />
                  <hr className='border-spacing-x-0.5 border-gray-200 w-full ' />
                  <ul className='gap-2'>
                    {/* Dropdown third items */}
                    {NavData.map((data, idx) => (
                      <div key={idx} className='text-gray-600 font-normal flex items-center gap-5 hover:bg-gray-200  w-full rounded p-1'>
                        <h1 className='text-lg hover:text-red-500'> {data.name} </h1>
                      </div>
                    ))}
                  </ul>
                </section>
              </div>) : ''}</h1>
          </li>
          <li className='flex items-center gap-1  '>
            <ShoppingCart size={25} />
            <h1 className='text-xs   hidden lg:flex flex-col items-center'>
              <span className='bg-white px-2 rounded-full  text-black'>0</span>
              <span className='text-sm'>cart</span>
            </h1>
          </li>
        </ul>
        {/*  Mobile Device    */}
            <ul className='md:flex lg:hidden hidden gap-4 items-center  text-white'>
               <LayoutDashboard size={25}/>
               <Flag size={25}/>
               <UserRound size={25}/>
            <li className='flex items-center gap-1  '>
            <ShoppingCart size={25}  />
            <h1 className='flex flex-col items-center'>
              <span className='bg-white px-1 rounded-full text-xs text-black'>0</span>
              <span className='text-xs '>cart</span>
            </h1>
            </li>
            </ul>
        <button onClick={()=> setNav(true)} className={`lg:hidden ${nav ? 'hidden' : 'block'} relative text-white`}>
          <Menu />
          {nav ? (
          <div onMouseLeave={()=>setNav(!nav)} className='absolute right-0 top-0  w-[250px] h-[750px] bg-white   shadow-md px-4'>

                <ul>
                  <li>hello world</li>
                </ul>
          </div>
          ) :
           ''}
        </button>
      </nav>
    </div>
  )
}

export default Navbar
