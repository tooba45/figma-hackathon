import React from 'react'
import Banner from '../components/banner'
import Image from 'next/image'
import ContactSection from './ContactSection'

const contact = () => {
  return (
    <div>
       <div style={{backgroundImage: "url('/furniture/Rectangle 1.png')", 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    }} className=' flex  flex-col items-center justify-center h-[316px] w-full '> 
                      <Image src="/logo/Logo.png" alt="logo" width={50} height={32}/>
                    
                    <h1 className=' font-semibold text-6xl'>Contact </h1>
                    <div className='flex gap-2 text-[20px] mt-2'>
                      <p className='font-semibold'>Home</p> 
                      <Image src="/icons/arrow.png" alt="arrow" width={20} height={16}/>
                      <p>Contact</p></div>
                      </div>

                <ContactSection/>

                <div className='mt-10 hidden lg:block'><Banner/></div> 
    </div>
  )
}

export default contact
