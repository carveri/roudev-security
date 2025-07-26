'use client'

import {useState} from 'react'

const ModalUpdateCargo = ({setabrirModalUpdateCargo}) => {


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

  const handleClickAbrirCargos =()=>{
    setabrirCargos(!abrirCargos)
  }



  return (
    <div className=' w-[400px] h-[500px] '>
        <header className='w-full h-14 grid place-items-center font-semibold text-gray-600'>
          Actualizar el cargo del Usuario
        </header>
        <main className='w-full h-full'>
          <section className='w-full h-[15%] grid '>
            <div className='h-[30%]'>
              Nombre del Usuario:
            </div>
            <div className='flex gap-x-2 items-center h-[70%]'>
              <div>
                <img className='w-3 h-3' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' alt="sd" />
              </div>
              <div>
                Juan Perez
              </div>
            </div>
          </section>
          <section  className='w-full h-[15%] grid grid-rows-2'>
            <div className='h-[30%]'>
              Cargo:
            </div>
            <div className='hover:bg-gray-100 cursor-pointer flex justify-between items-center px-2 h-10 border border-gray-200' onClick={handleClickAbrirCargos}>
              <div className=''>
                Diseño
              </div>
              <div>
                <img className='w-2 h-2' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="as" />
              </div>
            </div>
            {abrirCargos && 
              <div className='absolute mt-20  w-[400px] h-[200px] z-50   max-h-[1000px] overflow-auto bg-white'>
                {cargos.map((el)=>{
                  return <button onClick={()=>setabrirCargos(!abrirCargos)} className='h-10 cursor-pointer hover:bg-gray-100 flex items-center pl-2 w-full' key={el.id}>
                    {el?.nombreCargo}
                  </button>
                })}
              </div>
          }
          </section>
          
          <section className='w-full h-[60%] mt-4 z-10'>
            <div>
              Permisos:
            </div>
            <div>
              lista...
            </div>
          </section>
          <section className='w-full h-8  flex gap-x-2 text-white  justify-end font-semibold'>
            <button className='w-[40%] bg-blue-500 rounded cursor-pointer' >
              Confirmar Cambios
            </button>
            <button onClick={()=>{setabrirModalUpdateCargo(false)}} className='w-[15%] bg-black rounded cursor-pointer'>
              Cerrar
            </button>
          </section>

        </main>
    </div>
  )
}

export default ModalUpdateCargo