'use client'

import React, { useState } from 'react'
import { useProyectoPorUser } from '../../../../[stores]/homeStore'

const ModalAgregarUsuarios = ({setAbrirAgregar}) => {

    //const abrirTipos = false

    //const {proyectosUser, getProyectosUser} = useProyectoPorUser()

    const [abrirTipos, setAbrirTipos] = useState(false)


    

  return (
    <div className='w-[25%] h-[700px] -mt-[650px]  text-(length:--tamañoLetraChica) px-8'>
        <header className='h-[15%] grid place-items-center font-semibold text-blue-600'>
            Agregar Usuarios
        </header>
        <main className='h-[70%]'>
            <section>
                <div>
                    Nombre del Proyecto: 
                </div>
                <div className='h-12 flex items-center ml-2 capitalize'>
                    proyectooo 1
                </div>
            </section>
            <section>
                <div>
                    Creador del Proyecto: 
                </div>
                <div className='h-12 flex items-center ml-2 capitalize'>
                    Juan Perez
                </div>
            </section>
            <section>
                <div>
                    Invitar por Slack: 
                </div>
                <div className='h-10  flex items-center mb-2 pl-2 capitalize cursor-pointer hover:bg-gray-100'>
                    Conectar +
                </div>
            </section>
            <section>
                <div>
                    Invitar por email: 
                </div>
                <div className='h-12 flex items-center  capitalize'>
                    <input className='h-10 pl-2 w-full border border-gray-100' type="text"  placeholder='juan@gmail.com'/>
                </div>
            </section>
            <div className='grid'>
                    <label className='h-1 text-gray-600 pb-5' htmlFor="">Invitar desde la Red</label>
                    <button  name='selectMisProyectos' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        <div>
                          SD     
                        </div>
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>                    
                    </button>
                    {abrirTipos &&
                      <ul className="mt-[60px] w-[81%] z-50  -ml-[225px] absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {/* {proyectosUser[0]?.proyectos.map((el)=>{
                          return <button  onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreProyecto)} name="vselectMisProyectos" key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                                <img src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/resumen5.png': el?.iconoProyecto}`} width={15} height={15} alt="sd"/>
                            </div>
                            <div className="">                            
                                  {el.nombreProyecto}
                            </div>
                          </button>
                        })} */}
                        <button onClick={()=>setAbrirTipos(!abrirTipos)} className=" mt-2 mr-2 bg-blue-500 text-white rounded font-semibold px-3 py-1 flex justify-self-end">Seleccionar</button>
                      </ul>
                    }
                  </div>

                  <div className='flex h-[15%] text-white mt-40 gap-x-2 justify-end font-semibold text-(length:--tamañoLetraChica)'>

                    <button className='bg-blue-500 w-[100px] h-[50%] rounded cursor-pointer'>
                        Confirmar
                    </button>
                    <button onClick={()=>setAbrirAgregar(false)} className='bg-black w-[60px] h-[50%] rounded cursor-pointer'>
                        Cerrar
                    </button>

                  </div>
        </main>
    </div>
  )
}

export default ModalAgregarUsuarios