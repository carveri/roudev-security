'use client'

import { useRouter } from "next/navigation"
import { useState  } from "react";
import { dataEmpleadosRed } from "../../cofounders/utils/dataEmpleadosRed";
import { dataCargosStartUps } from "../utils/dataCargosStartUps";


const ModalBuscarEmpleado = ({setActivarCrearEmpleado}) => {
    
    const router = useRouter()

    const [nombreProyecto, setNombreProyecto] = useState('')
    const [nombreCargoStartUps, setNombreCargoStartUps] = useState('Desarrollador Frontend')
    const [nombreEmpleado, setNombreEmpleado] = useState('Lorena Gonzalez')
    const [subTipoProyecto, setSubTipoProyecto] = useState('Juan Perez')
  
    // ESTADOS PARA ABRIR Y CERRAR LA LISTA DE TIPOS Y SUBTIPOS
    
    const [abrirEmpleados, setAbrirEmpleados] = useState(false)
    const [abrirTipoFounder, setAbrirTipoFounder] = useState(false)
  
    // ESTADO ID DEL SELECT
    const [idTipoFounder, setIdTipoFounder] = useState('')
    const [idEmpleado, setIdEmpleado] = useState('')


    // jsds
    const [nombreEmail, setNombreEmail] = useState('')
    const [nombreTelefono, setNombreTelefono] = useState('')


    // ACTIVAR CHECKBOCKS
    const [activarCheckBox1, setActivarCheckBox1] = useState(true)
    const [activarCheckBox2, setActivarCheckBox2] = useState(false)
    const [activarCheckBox3, setActivarCheckBox3] = useState(false)
    const [activarCheckBox4, setActivarCheckBox4] = useState(false)
  
    // CAPTURO LOS VALORES DE LOS INPUTS
    const handleChangeCrearProyecto = (e)=>{
      if(e.target.name === 'nombreProyecto'){
        setNombreProyecto(e.target.value)
      }
    }
  
    // CAPTURO EL ESTADO DEL FORMULARIO
    const handleClickModalCrearProyecto =(e)=>{
      e.preventDefault()
      if(e.target.name === 'tipoFounder'){
        setAbrirTipoFounder(!abrirTipoFounder)
      }
      else if(e.target.name === 'nombreEmpl'){
        setAbrirEmpleados(!abrirEmpleados)
      }
      else {
        console.log('sd');
      }
    }
  
    // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
    const handleClickSelectProyecto =(e, id, nombre)=>{
      e.preventDefault()
      if(e.target.name === 'selectTipoFounder'){
        //console.log(id);
        setIdTipoFounder(id)
        setNombreTipoFounder(nombre)
        setAbrirTipoFounder(!abrirTipoFounder)
      }
      else if(e.target.name === 'selectEmpleado'){
        //console.log(id);
        setIdEmpleado(id)
        setNombreEmail(nombre)
        setAbrirEmpleados(!abrirEmpleados)
      }
      else {
        console.log('ass');
        
      }
    }
  
  
    // ENVIO DEL FORMULARIO AL BACK
    const handleClickCrearEquipo =(e)=>{
      e.preventDefault()
      const data = {nombreEmail, nombreTelefono}
      console.log(data);

      if(activarCheckBox1 && nombreEmail!=='' || activarCheckBox2 && nombreTelefono!=='' || activarCheckBox3 ){
        alert('Se Envio invitacion')
        setActivarCrearEmpleado(false)
      }
      
    }

    const handleClickVolverCrearEquipo=(e)=>{
        e.preventDefault()
        setActivarCrearEmpleado(false)
        //router.push('/dashboard/home/misProyectos/verProyecto')
    }

    const handleChangeCheckbox =(e)=>{
      //e.preventDefault()  
      if(e.target.name ==='email'){
        setNombreEmail(e.target.value)
        
      }
      else if(e.target.name ==='telefono'){
        setNombreTelefono(e.target.value)
        setActivarCheckBox1(!activarCheckBox1)
      }
      else {
        console.log('asas');
        
      }
    }

    


    const handleClickBuscarContactos =()=>{
      if(activarCheckBox4){
        router.push('/dashboard/startUps/contactosStartUps')
      }
    }


    // APAGAR LOS OTROS CHECKS 
    const handleClickChecks =(e)=>{
      if(e.target.name==='email'){
          setActivarCheckBox1(!activarCheckBox1)
          setActivarCheckBox2(false)
          setActivarCheckBox3(false)
          setActivarCheckBox4(false)
      }
      else if(e.target.name ==='telefono'){
          setActivarCheckBox2(!activarCheckBox2)
          setActivarCheckBox1(false)
          setActivarCheckBox3(false)
          setActivarCheckBox4(false)
      }
      else if(e.target.name ==='cargo'){
          setActivarCheckBox3(!activarCheckBox3)
          setActivarCheckBox1(false)
          setActivarCheckBox2(false)
          setActivarCheckBox4(false)
      }
      else if(e.target.name==='red'){
          setActivarCheckBox4(!activarCheckBox4)
          setActivarCheckBox1(false)
          setActivarCheckBox2(false)
          setActivarCheckBox3(false)
      }
      else{
        console.log('as');
      }
    }

    const handleClickChecks2 =(e)=>{
      e.preventDefault()
      if(e.target.name==='email'){
          setActivarCheckBox1(!activarCheckBox1)
          setActivarCheckBox2(false)
          setActivarCheckBox3(false)
          setActivarCheckBox4(false)
          
      }
      else if(e.target.name ==='telefono'){
          setActivarCheckBox2(!activarCheckBox2)
          setActivarCheckBox1(false)
          setActivarCheckBox3(false)
          setActivarCheckBox4(false)
      }
      else if(e.target.name ==='cargo'){
          setActivarCheckBox3(!activarCheckBox3)
          setActivarCheckBox1(false)
          setActivarCheckBox2(false)
          setActivarCheckBox4(false)
      }
      else if(e.target.name==='red'){
          setActivarCheckBox4(!activarCheckBox4)
          setActivarCheckBox1(false)
          setActivarCheckBox2(false)
          setActivarCheckBox3(false)
      }
      else{
        console.log('as');
      }
    }

  
    return (
      <div>
          <form   className={`bg-white w-[23%] h-[70%] py-4 px-10  rounded-md mt-8 shadow-2xl fixed top-14 grid justify-self-center text-(length:--tamañoLetraChica)`}>
                <header className='w-full h-[10%]  grid place-content-center  text-gray-600 font-semibold text-(length:--tamañoLetra)'>
                  Invitar Empleados
                </header>
                <main className='h-[100%] grid grid-rows-7 -mt-10 '>
                  <div className="flex -ml-1 ">
                    <div>
                      <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png" alt="" />
                    </div>
                    <div className="pl-3 mt-[2px] flex text-blue-600 font-semibold" >
                      Proyecto 1
                    </div>
                  </div>
                  <div className='grid'>
                    <label className='h-1 text-gray-600  flex items-center gap-x-1' htmlFor=""><input name="email" type="checkbox" onChange={handleClickChecks} checked={activarCheckBox1}  />  <button name="email" className="hover:text-blue-500 cursor-pointer" onClick={handleClickChecks2}>Invitar por Email</button></label>
                    <input name='email' disabled={!activarCheckBox1} onChange={handleChangeCheckbox} readOnly={!activarCheckBox1}  className={`${activarCheckBox1 ? 'opacity-100':'opacity-20 bg-gray-300'} rounded h-9 pl-3 bg-white border border-gray-100`} type="text" placeholder='juan@gmail.com'/>
                  </div>
                  
                  <div className='grid'>
                    <label className='h-1 text-gray-600  flex items-center gap-x-1' htmlFor=""><input name="telefono" type="checkbox" onChange={handleClickChecks} checked={activarCheckBox2}  />  <button name="telefono" className="hover:text-blue-500 cursor-pointer" onClick={handleClickChecks2}>Contactar por LinkedIn</button></label>
                    <input name='telefono' disabled={!activarCheckBox2} onChange={handleChangeCheckbox} readOnly={!activarCheckBox2}  className={`${activarCheckBox2 ? 'opacity-100':'opacity-20 bg-gray-300'} rounded h-9 pl-3 bg-white border border-gray-100`} type="text" placeholder='https://www.linkedin.com/in/juan-perez-lopez/'/>
                  </div>
                 
                 
                  <div className='grid '>
                    <label className='h-1 mb-3 text-gray-600  flex items-center gap-x-1' htmlFor=""><input name='cargo' type="checkbox" onChange={handleClickChecks} checked={activarCheckBox3}/>  <button name="cargo"  className="hover:text-blue-500 cursor-pointer" onClick={handleClickChecks2}>Invitar por cargo en mi red de StartUps</button></label>
                    <button disabled={!activarCheckBox3} onClick={handleClickModalCrearProyecto} name='tipoFounder' className={`${activarCheckBox3 ? 'opacity-90 ': 'opacity-15 cursor-default bg-gray-300'} cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4`}>
                        <div >
                                {nombreCargoStartUps}
                        </div>
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>

                    </button>
                    {abrirTipoFounder &&
                      <ul className="mt-[50px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {dataCargosStartUps.map((el)=>{
                          return <button name="selectTipoFounder" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombre)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                                <img src={el.icono} width={15} height={15} alt="sd"/>
                            </div>
                            <div>
                                {el.nombre}
                            </div>
                          </button>
                        })}
                      </ul>
                    }
                  </div>
                  <div className='grid'>
                    <label className={`${activarCheckBox3?'text-gray-500':'text-white'} h-1 text-gray-600   flex items-center gap-x-1`} htmlFor="">Nombre del desarrollador</label>
                    <button disabled={!activarCheckBox3} onClick={handleClickModalCrearProyecto} name='nombreEmpl' className={`${activarCheckBox3 ? 'opacity-90 ': 'opacity-15 cursor-default bg-gray-300'} cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4`}>
                        <div >
                                {nombreEmpleado}
                        </div>
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>

                    </button>
                    {abrirEmpleados &&
                      <ul className="mt-[55px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {dataEmpleadosRed.map((el)=>{
                          return <button name="selectEmpleado" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombre)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                                <img src={el.icono} width={15} height={15} alt="sd"/>
                            </div>
                            <div>
                                {el.nombre}
                            </div>
                          </button>
                        })}
                      </ul>
                    }
                  </div>









                  <div className='grid'>
                    <label className='h-1 mb-4 text-gray-600  flex items-center gap-x-1' htmlFor=""><input name='red' type="checkbox" onChange={handleClickChecks} checked={activarCheckBox4}  />  <button name='red' className="hover:text-blue-500 cursor-pointer" onClick={handleClickChecks2}>Buscar en toda la red de StartUps</button></label>
                    <div onClick={handleClickBuscarContactos} className={`${activarCheckBox4 && 'cursor-pointer hover:bg-gray-100'}   flex items-center justify-between rounded h-9 pl-3 bg-white border border-gray-100`}>
                      <div className={`${!activarCheckBox4 && 'opacity-10'} flex items-center gap-x-2`}>
                        Buscar nuevos Contactos
                      </div>
                      <div className="pr-4">
                        <img className={`${!activarCheckBox4 && 'opacity-10'} w-3 h-3`} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="s" />
                      </div>
                    </div>
                  </div>
                  
                  
                 
                </main>
                <div className='h-[40%] w-full flex justify-end items-end gap-x-2'>
                    <button onClick={handleClickCrearEquipo}  className={` ${activarCheckBox1 && nombreEmail!=='' || activarCheckBox2 && nombreTelefono!=='' || activarCheckBox3 ? 'opacity-100 ':'opacity-10 cursor-text'} h-[100%] w-[35%]  rounded  bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-tamañoLetraChica`}>
                      Invitar Empleado
                    </button>

                    <button onClick={handleClickVolverCrearEquipo}  className='h-[100%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                      Cerrar
                    </button>
                </div>
            </form>
      </div>
    )
}

export default ModalBuscarEmpleado