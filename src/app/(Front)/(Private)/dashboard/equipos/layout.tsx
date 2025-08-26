'use client'

import { useRouter } from "next/navigation";
import { dataCabecera } from "../proyectos/utils/dataCabecera";
import { dataCabeceraIniciar } from "../iniciar/utils/dataCabeceraIniciar";
import { dataCabeceraHome } from "../home/utils/dataCabeceraHome";
import { dataCabeceraEquipos } from "../home/utils/dataCabeceraEquipos";
//import { dataCabeceraHome } from "./utils/dataCabeceraHome";
//import { dataCabeceraIniciar } from "./utils/dataCabeceraIniciar";


 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  const router = useRouter()

  //console.log('sdsd' , dataCabecera.length);
  
  const wcabecera = 40
  

  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[95%] h-[95%] '>
    <header className='w-full h-[5%] font-semibold text-gray-600 text-tamañoLetra '>
      Equipos
    </header>
    <div className={`items-center flex justify-between   mr-2 w-[75%] bg-gray-100 text-gray-700 h-[5%] px-3 mb-1`}>
      <div className='flex items-center gap-x-2'>
        <img
          src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/retrospectiveSm.png'
          width={20}
          height={20}
          alt='as'
        />
        <div className="flex">
            <div className="mr-1 text-tamañoLetraChica">
              Chipax 
            </div>
            <div className="font-semibold text-green-500 text-tamañoLetraChica">
              - Team 1
            </div>
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
    <section className={`w-[35%] h-[4%]  grid grid-cols-5 place-items-center`}>
        {dataCabeceraEquipos.map((el)=>{
          return <div onClick={()=>router.push(el.href)}  className='cursor-pointer hover:border-b h-[22px] hover:border-blue-300 flex gap-x-2' key={el.id}>
            <div>
              {<img src={el.icono} width={20} height={20} alt='sd' />}
            </div>
            <div className="text-tamañoLetraChica">
              {el.nombre}
            </div>
          </div>
        })}
    </section>
    <main className="w-full h-[80%] mt-7">
      {children}
    </main>
  </div>
</div>
}