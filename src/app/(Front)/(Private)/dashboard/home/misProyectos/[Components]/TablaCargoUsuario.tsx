'use client'

import {useState} from 'react'
import { useRouter } from "next/navigation";
import ModalCrearEquipo from '../../../[Components]/ModalCrearEquipo';
import ModalUpdateCargo from './ModalUpdateCargo';

const TablaCargoUsuario = ({usersOnProyectos}) => {

    const router = useRouter()

    const [activarCargos, setActivarCargos] = useState(false)
    const [abrirModalUpdateCargo, setabrirModalUpdateCargo] = useState(false)

    const activarEliminar = false

    const ruta = false

    console.log('los users desde la tabla intermedia:', usersOnProyectos);

    const usuarios =[
        {
            id:'1',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Ceo',
            permisos: 'ELiminar Proyecto/Modificar Proyecto/Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },
        {
            id:'2',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Administrador',
            permisos: 'Modificar Proyecto/Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },
        {
            id:'3',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Administrador',
            permisos: 'Modificar Proyecto/Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },
        {
            id:'4',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Desarrollador',
            permisos: 'Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },
        {
            id:'5',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Desarrollador',
            permisos: 'Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },
        {
            id:'6',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Desarrollador',
            permisos: 'Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },
        {
            id:'7',
            avatar: null,
            primerNombre: 'Juan',
            apellidoPaterno: 'Robles',
            cargo: 'Desarrollador',
            permisos: 'Craer Tareas/Eliminar Tareas/ Modificar Tareas'

        },

    ]


    

    const handleClickAbrirUpdateCargo =()=>{
      setabrirModalUpdateCargo(!abrirModalUpdateCargo)
    }


  return (
        <>
          <table className={`${activarEliminar ? 'opacity-15': ''} border border-gray-200   w-full  z-40   max-h-[30px] overflow-auto `}>
            <thead className=''>
              <tr className='h-10 bg-gray-100 '>
                <td className='w-[7%] text-center'>Numero</td>
                <td className='w-[7%]  text-center'> Avatar</td>
                <td className='w-[15%] text-center'>Nombre Usuario</td>
                <td className='w-[15%] text-center'>Cargo</td>
                <td className='w-[50%] text-center'>Permisos</td>  
                <td className='w-[7%] text-center'></td>  
                
              </tr>
            </thead>
            <tbody>
              {usersOnProyectos.map((el, items)=>{
                  return <tr onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }   className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-10`}>
                    <td  className='text-center '>
                      {items + 1}
                    </td>
                    <td className='w-full h-10 grid place-content-center '>
                      <img className='w-5 h-5' src={`${!el?.avatar ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png': el?.avatar} `} alt="sd" />
                    </td>
                    <td className='text-center capitalize'>
                      {el?.user?.primerNombre} {el?.user?.apellidoPaterno}
                    </td>
                    <td className='text-center capitalize'>
                      {el?.cargo}
                    </td>
                    <td className='text-center'>
                      Todos los permisos, despues los voy a traer
                    </td>
                    <td onClick={handleClickAbrirUpdateCargo} className='hover:border-b hover:border-gray-800 cursor-pointer flex justify-center py-2'>
                      <img className='w-3 h-3' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png" alt="zx" />
                    </td>

                    
                  </tr>
                })}
            </tbody>
        </table>
        <div className=' ml-[950px] -mt-52'>
          {abrirModalUpdateCargo && 
            <ModalUpdateCargo
              setabrirModalUpdateCargo={setabrirModalUpdateCargo}
            />
          }
        </div>
        </>
        
  )
}

export default TablaCargoUsuario