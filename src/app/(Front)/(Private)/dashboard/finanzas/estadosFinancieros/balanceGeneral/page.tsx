'use client'

import React from 'react'
import { dataTablaBalanceGeneral } from './utils/dataTablaBalanceGeneral'

const page = () => {


  const abrirModalTarea =(id)=>{
    console.log(id);
    
  }

  return (
    <div className='w-[75%] h-full  text-(length:--tamañoLetraChica) px-10'>
        <header className='w-full h-[7%]  flex items-center justify-center'>
            Balance General
        </header>
        <main className='w-full h-[93%] flex gap-x-16'>
            <article className=' w-[50%] '>
              <header className='w-full h-[6%]  grid place-items-center border-b border-gray-200'>
                Activo
              </header>
              <div className='w-full h-[44%] '>
                <header className='w-full h-[12%]  grid items-center pl-2  '>
                  Activo Corriente
                </header>
                
                  <main className='w-full h-[50%] '>
                                  {dataTablaBalanceGeneral.map((el)=>{
                                      if(el.masaPatrimonial === 'AC'){
                                          return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[25px]`}>
                                          <div className='  text-tamañoLetraChica'> 
                                              <article className='flex  px-2'>
                                                  <div className='w-[92%] grid justify-start'>
                                                      {el.nombreItem}
                                                  </div>
                                                  <div className='w-[8%] '>
                                                      <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                        ${el.valor}
                                                      </div>    
                                                  </div>
                                              </article>
                                          </div>
                                      </button>
                                      }
                                  })}
                              </main>
               
              </div>
              <div className='w-full h-[44%] '>
                <header className='w-full h-[12%]  grid items-center pl-2 '>
                  Activo NO Corriente
                </header>
                <main className='w-full h-[50%] '>
                                  {dataTablaBalanceGeneral.map((el)=>{
                                      if(el.masaPatrimonial === 'ANC'){
                                          return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[25px]`}>
                                          <div className='  text-(length:--tamañoLetraChica)'> 
                                              <article className='flex  px-2'>
                                                  <div className='w-[92%] grid justify-start'>
                                                      {el.nombreItem}
                                                  </div>
                                                  <div className='w-[8%] '>
                                                      <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                        ${el.valor}
                                                      </div>    
                                                  </div>
                                              </article>
                                          </div>
                                      </button>
                                      }
                                  })}
                              </main>
              </div>
              <div className='flex h-[6%] pl-2 font-semibold gap-x-2'>
                <div className='w-[80%]'>
                  Total Activo No Corriente
                </div>
                <div className='w-[20%] grid justify-end mr-2'>
                  $498762
                </div>
              </div>
            </article>



            <article className=' w-[50%]  '>
              <header className='w-full h-[6%]  grid place-items-center border-b border-gray-200'>
                Pasivo
              </header>
              <div className='w-full h-[29%] '>
                <header className='w-full h-[18%]  grid items-center pl-2'>
                  Pasivo Corriente
                </header>
                <main className='w-full h-[50%] '>
                                  {dataTablaBalanceGeneral.map((el)=>{
                                      if(el.masaPatrimonial === 'PC'){
                                          return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[25px]`}>
                                          <div className='  text-(length:--tamañoLetraChica)'> 
                                              <article className='flex  px-2'>
                                                  <div className='w-[92%] grid justify-start'>
                                                      {el.nombreItem}
                                                  </div>
                                                  <div className='w-[8%] '>
                                                      <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                        ${el.valor}
                                                      </div>    
                                                  </div>
                                              </article>
                                          </div>
                                      </button>
                                      }
                                  })}
                              </main>
              </div>
              <div className='w-full h-[29%] '>
                <header className='w-full h-[18%]  grid items-center pl-2 '>
                  Pasivo NO Corriente
                </header>
                <main className='w-full h-[50%] '>
                                  {dataTablaBalanceGeneral.map((el)=>{
                                      if(el.masaPatrimonial === 'PNC'){
                                          return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[25px]`}>
                                          <div className='  text-(length:--tamañoLetraChica)'> 
                                              <article className='flex  px-2'>
                                                  <div className='w-[92%] grid justify-start'>
                                                      {el.nombreItem}
                                                  </div>
                                                  <div className='w-[8%] '>
                                                      <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                        ${el.valor} 
                                                      </div>    
                                                  </div>
                                              </article>
                                          </div>
                                      </button>
                                      }
                                  })}
                              </main>
              </div>
              <div className='w-full h-[30%] '>
                <header className='w-full h-[18%]  grid items-center pl-2'>
                  Patrimonio
                </header>
                <main className='w-full h-[50%] '>
                                  {dataTablaBalanceGeneral.map((el)=>{
                                      if(el.masaPatrimonial === 'P'){
                                          return <button disabled={true} key={el.id} name={el.id} onClick={()=>abrirModalTarea(el.id)} className={`rounded w-full h-[25px]`}>
                                          <div className='  text-(length:--tamañoLetraChica)'> 
                                              <article className='flex  px-2'>
                                                  <div className='w-[92%] grid justify-start'>
                                                      {el.nombreItem}
                                                  </div>
                                                  <div className='w-[8%] '>
                                                      <div className={`rounded-full w-3 h-3 border border-gray-300  `}>
                                                        ${el.valor}
                                                      </div>    
                                                  </div>
                                              </article>
                                          </div>
                                      </button>
                                      }
                                  })}
                              </main>
              </div>
              <div className='flex h-[15%] pl-2 font-semibold'>
                <div className='w-[80%]'>
                  Total Pasivo y Patrimonio
                </div>
                <div className='w-[20%] grid justify-end mr-2'>
                  $343545
                </div>
              </div>
            </article>
        </main>
    </div>
  )
}

export default page