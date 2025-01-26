import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
  const [open,setOpen]= useState(false);
  const toggleButton = ()=>{
    setOpen(!open);
  }
  return (
    <nav className='sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-lg'>
        <div className='container px-4 mx-auto relative text-sm'>
             <div className=' flex justify-between items-center'>
                <div className='flex  items-center flex-shrink-0'>
                    <img src={logo} alt="logo" className='h-10 w-10 mr-2'/>
                    <span className='text-xl tracking-tight'> VirtualRate</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                   {
                    navItems.map((item,i)=>(
                        <li key={i}>
                            <a href={item.href}>{item.label}</a>
                        </li>

                    ))
                   }

                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                  <a href="#" className='py-2 px-3 border rounded-md'> Sign in</a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Create a account
                  </a>

                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleButton}>
                    {open?<X/>:<Menu/>}
                  </button>
                </div>  
             </div>
             {open && (
              <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                <ul>
                  {navItems.map((item,i)=>(
                    <li key={i} className='py-4'>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className='flex space-x-6'>
                  <a href="#" className='py-2 px-3 border rounded-md'>
                    Sign In
                  </a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Create a account
                  </a>
                </div>
                
              </div>

             )}
        </div>
    </nav>
  )
}

export default Navbar