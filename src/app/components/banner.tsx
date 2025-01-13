import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[200px] bg-[#FAF3EA]'>
      <div className='flex gap-14 py-16  mx-24 '>

      <div className='flex gap-[4px]'><Image src="/banner/banner1.png" alt="trophy" width={60} height={60}/> 
      <div className='mt-2'>
      <h1 className='font-bold text-xl'>High Quality</h1 >
      <p className='text-[#898989]'>crafted from top materials</p></div></div>
      
      <div className='flex ml-4 gap-[4px]'><Image src="/banner/banner2.png" alt="trophy" width={60} height={60}/> 
      <div className='mt-2'>
      <h1 className='font-bold text-xl'>Warranty Protection</h1 >
      <p className='text-[#898989]'>Over 2 years</p></div></div>
      
      <div className='flex ml-4 gap-[6px]'><Image src="/banner/banner3.png" alt="trophy" width={60} height={60}/> 
      <div className='mt-2'>
      <h1 className='font-bold text-xl'>Free Shipping</h1 >
      <p className='text-[#898989]'>Order over 150 $</p></div></div>

      <div className='flex ml-4 gap-[4px]'><Image src="/banner/banner4.png" alt="trophy" width={60} height={60}/> 
      <div className='mt-2'>
      <h1 className='font-bold text-xl'>24 / 7 Support</h1 >
      <p className='text-[#898989]'>Dedicated support</p></div></div>


      </div>
      </div>
  )
}

export default Banner
