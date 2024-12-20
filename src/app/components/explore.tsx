import React from 'react'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";


const Explore = () => {
  return (
    <div className='mt-8'>
      <div className='flex flex-col sm:flex-row justify-center items-center bg-[#FFF3E3] lg:h-[670px]  sm:w-full'>
      

         {/* Explore Now */}
            <div className='py-[40px] pl-16  bg-[#FFF3E3]'>
            <h1 className='text-[#000000] w-[500px] font-bold text-[40px]'>50+ Beautiful rooms 
            inspiration</h1>
            <p className='w-[368px]  text-[#616161] mt-4'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className=' w-[200px] border-[2px] px-6 py-[12px] mt-5 text-white border-[#eccd82] bg-[#c2952c]'>Explore More</button>
            </div>

         {/* Images 1   */}
         <div className='lg:block hidden'>
            <div className='w-[400px] h-[582px]' style={{backgroundImage: "url('/images/Explore1.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',}}> 
        <div className='flex'><Image className='pt-96 ml-6 it' src="/images/Content.png" alt="content" width={217} height={130}/> 
        <GoArrowRight className='text-white mt-[500px] w-[40px] h-[40px] bg-[#c2952c]'/></div>
             </div>
         </div>


        {/* Images 2 */}
        <div className='ml-4 lg:block hidden'>
            <Image   src="/images/Explore2.png" alt="explore" width={372} height={486}/>
            <Image className="mt-6" src="/dots/Indicator.png" alt="indicator" width={120} height={27}/>

        </div>


        
        
      </div>
    </div>
  )
}

export default Explore
