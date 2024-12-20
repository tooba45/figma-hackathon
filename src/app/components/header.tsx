"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { TbUserExclamation } from "react-icons/tb";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
         {/* Navbar start */}
   <div className='border-b-[1px]  border-x-neutral-200 pb-7 '> 
       <div className='mt-14 pl-[20px] ml-10 flex items-center'>
        <Image src="/logo/Logo.png" alt="logo" width={50} height={32}/>
            <h1 className='font-bold w-[118px] ml-2 h-[24px] text-3xl'>Furniro</h1>
            
            
  {/* Mobile Navigation Menu */}
            <button className='lg:hidden block ml-auto'  onClick={() => setIsMenuOpen(!isMenuOpen)}> 
  <Image src="/icons/Menu.png" alt="menu" width={24} height={24}/> </button>



 {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white p-5 lg:hidden z-50">
              <nav className="flex flex-col gap-5 text-center">
                <Link href="/" className='hover:underline'>Home</Link>
                <Link href="#Shop" className='hover:underline'>Shop</Link>
                <Link href="#Blog" className='hover:underline'>Blog</Link>
                <Link href="#Contact" className='hover:underline'>Contact</Link>
              </nav>
            </div>
          )}





{/* Screen Navigation */}
<div className='w-[600px] hidden lg:flex ml-4  '>
            <nav className='flex text-black text-xl items-center  justify-between sm:w-[687px]  pl-44 '>
        <Link href="/" className='hover:underline'>Home</Link>
        <Link href="#Shop" className='hover:underline'>Shop</Link>
        <Link href="#Blog" className='hover:underline'>Blog</Link>
        <Link href="#Contact" className='hover:underline'>Contact</Link>
        </nav>
        </div>


       
       {/* Icons */}
        <div className=' ml-auto gap-8 hidden lg:flex'>

        <TbUserExclamation className='  h-[28px] w-[28px]' />

        <LuSearch className='    h-[28px] w-[28px]' />
        <FaRegHeart className='  h-[28px] w-[28px]  ' />
        <HiOutlineShoppingCart className=' h-[28px] w-[28px] ' />
        </div>

        </div> 
        

        


  </div>



    </header>
  )
}

export default Header
