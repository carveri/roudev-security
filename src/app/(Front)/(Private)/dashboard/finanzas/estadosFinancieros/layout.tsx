'use client'

import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { dataCabeceraEstadosFinancieros } from "./utils/dataCabeceraEstadosFinancieros";

 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  const router = useRouter()
  const pathname = usePathname()
  

  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[100%] h-[100%] '>
    <div className="w-[75%]  flex justify-end">
      <section className={`w-[32%] h-[4%] grid grid-cols-3  place-items-center  py-[6px] text-(length:--tamañoLetraChica)`}>
          {dataCabeceraEstadosFinancieros.map((el)=>{
            return <div onClick={()=>router.push(el.href)}   className={`cursor-pointer  h-[22px] hover:border-b hover:border-blue-300 flex gap-x-2 }
              ${pathname===el?.href || pathname===el?.href2 ? `border-b border-blue-500  duration-75  text-black`: ``}
              `} key={el.id}>
              <div>
                {<img src={el.icono} width={16} height={16} alt='sd' />}
              </div>
              <div className="text-(length:--tamañoLetraChica)">
                {el.nombre}
              </div>
            </div>
          })}
      </section>
    </div>
    <main className="w-full h-[90%] mt-3">
      {children}
    </main>
  </div>
</div>
}