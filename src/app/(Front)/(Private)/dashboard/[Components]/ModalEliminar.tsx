'use client'

import { deleteData } from "../../../React/Fetch/deleteData"
import { useRouter } from "next/navigation";
import { useIdTareaSelecccionado } from "../../[stores]/homeStore";

const ModalEliminar = ({setActivarEliminar, nombre, id}) => {


    const router = useRouter()

    const handleClickModalEliminar =(e)=>{
        if(e.target.name === 'eliminar'){
            deleteData({ruta:'proyecto', url:id})
            setActivarEliminar(false)
            router.push('/dashboard/home/misProyectos')
            console.log('IDDDDDDDDDD:', id);
        }
        else if(e.target.name === 'volver'){
            setActivarEliminar(false)
        }
    }
    

    
    const idTareaSeleccioandoPintar = useIdTareaSelecccionado((state) => state.tareaSeleccionadoId)
    
    console.log('IDDDDDDDDDD2222:', idTareaSeleccioandoPintar);
    //console.log();
    
    

  return (
    <div className='w-[550px] h-40 border border-gray-200 rounded-md shadow-2xl fixed top-14 bg-white py-3 ml-96 px-9'>
        <header className='w-full h-[15%] text-(length:--tamañoLetra) flex items-center font-semibold text-gray-600'>
            Mensaje
        </header>
        <section className='w-full h-[55%] text-(length:--tamañoLetra) flex items-center gap-x-1'>
            <div>
                ¿ Estás seguro de eliminar el proyecto
            </div>
            <div className='font-semibold text-blue-600'>
                {nombre}
            </div>
            <div>
                ?
            </div>
        </section>
        <section className='w-full h-[30%] flex justify-end gap-x-2 px-3 text-(length:--tamañoLetraChica)'>
            <button name='volver' type='button' onClick={handleClickModalEliminar} className='w-[13%] h-8 bg-black text-white rounded font-semibold'>
                Volver
            </button>
            <button name='eliminar' onClick={handleClickModalEliminar} className='w-[17%] h-8 bg-red-500 text-white rounded font-semibold'>
                Eliminar
            </button>
        </section>
    </div>
  )
}

export default ModalEliminar