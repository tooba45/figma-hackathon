import Image from 'next/image'
import React from 'react'
import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Link from 'next/link';


const Product = () => {
  return (
    <div>
       <div>
        {/* Heading 1 */}
         <div className='mt-14'>
         <h1 className='flex justify-center font-bold text-[32px]'>Our Products</h1></div>


{/* Products list */}
         <div className='flex-col sm:gird-col-2 '>


            {/* 1st Raw */}
          <div className='flex justify-center flex-wrap  mt-8 ml-[40px] gap-[32px]'>



            {/* Syltherine */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
            
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image1.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
                        <div className='ml-[213px] pt-6'><Image src="/label/30Label.png" alt="" width={48} height={48}/></div>
               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Syltherine</h1>
              <p className='text-[#726f6f] mt-3'>Stylish cafe chair</p>
              <div className='flex mt-3 w-[249px]'>
              <h3 className='font-bold '>Rp 2.500.000</h3>
              <p className='text-[#726f6f] ml-4 line-through'>Rp 3.500.000</p>
              </div>
              </div>


               {/* Hover card */}
               <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>


            </div>


            {/* Leviosa */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image2.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Leviosa</h1>
              <p className='text-[#726f6f] mt-3'>Stylish cafe chair</p>
              <h3 className='font-bold mt-3 '>Rp 2.500.000</h3>
              </div>

           {/* Hover card */}
              <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>



            </div>


            {/* Lolito */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image3.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
                <div className='ml-[213px] pt-6'><Image src="/label/50Label.png" alt="" width={48} height={48}/></div>

               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Lolito</h1>
              <p className='text-[#726f6f] mt-3'>Luxury big sofa</p>
              <div className='flex mt-3 w-[249px]'>
              <h3 className='font-bold '>Rp 7.000.000</h3>
              <p className='text-[#726f6f] ml-4 line-through'>Rp 14.000.000</p>
              </div>
              </div>


              {/* Hover card */}
              <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>
         

            </div>



            {/* Respira */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image1.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
                        <div className='ml-[213px] pt-6'><Image src="/label/NewLabel.png" alt="" width={48} height={48}/></div>
               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Respira</h1>
              <p className='text-[#726f6f] mt-3'>Outdoor bar table and stool</p>
              <h3 className='font-bold mt-3 '>Rp 500.000</h3>
              </div>

           {/* Hover card */}
             <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>

            </div>








          
          
          </div>
         



          {/* 2nd Raw */}
          <div className='flex justify-center flex-wrap  mt-8 ml-[40px] gap-[32px]'>


            {/* Grifo */}
            <div className='w-[285px] h-[446px]  relative group bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image5.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Grifo</h1>
              <p className='text-[#726f6f] mt-3'>Night lamp</p>
              <h3 className='font-bold mt-3'>Rp 1.500.000</h3>
              </div>
      
              {/* Hover card */}
              <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>

            </div>


            {/* Muggo */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image6.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
                 <div className='ml-[213px] pt-6'><Image src="/label/NewLabel.png" alt="" width={48} height={48}/></div>

               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Muggo</h1>
              <p className='text-[#726f6f] mt-3'>Small mug</p>
              <h3 className='font-bold mt-3 '>Rp 150.000</h3>
              </div>

               {/* Hover card */}
               <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>
            </div>


            {/* Pingky */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image7.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
                <div className='ml-[213px] pt-6'><Image src="/label/50Label.png" alt="" width={48} height={48}/></div>

               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Pingky</h1>
              <p className='text-[#726f6f] mt-3'>Cute bed set</p>
              <div className='flex mt-3 w-[249px]'>
              <h3 className='font-bold '>Rp 7.000.000</h3>
              <p className='text-[#726f6f] ml-4 line-through '>Rp 14.000.000</p>
              </div>
              </div>

             {/* Hover card */}
             <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>
            </div>



            {/* Potty */}
            <div className='w-[285px] h-[446px] relative group  bg-[#F4F5F7]'>
              <div className='w-[285px] h-[301px]' style={{backgroundImage: "url('/products/image1.png')", 
                backgroundSize: 'cover', backgroundPosition: 'center',}}> 
                        <div className='ml-[213px] pt-6'><Image src="/label/NewLabel.png" alt="" width={48} height={48}/></div>
               </div>

               <div className='pl-4 '>
              <h1 className=' mt-4 font-bold text-[24px]'>Potty</h1>
              <p className='text-[#726f6f] mt-3'> Minimalist flower pot   </p>
              <h3 className='font-bold mt-3'>Rp 500.000</h3>
              </div>
       
              {/* Hover card */}
              <div className=' absolute  text-center p-4 inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
               <div className=" flex justify-center mt-32 items-center">
                <button className=' w-[200px] border-[2px] bg-white px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Add to card</button>
                </div>
               <div className='flex mt-4 justify-center text-white'>
               <IoShareSocial  className='w-[16px] h-[18px]'/> <p className='mr-4'>Share</p>
                  <MdCompareArrows className='w-[16px] h-[18px]'/> <p className='mr-4'>Compare</p>
                  <FaRegHeart className='w-[16px] h-[18px]' /><p className='mr-2'>Like</p>
                  </div>
                  </div>

            </div>


          </div>
         </div>



{/* Button */}
         <div className='mt-12  flex justify-center '>
          <Link href={"Shop"}>
  <button className=' w-[200px] border-[2px] px-6 py-[12px]  border-[#eccd82] text-[#c2952c]'>Show More</button>
  </Link>
</div>














       </div>
    </div>
  )
}

export default Product
