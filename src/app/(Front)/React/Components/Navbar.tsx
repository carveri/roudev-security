'use client'

import { dataNavbar } from "./utils/dataNavbar";
import { useRouter } from "next/navigation";


const Navbar = ({activarPuntos, setActivarPuntos, activarNotificacion, setActivarNotificacion, setActivarPerfil,activarPerfil, setActivarConectar, activarConectar, activarSoporte, setActivarSoporte, activarConfiguraciones, setActivarConfiguraciones}) => {


  
  const router = useRouter()

  const handleClickNavbar =(e)=>{
    if(e.target.name === 'Notificaciones'){
      setActivarNotificacion(!activarNotificacion)
      setActivarPerfil(false)
      setActivarSoporte(false)
      setActivarConfiguraciones(false)
    }
    else if(e.target.name === 'Puntos'){
      setActivarPuntos(!activarPuntos)
      setActivarPerfil(false)
      setActivarSoporte(false)
      setActivarConfiguraciones(false)
    }
    else if(e.target.name === 'Conectar'){
      setActivarConectar(!activarConectar)
      setActivarPerfil(false)
      setActivarSoporte(false)
      setActivarConfiguraciones(false)
    }
    else if(e.target.name === 'Soporte'){
      setActivarSoporte(!activarSoporte)
      setActivarPerfil(false)
      setActivarConectar(false)
      setActivarConfiguraciones(false)
    }
    else if(e.target.name === 'Configuracion'){
      setActivarConfiguraciones(!activarConfiguraciones)
      setActivarPerfil(false)
      setActivarConectar(false)
      setActivarSoporte(false)
    }
    else if(e.target.name === 'Perfil'){
      setActivarPerfil(!activarPerfil)
      setActivarConectar(false)
      setActivarConfiguraciones(false)
      setActivarSoporte(false)
    }
    else{
      console.log('otra cosa');
      
    }
  }

  const re = 1
  const lista = ['','','','']

  //const imagenLupa = <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' alt="o" />
  return (
    <nav className="w-full h-full  flex justify-between items-center px-4">
      <div>
      <img className="cursor-pointer" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png' width={20} height={20} alt="as" />
      </div>
      <div className="flex gap-3 py-2">
        
        <div className="flex border border-gray-200">
          <div className="w-7 h-7 flex items-center justify-center mt-[1px] bg-white pl-0.5">
            <img className="w-[40%] h-[35%]" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png" alt="as" />
          </div>
          <input className="rounded pl-3 bg-white  focus:outline-none  text-(length:--tamañoLetraChica) h-7.5 w-96 py-1" type="text" placeholder={`Buscar`}/>
        </div>
        <ul className="flex gap-x-2 pr-3 ">
          {dataNavbar.map((el)=>{
            return <button name={el.nombre} onClick={handleClickNavbar} className="flex items-center w-9  cursor-pointer hover:border-b hover:border-gray-500 px-2  " key={el.id}>
              
              
                <img
                className=""
                src={el.icono}
                width={16}
                height={16}
                alt="sd"
                name={el.nombre}
              />
              
              {re === 1 && el.nombre === 'Notificaciones' &&
                (<div className="w-4 h-4 p-2 rounded-full bg-red-600 font-semibold text-white flex self-start place-items-center justify-center text-[9.5px] ">
                  {lista.length}
                </div>)
              }
              
            </button>
          })}
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar