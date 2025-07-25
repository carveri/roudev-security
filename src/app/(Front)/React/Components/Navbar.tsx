'use client'

import { dataNavbar } from "./utils/dataNavbar";
import { useRouter } from "next/navigation";


const Navbar = ({setActivarPerfil,activarPerfil, setActivarConectar, activarConectar, activarSoporte, setActivarSoporte, activarConfiguraciones, setActivarConfiguraciones}) => {


  
  const router = useRouter()

  const handleClickNavbar =(e)=>{
    //e.preventDefault()
    if(e.target.name === 'Conectar'){
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

  //const imagenLupa = <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' alt="o" />
  return (
    <nav className="w-full h-full  flex justify-between items-center px-4">
      <div>
      <img className="cursor-pointer" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png' width={20} height={20} alt="as" />
      </div>
      <div className="flex gap-3 py-2">
        
        <input className="rounded pl-3 bg-white border focus:outline-none border-gray-200 text-(length:--tamañoLetraChica) h-7.5 w-96 py-1" type="text" placeholder={`Buscar`}/>
        <ul className="flex gap-x-2 pr-3 ">
          {dataNavbar.map((el)=>{
            return <button name={el.nombre} onClick={handleClickNavbar} className="cursor-pointer hover:border-b hover:border-gray-500 px-2  " key={el.id}>
              {<img
                src={el.icono}
                width={16}
                height={16}
                alt="sd"
                name={el.nombre}
              />}
            </button>
          })}
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar