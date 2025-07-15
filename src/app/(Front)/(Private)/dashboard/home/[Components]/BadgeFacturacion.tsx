import React from 'react'

const BadgeFacturacion = () => {

    const factActual = 270602
    const factPasada = 742510
    const dif = ((factActual*100)/factPasada)-100

  return (
    <div className='w-full h-full mt-5 '>
        <header className='w-full h-[20%] text-center'>
            Facturación Total
        </header>
        <main className='w-full h-[80%] '>
            
            <div className='w-full h-full  flex gap-x-3'>
                <div className='w-[60%] h-full  text-xl text-center py-5 mt-7'>
                    <div className='w-full h-[40%]'>
                        Costo actual en tiempo real (Junio-2025)
                    </div>
                    <div className='w-full h-[60%]  text-blue-500 font-semibold'>
                        {factActual} CLP
                    </div>
                </div>
                <div className='w-[40%] h-full py-5'>
                    <div className='w-full h-[50%] grid grid-rows-2 text-sm text-center'>
                        <div className=''>
                            Costo del mes anterior
                        </div>
                        <div className='text-lg text-violet-600 font-semibold'>
                            {factPasada} CLP
                        </div>
                    </div>
                    <div className='w-full h-[50%] grid grid-rows-2 text-sm text-center'>
                        <div className=''>
                            Diferencia vs el mes anterior
                        </div>
                        <div className={`text-lg font-semibold ${dif<=0 ? 'text-red-500':'text-green-500'}`}>
                            {dif.toFixed(2)} %
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default BadgeFacturacion