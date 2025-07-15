'use client'

import {useState} from 'react'
import ComTablero from './ComTablero'
import ModalTareas from './ModalTareas'
import ModalAceptarColaborador from './ModalAceptarColaborador'

const GrapTablero = ({session}) => {

    const [abrirModalTareas, setAbrirModalTareas] = useState(false)
    const [abrirModalAceptar, setabrirModalAceptar] = useState(false)


  //console.log(session);

  const traerBooleano = (param)=>{
    setAbrirModalTareas(param)
  }

  const acepColaborador =(param)=>{
    setabrirModalAceptar(param)
  }
  
  //console.log('res que quiero:', abrirModalTareas);
  

  return (
    <>
      <div className='w-[75%] h-full text-tamañoLetraChica'>
        <ComTablero
        // abrirModalTarea={abrirModalTarea}
        // tareasActivas={tareasActivas}
        session={session}
        setAbrirModalTareas={setAbrirModalTareas}
        abrirModalTareas={abrirModalTareas}
        traerBooleano={traerBooleano}
        acepColaborador={acepColaborador}
        setabrirModalAceptar={setabrirModalAceptar}
        
        
        
      />
    </div>
    <div>
        {abrirModalTareas && 
        <ModalTareas
            setAbrirModalTareas={setAbrirModalTareas}
            // handleClickEnviarPeticion={handleClickEnviarPeticion}
            acepColaborador={acepColaborador}
            session={session}
            
            
        />
      }
      </div>
      <div>

      
        {abrirModalAceptar && 
        <ModalAceptarColaborador
          acepColaborador={acepColaborador}
          setabrirModalAceptar={setabrirModalAceptar}
          // nombreResponsableTarea={nombreResponsableTarea}
        />
      }
      </div>
    </>
  )
}

export default GrapTablero