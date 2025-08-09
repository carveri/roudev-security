'use client'

import Star from "@/app/(Front)/React/Components/Figuras/Star";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";


interface IBadgeStore {
        id: string,
        nombrePlugin: string,
        imagenPlugin: StaticImageData,
        departamentoPlugin: string,
        calificacion: number,
        descripcionPlugin: string
}

export interface IEBadgeStore {
  el: IBadgeStore
}

const estrellas = [1,2,3,4,5]




const BadgeStore = ({el}:IEBadgeStore) => {

  const router = useRouter()

  const handleClickVerPlugin =()=>{
    router.push('/dashboard/store/VerPlugin')
  }


  return (
    <div className='border border-gray-200 w-full h-72 text-tamañoLetra p-2 bg-white'>
      <section className='w-full h-[40%]  flex '>
        <article className='w-[25%]  grid place-content-center'>
          <img
            alt="as"
            src={el.imagenPlugin}
            width={55}
            height={55}
          
          />
        </article>
        <article className='w-[75%]  pl-3 grid grid-rows-3 py-2 '>
          <div className="font-semibold text-tamañoLetra text-colorTextoTitulo1">
            {el?.nombrePlugin}
          </div>
          <div className="">
           <div>
            {el.departamentoPlugin}
           </div>
            
          </div>
          <div className="flex">
            <div className="pr-2">
              <img 
              src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/star.png'
              width={20}
              height={20}
              alt="as"
              alt="sd" />
             
            </div> 
            ({el.calificacion})
            </div>
        </article>
      </section>
      <section className='w-full h-[35%] mt-4'>
          {el.descripcionPlugin}
      </section>
      <section className='w-full h-[35%] flex justify-end pr-2 text-tamañoLetra'>
        <button onClick={handleClickVerPlugin} className="cursor-pointer w-12 h-9 bg-gray-100 text-tamañoLetraChica rounded mr-2 text-colorTextoTitulo1 font-semibold">
          Ver
        </button>
        <button className="cursor-pointer w-24 h-9 bg-gradient-to-r from-green-400 to-[#01b307] text-tamañoLetraChica rounded text-white font-semibold">
          Comprar
        </button>
      </section>
    </div>
  )
}

export default BadgeStore