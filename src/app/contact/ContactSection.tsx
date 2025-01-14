import Image from "next/image"

const infoData =[
    {
        image:'/contact/Vector (1).png',
        title:"Address",
        description: "236 5th Avenue, New York NY10000, United States",
        description1 : ""
    },
    {
        image:'/contact/Vector (2).png',
        title:"Phone",
        description: "Mobile: +(84) 546-6789",
        description1 : "Mobile: +(84) 546-6789"
    },
    {
        image:'/contact/Vector (3).png',
        title:"Working Time",
        description: "Monday-Friday: 9:00 - 22:00",
        description1 : "Saturday-Sunday: 9:00 - 21:00"
    }
]


const ContactSection = () => {
  return (
    <div className="pt-[40px] lg:px-[70px] md:px-[40px] px-[20px]">
      {/* Main Heading */}
      <p className="text-center font-semibold text-[36px]">Get In Touch With Us</p>
     
     {/* Subheading */}
     <p className="text-center font-normal md:w-[55%] text-[16px] mx-auto text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
   

     {/* Conatct form */}
     <div className="lg:px[40px] pt-[50px] pb-[30px] w-full flex lg:justify-ceneter md:gap-5 lg:gap-0  md:justify-between flex-col md:flex-row">
  
     {/* Left section */}
    <div className="lg:w-[30%] pl-28 md:w-[50%]">
        {infoData.map((info, index) => (
         <div className="flex items-start gap-10 mb-10" key={index}>
         <Image src={info.image} alt={info.title} width={23} height={27.60} className="pt-[-60px]"/>
         <div>
            <p className="font-medium text-[24px]">{info.title}</p>
            <p className="font-medium text-[16px]">{info.description}</p>
            {info.description1 && (
                <p className="font-normal text-[16px]">{info.description1}</p>
            )}
         </div>
         </div>
        ))}

    </div>
       

       {/* Right Section */}
     <div className=" md:w-[50%]  flex flex-col items-start">
        <label className="text-sm">Your name</label>
        <input placeholder="ABC" className="mt-3 mb-5 px-7 py-4 w-96 border-2 rounded-md border-[#9F9F9F]"  />
        
        <label className="text-sm">Email address</label>
        <input placeholder="abc@gmail.com" className="mt-3 mb-5 px-7 w-96 py-4 rounded-md border-[#9F9F9F] border-2"  />
     
        <label className="text-sm">Subject</label>
        <input placeholder="This is an option" className="mt-3 mb-5 w-96 px-7 py-4 rounded-md border-[#9F9F9F] border-2"  />
     
        <label className="text-sm">Message</label>
        <textarea  placeholder="Hi i would like to ask about" className="mt-3 mb-5 rounded-md border-[#9F9F9F] px-7 py-4 w-96 border-2"  />
        <button className='bg-[#c2952c]  border-[#eccd82] rounded py-2  px-16 font-bold text-white'>Submit</button>

     
     </div>

     </div>

    </div>
  )
}

export default ContactSection
