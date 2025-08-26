import React from 'react'
import { IDataCuadrosHome } from '../../../../../Interfaces/IHome'


const ComHome = ({id, nombre, icono, numero}:IDataCuadrosHome) => {
  return (
        <section className='w-full h-full rounded shadow-sm border border-gray-100 py-1  '>
            <article className='w-full h-full flex px-2 '>
                <div className='w-[25%] grid place-content-center'>
                    <img src={icono} width={23} height={23} alt={nombre}/>
                </div>
                <div className='w-[75%] grid items-center pl-4'>
                    <div className=''>
                        {nombre}
                    </div>
                    <div className='font-semibold text-blue-700 ml-[50px]'>
                        {numero}
                    </div>
                </div>
            </article>
            
        </section>
    
  )
}

export default ComHome