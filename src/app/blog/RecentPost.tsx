import Image from "next/image"

const RecentPostData = [
    {
        image: '/recentpost/recent1.png',
        title: 'Going all-in with millennial design',
        date: '03 Aug 2022'
    },
    {
        image: '/recentpost/recent2.png',
        title: 'Exploring new ways of decorating',
        date: '03 Aug 2022'
    },
    {
        image: '/recentpost/recent3.png',
        title: 'Handmade pieces that took time to make',
        date: '03 Aug 2022'
    },
    {
        image: '/recentpost/recent4.png',
        title: 'Modern home in milan',
        date: '03 Aug 2022'
    },
    {
        image: '/recentpost/recent5.png',
        title: 'Colorful office redesign',
        date: '03 Aug 2022'
    },
]


const RecentPost = () => {
  return (
    <div className="flex items-center pr-[80px] space-y-7 flex-col w-[100%] justify-center  ">
    <h2 className="text-left text-[24px] font-medium">Recent Posts</h2>
    {RecentPostData.map((post,index)=>(
    <div className="flex justify-between gap-3 items-center " key={index}>
    <Image src={post.image} alt={post.title} width={80} height={80}/>
    <div className="w-[119px] sapce-y-2"> 
        <p className="font-normal text-[14px]">{post.title}</p>
        <p className="font-normal text-[14px] text-[#9F9F9F]">{post.date}</p>

    </div>
    
    </div>
    ))}
    </div>
  )
}

export default RecentPost
