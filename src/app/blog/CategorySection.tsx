import { FiSearch } from "react-icons/fi";



const Categories = [
    {
        title: 'Crafts',
        number: '2'
    },
    {
        title: 'Design',
        number: '8'
    },
    {
        title: 'Handmade',
        number: '7'
    },
    {
        title: 'Interior',
        number: '1'
    },
    {
        title: 'Wood',
        number: '6'
    },
]

const CategorySection = () => {
    return(
        <div className="flex items-center flex-col justify-center pr-[80px] space-y-10">
             
      <div className='relative flex items-center   '>
      <input type="text"  className='pl-6 py-2 border-2 rounded border-[#9F9F9F] w-[280px] bg-[#F7F7F7] '/>
      <FiSearch  className='absolute ml-60 h-[24px] w-[24px]' />
       </div>
       <h2 className="font-medium text-[24px] text-left w-[90%]">Categories</h2>
       {Categories.map((category,index) =>(
        <div className="flex justify-between items-center w-[90%]" key={index}>
         <p className="text-[16px] text-[#9F9F9F] font-normal"> {category.title}</p>
         <p className="text-[16px] text-[#9F9F9F] font-normal"> {category.number}</p>

             </div>
       ))}

        </div>
    )
}

export default CategorySection