'use client'

import Image from "next/image";

// import logo from "../../../React/Assets/Icons/retrospectiveSm.png";
// import lapiz from "../../../React/Assets/Icons/lapiz.png";
// import eliminar from "../../../React/Assets/Icons/eliminar.png";
//import { dataCabecera } from './../../dashboard/utils/dataSidebar';
import { useRouter } from "next/navigation";
import { dataCabecera } from "../proyectos/utils/dataCabecera";
import { dataCabeceraIniciar } from "../iniciar/utils/dataCabeceraIniciar";

//import { dataCabeceraIniciar } from "./utils/dataCabeceraIniciar";
import { usePathname } from 'next/navigation'
import { dataCabeceraHome } from "../home/utils/dataCabeceraHome";
import { dataCabeceraPerfil } from "./utils/dataCaberaPerfil";


 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  const router = useRouter()

  //console.log('sdsd' , dataCabecera.length);
  
  
  const pathname = usePathname()
  

  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[95%] h-[90%] '>
    <header className='w-full h-[5%] font-semibold text-gray-600 text-(length:--tamañoLetra) '>
      Perfil
    </header>
    <div className="w-full  h-[5%] flex">
      <div className={`items-center flex justify-between    w-[75%] bg-gray-100 text-gray-700 h-full px-3 mb-1`}>
        <div className='flex items-center gap-x-2'>
          <img
            src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/retrospectiveSm.png'
            width={20}
            height={20}
            alt='as'
          />
          <div className="text-(length:--tamañoLetraChica)">
          Jorge Gomez Figueroa
          </div>
        </div>
        
        <div className="flex gap-x-2">
          <div className="cursor-pointer">
            <img
                src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png'
                width={15}
                height={15}
                alt='as'
              />
          </div>
          <div className="cursor-pointer">
          <img
                src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png'
                width={15}
                height={15}
                alt='as'
              />
          </div>
        </div>

    </div>
    <div className="w-[25%] h-full">
      
    </div>
    </div>
    <section className={`w-[31%] h-[4%] grid grid-cols-5 place-items-center  py-[12px] `}>
        {dataCabeceraPerfil.map((el)=>{
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
    <main className="w-full h-[78%] mt-7">
      {children}
    </main>
    <div className="w-[75%] h-[10%] flex justify-end items-start">
      <button onClick={()=>router.push('/dashboard/home/individual/cofounders')} className="text-(length:--tamañoLetraChica) font-semibold w-[7%] h-[40%] bg-violet-500 text-white">
        Volver
      </button>
    </div>
  </div>
</div>
}