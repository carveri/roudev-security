'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import ModalCrearProyecto from '../dashboard/[Components]/ModalCrearProyecto';
import { getDataLista } from "../../React/Fetch/getDataLista";
import { useIdProyectoPro, useNombreProyectoPro } from "../[stores]/homeStore";

const ModalFinanzas = ({setActivar, session}) => {
    

    const [abrirModal, setAbrirModal] = useState(false)
    const [misProyectos, setMisProyectos] = useState([])

    const idProSeleccionado = useIdProyectoPro((state) => state.updateIdProyecto)
    
        const nombreProSeleccionado = useNombreProyectoPro((state) => state.updateNombreProyecto)


    const router = useRouter()
    
        const handleClickSelecMisProyectos =(e, id, nombrePro)=>{
                e.preventDefault()
                // GUARDAR ESTE ID EN UNA STORE DE ZUSTAND, para despues llamar todo lo demas con esa id
                console.log('idproyectoseleccionado:', id);
                idProSeleccionado(id)
                nombreProSeleccionado(nombrePro) 
                
                setActivar(false)
                router.push('/dashboard/finanzas')
            }

        const handleClickAbrirModalCrearProyecto =()=>{
            setAbrirModal(!abrirModal)
            //setActivar(false)
        }

        useEffect(()=>{
                const traerMisProyectos =async()=>{
                    const ruta = 'proyectoUser'
                    // el id del user lo voy a traer desde la store de zustand
                    const url = session?.user?.id
                    const getMisProyectos = await getDataLista({ruta, url})
                    setMisProyectos(getMisProyectos)
                }
                    
                traerMisProyectos()
                },[])
        
  return (
    <div className='w-[15%] h-[40%] z-50 fixed top-[283px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[30%] '>
            <header className='w-full h-[30%] flex px-3'>
                <div className='w-[85%] grid items-center '>
                    Finanzas
                </div>
                <div onClick={()=>setActivar(false)} className='w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
            <article className='w-full h-[60%]  flex py-1 justify-center'>
                <div className='w-[10%] h-full grid place-items-center'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={11} height={11} alt='as' />
                </div>
                <div className='w-[90%] h-full  grid  items-center py-3'>
                    <input type="text" placeholder="Buscar Mis Equipos" className="w-[93%] pl-2 border border-gray-200 h-full rounded"/>
                </div>
            </article>
        </section>
        <section className='w-[93%] h-[60%] -mt-1'>
            <ul className='flex-col justify-start z-50  max-h-[81%] overflow-auto'>
                {misProyectos[0]?.proyectos?.map((el)=>{
                    return <button onClick={(e)=>handleClickSelecMisProyectos(e, el.id, el.nombreProyecto)} className='w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100' key={el.id}>
                        <img className="flex -mt-1"  src={el?.iconoProyecto ? el.iconoProyecto: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/medicina.png'} width={15} height={15} alt="sd"/>
                        <div>
                            {el.nombreProyecto}
                        </div>
                    </button>
                })}
            </ul>
        </section>
        <section  className='w-full   cursor-pointer  h-[12%] border-t border-gray-200 flex items-end  pl-2 '>
            <button onClick={handleClickAbrirModalCrearProyecto} className="pl-2 gap-x-2 rounded hover:border-b hover:border-blue-500  flex h-[90%] items-center py-1  w-[50%]  text-black  ">
                <div className="w-[9%]  grid items-center">
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' width={15} height={15} alt="s"/> 
                </div>
                <div className="w-[93%]  text-tamañoLetraChica  flex items-center text-gray-800 ">
                    Crear un Proyecto
                </div> 
            </button>
        </section>
        {abrirModal &&
            <div className='w-full h-full flex justify-end ml-5 mt-40'>
                <ModalCrearProyecto
                abrirModal={abrirModal} 
                setAbrirModal={setAbrirModal}
                posicion=''
                session={session}
            
            />
            </div>
        }
    </div>
  )
}

export default ModalFinanzas