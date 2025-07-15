'use client'

import React from 'react'
import { useIdProyectoPro, useNombreProyectoPro } from '../../../[stores]/homeStore'

const NombreProyecto = () => {

    const idProyy = useIdProyectoPro((state) => state.idProyecto)

    const nombreProyy = useNombreProyectoPro((state) => state.nombreProyecto)


  return (
    <div className="text-(length:--tamañoLetraChica) text-blue-500 font-semibold capitalize">
        - {nombreProyy}
    </div>
  )
}

export default NombreProyecto