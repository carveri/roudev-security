'use client'

import Image from 'next/image'
import {useState, useEffect} from 'react'
import cruz from "../../React/Assets/Icons/cruz3.png";
import lupa from "../../React/Assets/Icons/iconoLupa.png";
import mas from "../../React/Assets/Icons/mas.png";
import { dataMisProyectos } from '../dashboard/home/misProyectos/utils/dataMisProyectos';
import { useRouter } from "next/navigation";
import ModalCrearProyecto from '../dashboard/[Components]/ModalCrearProyecto';
import { getData } from "../../React/Fetch/getData";

const ModalIniciar = ({setActivar}) => {

    const [abrirModal, setAbrirModal] = useState(false)

    const [dataMisProyectos, setDataMisProyectos] = useState([])

    const router = useRouter()
    
        const handleClickSelectIniciar =(e)=>{
            e.preventDefault()
            setActivar(false)
            router.push('/dashboard/iniciar')
        }

        const handleClickAbrirModalCrearProyecto =()=>{
            setAbrirModal(!abrirModal)
            //setActivar(false)
        }

    // traer todos los proyectos 
    useEffect(()=>{
        const traerData = async()=>{
            const ruta = 'proyecto'
            const res = await getData({ruta})
            setDataMisProyectos(res)
        }
        traerData()
    }, [])

  return (
    <div className='w-[15%] h-[40%]  fixed top-[100px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-tamañoLetraChica'>
        <section className='w-full h-[30%] '>
            <header className='w-full h-[30%] flex px-3'>
                <div className='w-[85%] grid items-center '>
                    Selecciona Un Proyecto 
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
                    <input type="text" placeholder="Buscar Mis Proyectos" className="w-[93%] pl-2 border border-gray-200 h-full rounded"/>
                </div>
            </article>
        </section>
        <section className='w-[93%] h-[60%] -mt-1 '>
            <ul className='flex-col justify-start z-50  max-h-[80%] overflow-auto'>
                {dataMisProyectos.map((el)=>{
                    return <button onClick={handleClickSelectIniciar} className='w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100' key={el.id}>
                        <img className="flex -mt-1" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png' width={15} height={15} alt="sd"/>
                        <div>
                            {el.nombreProyecto}
                        </div>
                    </button>
                })}
            </ul>
        </section>
        <section  className='w-full   cursor-pointer  h-[12%] border-t border-gray-200 flex items-end  pl-2 '>
            <button onClick={handleClickAbrirModalCrearProyecto} className="pl-2 gap-x-2 rounded  hover:shadow-xl flex h-[90%] items-center py-1  w-[60%]  text-black  ">
                <div className="w-[9%]  grid items-center">
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' width={15} height={15} alt="s"/> 
                </div>
                <div className="w-[93%]  text-tamañoLetraChica  flex items-center text-gray-800 ">
                    Crear un Proyecto
                </div> 
            </button>
        </section>
        {abrirModal &&
            <div className='w-full h-full flex justify-end ml-5  '>
                <ModalCrearProyecto
                abrirModal={abrirModal} 
                setAbrirModal={setAbrirModal}
                posicion=''
            
            />
            </div>
        }
    </div>
  )
}

export default ModalIniciar