import Image from 'next/image'
import React from 'react'

const Furniture = () => {
  return (
    <div>

   {/* Top Heading */}
      <div className='mt-14 '>
        <p className='flex justify-center text-[#616161]'>Share your setup with</p>
      <h1 className='flex justify-center font-bold text-[32px]'>#FuniroFurniture</h1></div>
    
      {/* Images */}

    <div className="grid grid-cols-2  md:grid-cols-5 gap-4 mx-auto ">
                {/* First Column: Contains the first and sixth images */}
                <div className="flex  flex-col  gap-4">
                    {/* 1st & 3rd Image */}
                    <Image 
                    src="/furniture/image1.jpeg"  
                    alt="rectangle" 
                    width={270} 
                    height={382} className=" object-cover"/>

                  <Image 
                  src="/furniture/image3.jpeg"
                   alt="rectangle" 
                   width={380}
                    height={300} 
                    className="w-full object-cover"/>
                   
                </div>

                {/* Second Column: Contains the second and seventh images */}
                <div className="flex flex-col  gap-4  justify-center">
                    {/* 2nd & 4th Image */}
                    <Image
                        src="/furniture/image2.jpeg"
                        alt="second image"
                        height={312}
                        width={500}
                        className=" w-full  object-cover"
                    />
                    <Image
                        src="/furniture/Rectangle4.png"
                        alt="seventh image"
                        height={242}
                        width={344}
                        className="-mb-12 object-cover"
                    />
                </div>

                {/* Third Column: Contains only the third image */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* 5th Image */}
                    <Image
                        src="/furniture/Rectangle5.png"
                        alt="third image"
                        height={392}
                        width={295}
                        className="w-full object-cover"
                    />
                </div>

                {/* Fourth Column: Contains the fourth and eighth images */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* 6th & 8th Image */}
                    <Image
                        src="/furniture/Rectangle6.png"
                        alt="fourth image"
                        height={348}
                        width={290}
                        className="w-full object-cover"
                    />
                    <Image
                        src="/furniture/Rectangle8.png"
                        alt="eighth image"
                        height={242}
                        width={178}
                        className="w-full object-cover"
                    />
                </div>

                {/* Fifth Column: Contains the fifth and ninth images */}
                <div className="flex max-sm:hidden flex-col gap-4 items-center justify-center">
                    {/* 7 & 9 Image */}
                    <Image
                        src="/furniture/Rectangle7.png"
                        alt="fifth image"
                        height={433}
                        width={425}
                        className="w-full object-cover"
                    />
                    <Image
                        src="/furniture/Rectangle9.png"
                        alt="ninth image"
                        height={196}
                        width={258}
                        className="w-full object-cover"
                    />
                </div>
            </div>
    
    
    
    </div>
  )
}

export default Furniture
