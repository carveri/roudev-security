'use client'

import { useRouter } from "next/navigation";
import { dataNavbarHome } from "../../(Public)/(home)/utils/dataNavbarHome";

const NavbarHome = () => {

  const router = useRouter()

  const handleClickNavbarHome =(e)=>{
    e.preventDefault()
    if(e.target.name === 'Planes'){
      router.push('/planes')
      }
    else if(e.target.name === 'Faq'){
      router.push('/faq')
    }
    else if(e.target.name === 'Productos'){
      router.push('/productos')
    }
    else if(e.target.name === 'Login'){

      router.push('/dashboard')
  }}
  
  return (
     <nav className="w-full h-full bg-white flex justify-between items-center px-4 py-[2px]">
        <div onClick={()=>router.push('/')} className="flex py-2 cursor-pointer ">
          <img  className="cursor-pointer" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png' width={20} height={20} alt="as" />
          <div className="pl-2  text-tamañoLetra text-blue-700 font-semibold">Roudev</div>
        </div>
        <div className="flex gap-3 items-center">
          <img width={15} height={15}  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' alt="sa"/>
        <input className="rounded  pl-3 py-2 text-tamañoLetraChica h-[30px] w-56 border border-gray-200" type="text" placeholder="Buscar"/>
          {dataNavbarHome.map((el)=>{
            return <button name={el.name} onClick={handleClickNavbarHome} className="cursor-pointer text-(length:--tamañoLetraChica) text-blue-900 " key={el.id}>
              {el.name}
            </button>
          })}
        </div>
    </nav>
  )
}

export default NavbarHome