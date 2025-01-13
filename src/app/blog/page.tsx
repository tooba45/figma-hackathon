import React from 'react'
import Banner from '../components/banner'
import { FaRegUser } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";


import Image from 'next/image'

const blog = () => {
  return (
    <div>
      <div style={{backgroundImage: "url('/furniture/Rectangle 1.png')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              }} className=' flex  flex-col items-center justify-center h-[316px] w-full '> 
                <Image src="/logo/Logo.png" alt="logo" width={50} height={32}/>
              
              <h1 className=' font-semibold text-6xl'>Blog </h1>
              <div className='flex gap-2 text-[20px] mt-2'>
                <p className='font-semibold'>Home</p> 
                <Image src="/icons/arrow.png" alt="arrow" width={20} height={16}/>
                <p>Blog</p></div>
                </div>

<div className=''>

<div>


  <div className='mt-20 ml-10'>
   <span><Image src="/blog/blog1.png" alt="blog" height={500} width={800}/>
   
   <div className='flex items-center gap-3 mt-3 text-gray-600'>
  <FaRegUser className='text-lg' /><p className='m-0'>Admin</p>
  <BsCalendarDateFill className='text-lg' /><p className='m-0'>14 oct 2022</p>
  <FaTag className='text-lg' /><p className='m-0'>Wood</p>
  </div>

<h1 className='text-2xl font-bold mt-3'>Going all-in with millennial design</h1>
<p className=' mt-2 lg:w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
   <button className=' mt-4 border-b-2 border-black'>Read More</button>
    </span>
       
  </div>

  <div className='mt-20 ml-10'>
   <span><Image src="/blog/blog2.png" alt="blog" height={500} width={800}/>
   
   <div className='flex items-center gap-3 mt-3 text-gray-600'>
  <FaRegUser className='text-lg' /><p className='m-0'>Admin</p>
  <BsCalendarDateFill className='text-lg' /><p className='m-0'>14 oct 2022</p>
  <FaTag className='text-lg' /><p className='m-0'>Wood</p>
  </div>

<h1 className='text-2xl font-bold mt-3'>Exploring new ways of decorating</h1>
<p className=' mt-2 lg:w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
   <button className=' mt-4 border-b-2 border-black'>Read More</button>
    </span>
       
  </div>

  <div className='mt-20 ml-10'>
   <span><Image src="/blog/blog3.png" alt="blog" height={500} width={800}/>
   
   <div className='flex items-center gap-3 mt-3 text-gray-600'>
  <FaRegUser className='text-lg' /><p className='m-0'>Admin</p>
  <BsCalendarDateFill className='text-lg' /><p className='m-0'>14 oct 2022</p>
  <FaTag className='text-lg' /><p className='m-0'>Wood</p>
  </div>

<h1 className='text-2xl font-bold mt-3'>Handmade pieces that took time to make</h1>
<p className=' mt-2 lg:w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
   <button className=' mt-4 border-b-2 border-black'>Read More</button>
    </span>
       
  </div>

</div>

<div>

            <div className='relative flex items-center   '>

            <input type="text"  className='pl-6 py-2  w-[280px] bg-[#F7F7F7] '/>
                      <FiSearch  className='absolute ml-60 h-[24px] w-[24px]' />
            </div>
</div>
</div>

                <div className='mt-10 hidden lg:block'><Banner/></div>
    </div>
  )
}

export default blog
