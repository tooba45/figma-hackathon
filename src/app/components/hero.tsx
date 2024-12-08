import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>

      {/* Hero's Part 1 */}
     <div className='flex  items-end'>
        {/* BackGround-Image */}

      <div style={{backgroundImage: "url('/images/background.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        }} className='h-[750px] max-sm:w-[500px] w-[1350px]'>

        {/* Another-div */}
          <div className='w-[643px] max-sm:ml-[50px] max-sm:w-[400px] ml-[650px] mt-[160px] h-[443px] bg-[#FFF3E3]'>
            <div className='pt-[60px] w-[561px] pl-[70px]'>
            <h2 className='text-[#333333] font-semibold  justify-between tracking-widest'>New Arrival</h2>
            <h1 className='text-[#c2952c] w-[400px] h-[130px] max-sm:w-[300px] max-sm:text-[40px] max-sm:pt-4 font-bold text-[52px]'>Discover Our New Collection</h1>
            <p className='w-[500px] max-sm:hidden text-[#333333] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <p className='w-[250px] lg:hidden text-[#333333] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <button className='bg-[#c2952c] border-[#eccd82] border-[2px] mt-[48px] py-6 px-16 font-bold text-white'>BUY NOW</button>
            </div>
          </div>


      </div>
     </div>



      {/* Hero's Part 2 */}
<div className='mt-14'>
  <h1 className='flex justify-center font-bold text-[32px]'>Browse The Range</h1>
  <p className='text-[#666666] flex justify-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div className='flex  gap-6 max-sm:pl-[8px] pl-[80px] mt-10'>

  <div><Image src="/images/dinning.png" alt="dinning" width={381} height={500}/>
  <h3 className='mt-4 font-bold text-[20px] tracking-wide  text-[#333333] flex justify-center'>Dining</h3>
  </div>

  <div>
  <Image src="/images/Image-living room.png" alt="living" width={381} height={480}/>
  <h3 className='mt-4 font-bold text-[20px] tracking-wide  text-[#333333] flex justify-center'>Living</h3>
  </div>

  <div>
  <Image src="/images/bedroom.png" alt="bedroom" width={381} height={480}/>
  <h3 className='mt-4 font-bold text-[20px] tracking-wide  text-[#333333] flex justify-center'>Bedroom</h3>
</div>

</div>
</div>


    </div>
  )
}

export default Hero
