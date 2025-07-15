import React from 'react'
import FormPersonal from './Components/FormPersonal'

const page = () => {
  return (
    <div className='w-[75%] h-full text-tamañoLetraChica'>
      <header className='w-full h-[7%] bg-gray-50 grid place-items-center font-semibold text-gray-500'>
        Perfil Personal
      </header>
      <FormPersonal />
    </div>
  )
}

export default page