'use client'

import React from 'react'
import TablaEmpleados from './Components/TablaEmpleados'
import { getDataCompleja2 } from '../../../../../React/Fetch/getDataCompleja2'
import { useState, useEffect } from "react";
import { useIdCeo, useStore } from '../../../../[stores]/homeStore'

const page = () => {

  const [isProoo2, setIsProoo2] = useState([])
  
    const bears2 = useStore((state) => state.bears)
       console.log('resuuuulfinal:', bears2);
    const idCeo = useIdCeo((state) => state.idCeo)
        console.log('IDCEOPAPUUU:', idCeo);

      const res = idCeo[0]
    console.log('res del idCeo:', res);

    useEffect(()=>{
        const ruta = 'proyecto2'
        const elem1 = 'proyectoId'
        const param1 = bears2
        const elem2 = 'userId'
        const param2 = idCeo[0] ?? 'c814075d-b44c-4474-970c-3b62c087d3f3'
        const getProo = async()=>{
          const res = await getDataCompleja2({ruta, elem1, param1, elem2, param2})
          setIsProoo2(res)
        }
        getProo()
      }, [bears2])
    

  return (
    <section className='w-[75%] h-[95%] flex  items-center justify-center '> 
        <div className='w-[100%] h-full '>
            <TablaEmpleados
              res={isProoo2}
            />
        </div>
    </section>
  )
}

export default page