'use client'

import React, { useEffect, useState } from 'react'
import { useIdProyectoPro, useProyectoPorUser } from '../../../../[stores]/homeStore'
import { getData } from '../../../../../React/Fetch/getData'
import { getDataLista } from '../../../../../React/Fetch/getDataLista'
import { postData } from '../../../../../React/Fetch/postData'
import { updateData } from '../../../../../React/Fetch/updateData'

//import { usePathname } from 'next/navigation'

const ModalAgregarUsuarios = ({setAbrirAgregar}) => {

    //const abrirTipos = false

    //const {proyectosUser, getProyectosUser} = useProyectoPorUser()
    const [usuarios, setUsuarios] = useState([])

    const idProyy = useIdProyectoPro((state) => state.idProyecto)

    const [proyecto, setProyecto] = useState([])


    const [abrirTipos, setAbrirTipos] = useState(false)
    const [abrirUsuario, setAbrirUsuario] = useState(true)

    const [imgPinchado, setImgPinchado] = useState('https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check2.png')
    const [pinchado, setPinchado] = useState('Email')

    const [usuariosAll, setUsuariosAll] = useState([])

    const [todos, setTodos] = useState([])
    const [empleado, setempleado] = useState([])


    const [activarChecked, setActivarChecked] = useState(false)

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

    //let todos1 = []
    //let inicio: string[] = []
    
    const handleClickUsarioClick =(e, id, nombre, apellido)=>{
        
        console.log({nombre});
        console.log('idddd:', id);
        
        setUsuario(nombre)
        setApellido(apellido)

        todos.push({"id":id})
        setTodos([...todos])

        //para empleados 
        empleado.push(id)
        setempleado([...empleado])
        // if(e.target.name === nombre){
        //     console.log('pincho el correctp');
            
        // }
        // else {
        //     console.log('mala la wea');
            
        // }


    }


    const traerProyecto = async()=>{
      const ruta = 'proyecto2'
      const url = idProyy
      const res = await getDataLista({ruta, url})
      setProyecto(res)
    }
    
    useEffect(()=>{
      traerProyecto()
    }, [])
  //console.log('proyecto es un objeto:', proyecto);
    

    //console.log('id del proyecto desde zustand: ', idProyy);

    const handleChangeCheckedUsers =(e)=>{
        if(e.target.value === 'on'){
            setActivarChecked(true)
        }
        //console.log(e.target.value);
        
    }

    const handleClickSeleccionarUsers = ()=>{
        console.log('todos al enviar desde el select:', 'x');
        //setTodos(todos)
    }


    const handleClickConfirmarAgregarUsuario =()=>{
        console.log('todos al enviar:', {todos});

        const ruta = 'proyecto'
        const id = idProyy
        const data={
           // nombreProyecto: "pro 3 del chino con los españoles",
            empleado: empleado,
            todos: todos
            
        }
        updateData({ruta, id, data})


        alert('usuarios agregados al proyecto !!')
        //console.log('que me da empleados:', empleado);
        location.reload()
        
        
        
    }
    
    

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
                    {proyecto[0]?.nombreProyecto}
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
                        <input  type="text" placeholder='juan@gmail.com' className='focus:outline-none pl-4 border border-gray-200 h-10 w-full'/>
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
                            return <button name={el?.primerNombre} onClick={(e)=>handleClickUsarioClick(e, el.id, el.primerNombre, el.apellidoPaterno)} key={el.id} className={`${abrirTipos && 'opacity-25'} border-b border-gray-100 hover:bg-blue-200 h-10 flex items-center pl-3 gap-x-2 cursor-pointer z-50 justify-between  w-[98%]`}>
                            <div className='flex items-center gap-x-2'>
                                <div>
                                    <img className='w-3 h-3' src={`${!el.avatar ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/poAdmin2.png': el?.avatar}`} alt="s" />
                                </div>
                                <div className='capitalize'>
                                    {el?.primerNombre} {el?.apellidoPaterno}
                                </div>
                                </div>
                                <input name={el?.primerNombre} id={el?.id} onChange={handleChangeCheckedUsers} checked={activarChecked} className='mr-2' type="checkbox" />
                        </button>
                        })}
                        <div className='w-full h-10 flex justify-end items-center'>
                            <button onClick={handleClickSeleccionarUsers} className='bg-blue-500 h-[70%] w-[25%] font-semibold cursor-pointer text-white rounded'>Seleccionar</button>
                        </div>
                        </div>
                        
                        }
                        
                        
                    </div>
                    </>
                }
            </section>
           
                  <div className='z-10 flex h-[75px] text-white  gap-x-2 justify-end font-semibold text-(length:--tamañoLetraChica)'>
                    <button onClick={handleClickConfirmarAgregarUsuario} type='button' className='bg-blue-500 w-[100px] h-[45%] rounded cursor-pointer'>
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