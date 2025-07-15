
import React from 'react'

const SelectInput = ({nombre, name, type, placeholder, handleChange}) => {
  return (
    <div className='grid'>
        <label className='h-1 text-gray-600 pb-5' htmlFor="">{nombre} *</label>
        <input onChange={handleChange}  name={name} className=' rounded h-9 pl-3 bg-white border border-gray-100' type={type} placeholder={placeholder}/>
    </div>
  )
}

export default SelectInput