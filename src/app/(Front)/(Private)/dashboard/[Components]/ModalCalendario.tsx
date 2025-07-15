'use client'

import { useState, useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/style.css";
import { es } from "date-fns/locale";
import classNames from "react-day-picker/style.module.css";

const ModalCalendario = ({nombre, fecha, setFecha, mt, ml}) => {

    // estado de fecha
    
    const [abrirCalendario, setAbrirCalendario] = useState(false)

    
    //console.log();
    

    const handleClickAbrirCalendario =()=>{
        setAbrirCalendario(!abrirCalendario)
    }

    useEffect(()=>{
        setAbrirCalendario(false)
    }, [fecha])
    
    const defaultClassNames = getDefaultClassNames();

    console.log('mtt:', mt);
    

  return (
    <div className='grid relative'>
        <label className='h-1 text-gray-600 pb-5' htmlFor="">{nombre} *</label>
        <input onClick={handleClickAbrirCalendario} className="border cursor-pointer border-gray-100 py-2 px-1 pl-3" type="text" readOnly value={fecha}/>
        <div className={`absolute ${mt} ${ml} text-(length:--tamañoLetraChica)`}>
            {abrirCalendario && 
                <DayPicker 
                className="bg-white shadow-2xl border border-gray-100 p-7 text-[11px]"
                    classNames={{
                        today: `border border-blue-400 rounded-full`, // Add a border to today's date
                        selected: `bg-blue-400 border-amber-500 rounded-xl text-white`, // Highlight the selected day
                        root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
                        chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron
                        button_next: `text-red-500`,
                        day: `text-gray-600 font-semibold`,
                        weekday: 'text-blue-500 font-semibold text-[12px] py-4',
                        month: 'text-blue-700 capitalize'
                        
                    }}
                    animate
                    mode="single"
                    selected={fecha}
                    onSelect={setFecha}
                    // footer={
                    //     fecha ? `Fecha seleccionada: ${fecha.toLocaleDateString()}` : ""
                    // }
                    locale={es} 
                
                />
                }
        </div>
    </div>
  )
}

export default ModalCalendario