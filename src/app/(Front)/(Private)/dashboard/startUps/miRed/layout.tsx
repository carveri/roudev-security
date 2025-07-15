'use client'


import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from 'next/navigation'

 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  const router = useRouter()

  const [activarFiltroStartUps, setActivarFiltroStartUps] = useState(false)


  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[95%] h-[95%] '>
    <header className='w-full h-[5%] font-semibold text-gray-600 text-tamañoLetra '>
      Mi Red de Contactos
    </header>
    
      <div className={`items-center flex justify-between   mr-2 w-[75%] bg-gray-100 text-gray-700 h-[5%] px-3 mb-1`}>
        <div className='flex items-center gap-x-2'>
          <img
            src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/retrospectiveSm.png'
            width={20}
            height={20}
            alt='as'
          />
          <div className="flex items-center gap-x-1">
            <div className="mr-1 text-tamañoLetraChica">
              StartUps
            </div>
            
          </div>
        </div>
    </div>
    <div className="w-[75%] h-[5%] flex items-center justify-end">
      
        <header className="w-full h-[7%] font-semibold text-gray-600 text-tamañoLetra">
          Mis Contactos
        </header>
        <section onClick={()=>setActivarFiltroStartUps(!activarFiltroStartUps)} className="mt-16 text-tamañoLetraChica px-2 cursor-pointer w-[9%] h-[4%] py-3 flex items-center justify-between border-b border-gray-200  duration-75   text-black">
            <div>
              Filtros
            </div>
            <div>
              <img className="w-3 h-3" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' alt="" />
            </div>
        </section>
        {activarFiltroStartUps && 
          <div>
            litsa de weas
          </div>
        }
    </div>
    <main className="w-[75%] h-[100%] mt-12 text-tamañoLetraChica">
      {children}
    </main>
    
      
        
        
    
  </div>
</div>
}