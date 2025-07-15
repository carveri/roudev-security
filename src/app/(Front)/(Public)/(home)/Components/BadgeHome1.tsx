import React from 'react'

const BadgeHome1 = ({el}) => {
  return (
    <div className="w-full h-full border border-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
        <figure className='flex justify-center mb-3'>
            <img className='w-10 h-10' src={el?.icono} alt="sasa" />
        </figure>
        <section className='text-lg'> 
            {el?.titulo}
        </section>
        <section>
            {el?.descripcion}
        </section>
    </div>
  )
}

export default BadgeHome1