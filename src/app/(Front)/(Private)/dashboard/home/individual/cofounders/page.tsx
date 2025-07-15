'use client'

import TablaFounders from './Components/TablaFounders'
import { getDataCompleja2 } from '../../../../../React/Fetch/getDataCompleja2'
import { useStore, useIdCeo } from '../../../../[stores]/homeStore'
import { useEffect, useState } from "react";
import { getDataLista } from '../../../../../React/Fetch/getDataLista';

const page = () => {

  //const session = await getServerSession(authOptions)
  const [isProoo, setIsProoo] = useState([])
  const [userId, setUserId] = useState([])

  const bears = useStore((state) => state.bears)
    // console.log('resuuuulfinal33333:', bears);
  const idCeo = useIdCeo((state) => state.idCeo)

    //console.log('berarsss:', bears);
    
  useEffect(()=>{
    const ruta = 'proyecto2'
    const elem1 = 'proyectoId'
    const param1 = bears ?? '9888686d-de2d-4ec4-8ee2-f4f249827419'
    const elem2 = 'userId'
    const param2 = idCeo[0] ?? 'c814075d-b44c-4474-970c-3b62c087d3f3'
    const getProo = async()=>{
      const res = await getDataCompleja2({ruta, elem1, param1, elem2, param2})
      setIsProoo(res)
    }
    getProo()
  }, [bears])

 // console.log('isproo:', isProoo);
  

  // traer ceo y cto
  const getNoEmpleado  = async()=>{

    const ruta = 'user'
    const url = 'a140c95f-acb0-4129-8901-e047f2535e93'
    const res = await getDataLista({ruta, url})
    setUserId(res)
  }

  useEffect(()=>{
    getNoEmpleado()
  }, [isProoo])


  
  

  return (
    <section className={` w-[75%] h-[95%] flex  items-center justify-center`}> 
        <div className={` w-[100%] h-full`}>
            <TablaFounders
              res = {isProoo}
              bears = {bears}
              userId ={userId}
            />
        </div>
    </section>
  )
}

export default page