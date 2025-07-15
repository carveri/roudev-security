'use client'

import React from 'react'
import { useNombreProyectoPro } from '../../../[stores]/homeStore'

const NombreFinanzas = () => {

    const nombreProyy = useNombreProyectoPro((state) => state.nombreProyecto)

  return (
    <div className="text-(length:--tamañoLetraChica) text-blue-500 font-semibold">
             - {nombreProyy}
            </div>
  )
}

export default NombreFinanzas