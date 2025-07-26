'use client'

import React from 'react'
import { dataTablaEstadoDeResultados } from './utils/dataTablaEstadoDeResultados'
import { dataTablaTesoreria } from './utils/dataTablaTesoreria'

const page = () => {

  const abrirModalTarea =(id)=>{
    console.log(id);
    
  }

  return (
    <div className='w-[75%] h-full text-(length:--tamañoLetraChica)'>
        <header className='w-full h-[7%]  flex items-center justify-center'>
            Estado de Resultados
        </header>
        <main className='w-full h-[93%] flex  gap-x-10 px-10'>
           <section className='w-[50%]  px-4'>
            <header className='w-full h-10 grid place-items-center '>
              Estado de Resultados
            </header>
                                             {dataTablaEstadoDeResultados.map((el)=>{
                                                 
                                                     return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[45px]`}>
                                                     <div className='  text-(length:--tamañoLetraChica)'> 
                                                         <article className='flex  px-2'>
                                                             <div className='w-[80%] grid justify-start'>
                                                                 {el.nombreItem}
                                                             </div>
                                                             <div className='w-[20%] '>
                                                                 <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                                   ${el.valor}
                                                                 </div>    
                                                             </div>
                                                         </article>
                                                     </div>
                                                 </button>
                                                 }
                                             )}
                                         </section>
                                         <section className='w-[50%]  px-4'>
                                         <header className='w-full h-10 grid place-items-center '>
                                            Cuenta de Tesoreria
                                          </header>
                                             {dataTablaTesoreria.map((el)=>{
                                                 
                                                     return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[45px]`}>
                                                     <div className='  text-(length:--tamañoLetraChica)'> 
                                                         <article className='flex  px-2'>
                                                             <div className='w-[80%] grid justify-start'>
                                                                 {el.nombreItem}
                                                             </div>
                                                             <div className='w-[20%] '>
                                                                 <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                                   ${el.valor}
                                                                 </div>    
                                                             </div>
                                                         </article>
                                                     </div>
                                                 </button>
                                                 }
                                             )}
                                         </section>
        </main>
    </div>
  )
}

export default page