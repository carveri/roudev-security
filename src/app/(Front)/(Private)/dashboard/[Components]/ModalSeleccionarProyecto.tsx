import React from 'react'
import { dataMisProyectos } from '../home/misProyectos/utils/dataMisProyectos'

const ModalSeleccionarProyecto = () => {
  return (
    <div className='bg-white w-[23%] h-[60%] py-4 px-10  rounded-md mt-8 shadow-2xl fixed top-14 grid justify-self-center'>
        {dataMisProyectos.map((el)=>{
            return <li className='flex'>
                <div>
                    {el.nombreProyecto}
                </div>
                <div>
                    l
                </div>
                <div>
                    <input type="checkbox" />
                </div>

            </li>
        })}
        <div>
            <button>
                Seleccionar Proyecto
            </button>
        </div>
    </div>
  )
}

export default ModalSeleccionarProyecto