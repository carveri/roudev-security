'use client'

import React, { useEffect, useState } from 'react'
import { useIdProyectoPro, useProyectoPorUser } from '../../../../[stores]/homeStore'
import { getData } from '../../../../../React/Fetch/getData'
import { getDataLista } from '../../../../../React/Fetch/getDataLista'
import { postData } from '../../../../../React/Fetch/postData'

const ModalAgregarUsuarios = ({setAbrirAgregar}) => {

    //const abrirTipos = false

    //const {proyectosUser, getProyectosUser} = useProyectoPorUser()
    const [usuarios, setUsuarios] = useState([])

    const idProyy = useIdProyectoPro((state) => state.idProyecto)


    const [abrirTipos, setAbrirTipos] = useState(false)
    const [abrirUsuario, setAbrirUsuario] = useState(true)

    const [imgPinchado, setImgPinchado] = useState('https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check2.png')
    const [pinchado, setPinchado] = useState('Email')

    const [usuariosAll, setUsuariosAll] = useState([])

    //const clonUsuarioAll = [...usuariosAll]

    // traer usuarios
    const [usuario, setUsuario] = useState('')
    const [apellido, setApellido] = useState('')


    const formasDeInvitacion = [
        {
            id:'1',
            nombre: 'Email',
            icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check2.png',
        },
        {
            id:'2',
            nombre: 'Red',
            icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png',
        },
        {
            id:'3',
            nombre: 'Slack',
            icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
        },
        {
            id:'4',
            nombre: 'Teams',
            icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
        },

    ]

    const traerUsuarios = async()=>{
        const ruta = 'user'
        const traer = await getData({ruta})
        setUsuariosAll(traer)
    }

    const handleClickInvitar =(e, id, nombre, icono)=>{
        console.log({id});
        console.log({nombre});
        setPinchado(nombre)
        setImgPinchado(icono)
        traerUsuarios()



        setAbrirTipos(false)

        
        
    }

    // traer usuarios
    const handleChangeSearchRed =(e)=>{
        setUsuario(e.target.value)
        
    }

    const handleClickBiscarUsuario =(e)=>{
        e.preventDefault()
        const res = usuariosAll.filter((el)=>{
            return el.primerNombre.toLowerCase() === usuario.toLowerCase() || el.apellidoPaterno.toLowerCase() === usuario.toLowerCase()
        })
        setUsuariosAll(res)
    }
    

    //console.log({usuario});


    const handleClickUsarioClick =(e, id, nombre, apellido)=>{
        
        console.log({nombre});
        console.log({id});
        
        setUsuario(nombre)
        setApellido(apellido)


        const ruta = 'proyecto'
        const data = {

        }
        postData({ruta, data})
        setAbrirUsuario(!abrirUsuario)
        
    }
    

    console.log('id del proyecto desde zustand: ', idProyy);
    
    

  return (
    <div className='w-[25%] h-[700px] -mt-[650px]  text-(length:--tamañoLetraChica) px-8'>
        <header className='h-[15%] grid place-items-center font-semibold text-blue-600'>
            Agregar Usuarios al Proyecto
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
            <section className='h-[400px] '>
                <div className='mb-2 '>
                    Invitar por:
                </div>
                <div className='border mb-[2px] justify-between px-2 border-gray-200 hover:bg-gray-100 cursor-pointer h-10 flex items-center pl-3' onClick={()=>setAbrirTipos(!abrirTipos)}>
                    <div className='flex items-center gap-x-2 '>
                        <div>
                            <img className='w-4 h-4' src={`${!imgPinchado ?'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png': imgPinchado}`} alt="as" />
                        </div>
                        <div>
                            {pinchado}
                        </div>
                    </div>
                    <div>
                        <img className='w-[10px] h-[10px]' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="zx" />
                    </div>
                </div>
                {abrirTipos &&
                    <>
                        <div className=' w-[20%] z-50 ml-80 absolute  left-3/5 max-h-[120px] overflow-auto bg-white'>
                            {formasDeInvitacion.map((el)=>{
                            return <div  key={el.id} onClick={(e)=>handleClickInvitar(e,el.id, el.nombre, el.icono)} className='bg-white pl-4 h-9 gap-x-2 z-50 flex items-center mb-2 capitalize cursor-pointer hover:bg-gray-100'>
                            <div>
                                <img className='w-4 h-4' src={`${el.icono}`} alt="s" />
                            </div>
                            <div>
                                {el.nombre}
                            </div>
                        </div>
                    })}
                    </div>
                    </>
                    
                }
                {pinchado ==='Email' &&
                    <div className=' h-20 mt-2 z-10'>
                        <input  type="text" placeholder='juan@gmail.com' className='pl-4 border border-gray-200 h-10 w-full'/>
                    </div>
                }

                {pinchado ==='Slack' &&
                    <div>
                        soy slack
                    </div>
                }   

                {pinchado === 'Teams' &&
                    <div>
                        soy de teams
                    </div> 
                }
                {pinchado === 'Red' && 
                    <>
                    
                    <div className='h-20 mt-2 z-10'>
                        <form className='flex justify-between h-10 w-full border  border-gray-200'>
                            <input value={usuario}  onChange={handleChangeSearchRed} className='focus:outline-none hover:shadow-sm  h-10 w-full pl-3' type="text"  placeholder='Juan gomez'/>
                            <button type='sumbit'  onClick={handleClickBiscarUsuario} className='grid place-items-center w-8 cursor-pointer hover:bg-gray-300'>
                                <img className='w-3 h-3' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png" alt="s" />
                            </button>
                        </form>
                        {abrirUsuario &&
                        
                            <div className='absolute w-[19.7%]   max-h-[240px] overflow-auto'>
                            {usuariosAll.map((el)=>{
                            return <div onClick={(e)=>handleClickUsarioClick(e, el.id, el.primerNombre, el.apellidoPaterno)} key={el.id} className='border-b border-gray-100 hover:bg-gray-200 h-10 flex items-center pl-3 gap-x-2 cursor-pointer z-50   w-[98%]'>
                            <div>
                                <img className='w-3 h-3' src={`${!el.avatar ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/poAdmin2.png': el?.avatar}`} alt="s" />
                            </div>
                            <div className='capitalize'>
                                {el?.primerNombre} {el?.apellidoPaterno}
                            </div>
                        </div>
                        })}
                        <div className='w-full h-10 flex justify-end items-center'>
                            <button className='bg-blue-500 h-[70%] w-[25%] font-semibold cursor-pointer text-white rounded'>Seleccionar</button>
                        </div>
                        </div>
                        
                        }
                        
                        
                    </div>
                    </>
                }
            </section>
           
                  <div className='z-10 flex h-[75px] text-white  gap-x-2 justify-end font-semibold text-(length:--tamañoLetraChica)'>
                    <button type='button' className='bg-blue-500 w-[100px] h-[45%] rounded cursor-pointer'>
                        Confirmar
                    </button>
                    <button type='button' onClick={()=>setAbrirAgregar(false)} className='bg-black w-[60px] h-[45%] rounded cursor-pointer'>
                        Cerrar
                    </button>
                  </div>
        </main>
    </div>
  )
}

export default ModalAgregarUsuarios