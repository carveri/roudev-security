'use client'

import {useState} from 'react'
import SelectInput from './SelectInput'
import SelectAbriri from './SelectAbriri'
import SelectAbrir2 from './SelectAbrir2'
import BotonesCrearProyecto from './BotonesCrearProyecto'
import ModalCalendario from '../ModalCalendario'
import { format } from 'date-fns'
import { es } from "date-fns/locale";

const InternoModalCrearProyecto = ({session, setAbrirModal}) => {
  //console.log('sesion en modal:', session?.user);

  const [nombreProyecto, setNombreProyecto] = useState('')
  const [presupuestoDelProyecto, setPresupuestoDelProyecto] = useState(0)
  const [tipoProyecto, setTipoProyecto] = useState('')
  //const [fechaTermino, setFechaTermino] = useState('')
  const [fecha, setFecha] = useState<Date>(new Date())



  const [idFinalidadProyecto, setIdFinalidadProyecto] = useState('')
  const [idTipoProyecto, setIdTipoProyecto] = useState('')

  // formato de la fecha
    const newFecha = format(fecha, 'dd/MM/yyyy', {locale:es})

    //console.log({newFecha()});



  const handleChangeNombreProyecto =(e)=>{
    //console.log(e.target.value);
    setNombreProyecto(e.target.value)
  }

  const handleChangePresupuestoProyecto =(e)=>{
    //console.log(e.target.value);
    setPresupuestoDelProyecto(e.target.valueAsNumber)
  }

  const handleChangeTipoProyecto =(e)=>{
    //console.log(e.target.value);
    setTipoProyecto(e.target.value)
    
  }

  // const handleChangeFechaTermino =(e)=>{
  //   //console.log(e.target.value);
  //   setFechaTermino(e.target.value)
  // }
  
  console.log('fecha pinchada:', newFecha);
  

  return (
    <div>
        <form  className={`bg-white w-[23%] h-[70%] py-4 px-10  rounded-md mt-20 shadow-2xl fixed top-[38px] grid justify-self-center text-tamañoLetraChica`}>
              <header className='w-full h-[10%] py-10 grid place-content-center  text-gray-600 font-semibold text-tamañoLetra'>
                Crear Proyecto
              </header>
              <main className='h-[99%] grid grid-rows-5 -mt-16'>
                <SelectInput
                  nombre = 'Nombre del Proyecto'
                  name = 'nombreDelProyecto'
                  type='text'
                  placeholder='Apolo 1'
                  handleChange={handleChangeNombreProyecto}
                />
                <SelectInput
                  nombre = 'Logo del proyecto (Opcional)'
                  name = 'logoProyecto'
                  type='file'
                  placeholder='Apolo 1'
                  handleChange={handleChangeTipoProyecto}
                  
                />
                
                <SelectAbriri
                  //setAbrirModal={setAbrirModal}
                  nombre='Finalidad del  Proyecto'
                  name='finalidadDelProyecto'
                  setId={setIdFinalidadProyecto}
                  session={session}
                />
                
               <SelectAbrir2
                  setId={setIdTipoProyecto}
               />
               <SelectInput
                  nombre = 'Presupuesto del Proyecto (USD)'
                  name = 'presupuestoDelProyecto'
                  type='number'
                  placeholder='100'
                  handleChange={handleChangePresupuestoProyecto}
                />
               <ModalCalendario
                  nombre= 'Fecha de Termino '
                  fecha ={newFecha}
                  setFecha = {setFecha}
                  ml='ml-[370px]'
                  mt='mt-4'
               />
              </main>
              <BotonesCrearProyecto
              setAbrirModal={setAbrirModal}
              session={session}
              nombreProyecto={nombreProyecto}
              presupuestoDelProyecto={presupuestoDelProyecto}
              tipoProyecto={tipoProyecto}
              fechaTermino={newFecha}
              idFinalidadProyecto={idFinalidadProyecto}
              idTipoProyecto={idTipoProyecto}
              
              />
          </form>
    </div>
  )
}

export default InternoModalCrearProyecto