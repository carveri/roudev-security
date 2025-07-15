'use client'

import { dataSidebar } from '../../(Private)/dashboard/utils/dataSidebar'

import { usePathname } from 'next/navigation'

const Sidebar = ({handleClickSidebar}) => {
   
    const pathname = usePathname()
    
  return (
    <aside  className='w-full h-full'>
        {dataSidebar.map((el)=>{
            return <button   onClick={(e)=>handleClickSidebar(e, el.href)} name={el.nombre}   className={`hover:bg-gray-200 cursor-pointer  w-full h-[7%] flex items-center justify-center  }
                ${pathname===el.href || pathname===el.href2 || pathname===el.href3 || pathname===el.href4 || pathname===el.href5 || pathname===el?.href6 || pathname===el.href7 || pathname===el.href8 || pathname===el.href9 ? `border-1 bg-gray-200 duration-75 text-white`: ``}
                `} key={el.id}>
                <div>
                <img name={el.nombre} src={el.icono} width={19} height={19} alt='as' />
                </div>
            </button>
        })}
    </aside>
  )
}

export default Sidebar