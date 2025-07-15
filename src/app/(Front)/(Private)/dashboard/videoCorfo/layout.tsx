'use client'

// import Image from "next/image";

// import logo from "../../../React/Assets/Icons/retrospectiveSm.png";
// import lapiz from "../../../React/Assets/Icons/lapiz.png";
// import eliminar from "../../../React/Assets/Icons/eliminar.png";
//import { dataCabecera } from './utils/dataCabecera';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { dataCabecera } from "../proyectos/utils/dataCabecera";
import { dataCabeceraVideo } from "./utils/dataCabeceraVideo";

 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  const router = useRouter()
  
    const pathname = usePathname()

  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[95%] h-[95%] '>
    <header className='w-full h-[5%] font-semibold text-gray-600 text-tamañoLetra '>
      Video Postulación Semilla Inicia de Corfo
    </header>
    <div className="w-full  h-[5%] flex ">
      

    </div>
    <section className={`w-[32%] h-[4%] py-[11px]  grid grid-cols-5 place-items-center `}>
        {dataCabeceraVideo.map((el)=>{
          return <button type='button' name={el.nombre} onClick={()=>router.push(el.href)}   className={`cursor-pointer h-[22px] hover:border-b hover:border-blue-300  flex gap-x-2 }
                      ${pathname===el?.href? `border-b border-blue-500  duration-75   text-black`: ``}
                      `} key={el.id}>
                      <div>
                        {<img src={el.icono} width={14} height={14} alt='sd' />}
                      </div>
                      <div className="text-tamañoLetraChica">
                        {el.nombre}
                      </div>
                  </button>
        })}
    </section>
    <main className="w-full h-[80%] mt-7 ">
      {children}
    </main>
  </div>
</div>
}