import Image from 'next/image'
import cruz from "../../React/Assets/Icons/cruz3.png";
import lupa from "../../React/Assets/Icons/iconoLupa.png";
import { dataEquipoProyectos } from '../dashboard/home/misProyectos/utils/dataEquipoProyectos';
import { useRouter } from "next/navigation";

const ModalMisEquipos = ({setActivar}) => {

    const router = useRouter()
    
        const handleClickSelecMisEquipos =(e)=>{
            e.preventDefault()
            setActivar(false)
            router.push('/dashboard/equipos')
        }

  return (
    <div className='w-[15%] h-[40%]  fixed top-[343px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-tamañoLetraChica'>
        <section className='w-full h-[30%] '>
            <header className='w-full h-[30%] flex px-3'>
                <div className='w-[85%] grid items-center '>
                    Mis Equipos
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
        <section className='w-full h-[60%] -mt-1'>
            <ul className='flex-col justify-start z-50  max-h-[81%] overflow-auto'>
                {dataEquipoProyectos.map((el)=>{
                    return <button onClick={handleClickSelecMisEquipos} className='w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100' key={el.id}>
                        <img className="flex -mt-1" src={el.iconoEquipo} width={15} height={15} alt="sd"/>
                        <div>
                            {el.nombreEquipo}
                        </div>
                    </button>
                })}
            </ul>
        </section>
        <section  className='w-full cursor-pointer  h-[12%] border-t border-gray-200 grid items-center pl-2 hover:underline'>
            Ver más
        </section>
    </div>
  )
}

export default ModalMisEquipos