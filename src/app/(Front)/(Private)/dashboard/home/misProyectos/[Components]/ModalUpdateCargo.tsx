'use client'

import {useState} from 'react'

const ModalUpdateCargo = ({setabrirModalUpdateCargo}) => {

  const area =[
    {
      id:'1',
      nombreArea: 'Administración'
    },
    {
      id:'2',
      nombreArea: 'Desarrollo'
    },
    {
      id:'3',
      nombreArea: 'Finanzas'
    },
    {
      id:'4',
      nombreArea: 'Logistica'
    },
    {
      id:'5',
      nombreArea: 'Marketing'
    },
    {
      id:'6',
      nombreArea: 'RRHH'
    },

  ]

  const cargos = [
      {
        id: '1',
        nombreCargo: 'Administrador',
      },
      {
        id: '2',
        nombreCargo: 'Ceo',
      },
      {
        id: '3',
        nombreCargo: 'Cto',
      },
      {
        id: '4',
        nombreCargo: 'Cfo',
      },
      {
        id: '5',
        nombreCargo: 'Database',
      },
      {
        id: '6',
        nombreCargo: 'Desarrollador',
      },
      {
        id: '7',
        nombreCargo: 'Diseño',
      },
      {
        id: '8',
        nombreCargo: 'QA',
      }
    ]

  const [abrirCargos, setabrirCargos] = useState(false)
  const [abrirAreas, setabrirAreas] = useState(false)

  const handleClickAbrirCargos =(e)=>{
    if(e.target.name === 'area'){
      setabrirAreas(!abrirAreas)      
    }
    else if(e.target.name === 'cargo'){
      setabrirCargos(!abrirCargos)
    }
    else {
      console.log('as');
      
    }
  }



  return (
    <div className=' w-[400px] h-[640px] '>
        <header className='w-full text-[13px] h-20 grid place-items-center font-semibold text-gray-500'>
          Actualizar cargo del Usuario
        </header>
        <main className='w-full h-full text-(length:--tamañoLetraChica) text-gray-700'>
          <section className='w-full h-[11%] grid '>
            <div className='h-[30%] '>
              Nombre del Usuario:
            </div>
            <div className='flex gap-x-2 items-center h-[70%] '>
              <div>
                <img className='w-4 h-4' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png' alt="sd" />
              </div>
              <div>
                Juan Perez
              </div>
            </div>
          </section>
          <section  className='w-full h-[11%] grid grid-rows-2 mb-3'>
            <div className='h-[30%]'>
              Area:
            </div>
            <button name='area' className='hover:bg-gray-100 cursor-pointer flex justify-between items-center px-2 h-10 border border-gray-200' onClick={handleClickAbrirCargos}>
              <div className=''>
                Desarrollo
              </div>
              <div>
                <img className='w-2 h-2' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="as" />
              </div>
            </button>
            {abrirAreas && 
              <div className='absolute mt-[80px]  w-[400px] h-[200px] z-50   max-h-[1000px] overflow-auto bg-white '>
                {area.map((el)=>{
                  return <button onClick={()=>setabrirAreas(!abrirAreas)} className='h-10 cursor-pointer hover:bg-gray-100 flex items-center pl-2 w-full' key={el.id}>
                    {el?.nombreArea}
                  </button>
                })}
              </div>
          }
          </section>
          <section  className='w-full h-[11%] grid grid-rows-2'>
            <div className='h-[30%]'>
              Cargo:
            </div>
            <button name='cargo' className='hover:bg-gray-100 cursor-pointer flex justify-between items-center px-2 h-10 border border-gray-200' onClick={handleClickAbrirCargos}>
              <div className=''>
                Diseño
              </div>
              <div>
                <img className='w-2 h-2' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="as" />
              </div>
            </button>
            {abrirCargos && 
              <div className='absolute mt-[80px]  w-[400px] h-[200px] z-50   max-h-[1000px] overflow-auto bg-white '>
                {cargos.map((el)=>{
                  return <button onClick={()=>setabrirCargos(!abrirCargos)} className='h-10 cursor-pointer hover:bg-gray-100 flex items-center pl-2 w-full' key={el.id}>
                    {el?.nombreCargo}
                  </button>
                })}
              </div>
          }
          </section>
          
          <section className='w-full h-[60%] mt-4 z-10'>
            <div className='mb-3'>
              Permisos:
            </div>
            <div>
              lista...
            </div>
          </section>
          <section className='w-full h-8  flex gap-x-2 text-white  justify-end font-semibold text-[11px]'>
            <button className='w-[35%] bg-blue-700 hover:bg-blue-800 rounded cursor-pointer' >
              Confirmar Cambios
            </button>
            <button onClick={()=>{setabrirModalUpdateCargo(false)}} className='w-[15%] bg-gray-900 hover:bg-black rounded cursor-pointer'>
              Cerrar
            </button>
          </section>

        </main>
    </div>
  )
}

export default ModalUpdateCargo