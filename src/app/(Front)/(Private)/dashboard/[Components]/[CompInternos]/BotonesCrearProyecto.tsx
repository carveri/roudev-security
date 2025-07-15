'use client'

import { postData } from '../../../../React/Fetch/postData'
import { format } from "date-fns";

const BotonesCrearProyecto = ({setAbrirModal, presupuestoDelProyecto,  session, nombreProyecto, tipoProyecto, idFinalidadProyecto,  idTipoProyecto, fechaTermino}) => {

    const userIdSession = session?.user?.id

    console.log('fechafinalxxx:', fechaTermino);
    

    // ENVIO DEL FORMULARIO AL BACK
  const handleClickCrearProyecto =(e)=>{
    e.preventDefault()
    const id1= userIdSession
    const fechaInicio= format(new Date(), 'dd/MM/yyyy')
    //const fechaTermino = fechaTermino
    const statusProyecto = 'Activo'
    const responsableProyecto = userIdSession
    const finalidadProyectoId = idFinalidadProyecto
    const tipoProyectoId = idTipoProyecto
    const ceo = [userIdSession]
    const todos =
      {id: userIdSession}
    


    const data = {nombreProyecto, presupuestoDelProyecto, id1, fechaInicio, todos, statusProyecto,  responsableProyecto, finalidadProyectoId, tipoProyectoId, fechaTermino, ceo}
    console.log(data);
    const ruta = 'proyecto'
    postData({ruta, data})
    setAbrirModal(false)
    location.reload()
  }

  const handleClickVolverCrearProyecto =(e)=>{
    e.preventDefault()
    setAbrirModal(false)
    //router.back()
  }

  return (
    <div className='h-[35%] w-full flex justify-end items-end gap-x-2'>
                {nombreProyecto !== '' && 
                    <button onClick={handleClickCrearProyecto}  className='h-[100%] w-[30%]  rounded cursor-pointer bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                    Crear Proyecto
                  </button>
                }
                  <button onClick={handleClickVolverCrearProyecto}  className='h-[100%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                    Cerrar
                  </button>
                </div>
  )
}

export default BotonesCrearProyecto