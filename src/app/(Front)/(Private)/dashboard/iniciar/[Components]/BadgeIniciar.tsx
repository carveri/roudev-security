import React from 'react'
import Link from "next/link";

import Image from "next/image";

const BadgeIniciar = ({el}) => {
  return (
    <div className='w-full h-12 flex bg-gray-50 items-center px-5 justify-between'>
        <div className='flex items-center'>
            <section className='mr-3 py-3 grid '>
                {<img 
                    src={el.icono}
                    width={20}
                    height={20}
                    alt={el.nombre}
                />}
            </section>
            <section className='mr-3'>
                {el.nombre}
            </section>
        </div>
        <section className='flex '>
            <input  className='cursor-pointer  w-4 h-4 ml-2' type="checkbox" />
        </section>
    </div>
  )
}

export default BadgeIniciar