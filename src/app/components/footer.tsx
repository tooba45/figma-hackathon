import React from 'react'




const Footer = () => {
  return (
    <footer className=' bg-[#FFFFFF]'>
    <div className=' text-[#000000]  lg:flex gap-[87px] pt-[80px] h-[440px]'>

{/* Exclusive */}
      <div className='text-left max-sm:flex-col pl-[100px] '>
          <h1 className='font-bold max-sm:pl-20 text-2xl'>Funiro. </h1>
          <p className='pt-6 w-[285px] hidden h-[72px] text-neutral-400 text-[16px] mt-[24px]'>400 University Drive Suite 200 Coral Gables,
          FL 33134 USA</p>

          <p className='pt-2 lg:hidden max-sm:pl-18 max-sm:text-left h-[72px] text-neutral-400  mt-[20px]'>400 University Drive Suite 200 Coral Gables,</p>

          
      </div>

{/* Link */}
<div className='flex max-sm:flex-col max-sm:items-center max-sm:pt-5 gap-[87px]'>
  <div className='w-[175px] max-sm:text-center'>
  <h2 className='text-bold text-[20px] text-neutral-400'>Links</h2>
  <nav className='list-none'>
<li className='pt-5 hover:underline font-semibold  mt-[24px]'><a>Home</a></li>
<li className='pt-5 hover:underline font-semibold mt-[16px]'><a>shop</a></li>
<li className='pt-5 hover:underline font-semibold mt-[16px]'><a>About</a></li>
<li className='pt-5 hover:underline font-semibold mt-[16px]'><a >Contact</a></li>
</nav>
  </div>

{/* Help */}
  <div className='max-sm:hidden  w-[175px]'>
  <h2 className='text-bold text-[20px] text-neutral-400'>Help</h2>
  <nav className='list-none'>
<li className='pt-5 hover:underline font-semibold  mt-[24px]'><a>Payment Option</a></li>
<li className='pt-5 hover:underline font-semibold mt-[16px]'><a >Returns</a></li>
<li className='pt-5 hover:underline font-semibold mt-[16px]'><a>Privacy Policies</a></li>
</nav>
  </div>

{/* New Letter */}
<div className='w-[175px]'>
  <h2 className='text-bold max-sm:pl-12 text-[20px] text-neutral-400'>Newsletter</h2>

  <div className=' mt-[34px]  flex items-center    '>
              <input type="text" placeholder='Enter Your Email Address'
                 className=' border-[#000000] border-b-2 '/>
                 <button className='border-[#000000] max-sm:hidden ml-4 font-semibold border-b-2'>SUBSCRIBE</button>
            </div>

  </div>


</div>



    </div>




    <div className='max-sm:mt-80 border-t-[1px] pl-[100px]   border-t-neutral-200 h-[40px] text-[#000000]'>
      <p className='py-6 max-sm:text-center'> 2023 furino. All rights reverved</p>
    </div>
    </footer>
  )
}

export default Footer

