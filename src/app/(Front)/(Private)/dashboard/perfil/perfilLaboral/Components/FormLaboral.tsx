import React from 'react'


const FormLaboral = () => {
  return (
    <form className='w-full h-[80%]  flex justify-start text-tamañoLetraChica py-10 px-10 gap-x-5'>
        <article className='w-[50%] '>
        <div className='w-full h-[20%]      '>
                <label htmlFor="nombre" className='text-tamañoLetraChica '>Proyectos </label>
                <div className='mt-5'>Proyecto 1</div>
            </div>
            <div className='w-full h-[20%]      '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>N°Tareas activas que es responsable</label>
                <div className='mt-5'>15</div>
            </div>
            
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Tareas activas que es responsable</label>
                <div className='mt-5'>Tarea 1 </div>
            </div>
            <div className='w-full h-[20%]      '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>N° Tareas activas en que Colabora</label>
                <div className='mt-5'>7</div>
            </div>
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Tareas en que Colabora</label>
                <div className='mt-5'>Tareitas 3</div>
            </div>
        </article>

        <article className='w-[50%]'>
            <div className='w-full h-[20%]       '>
                <label htmlFor="nombre" className='text-tamañoLetraChica'>Puntos Totales</label>
                <div className='mt-5'>190</div>
            </div>
            
            
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Puntos Mensuales</label>
                <div className='mt-5'>6</div>
            </div>
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Puntos Totales del Equipo</label>
                <div className='mt-5'>1079</div>
            </div>
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Puntos Mensuales del Equipo</label>
                <div className='mt-5'>88</div>
            </div>
            <div className='w-full h-[20%]      '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Comunicacion</label>
                <div className='flex gap-x-3 mt-1 py-2 cursor-pointer'>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'/>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png'/>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png'/>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'/>                
                </div>
            </div>
        </article>
        



    </form>
  )
}

export default FormLaboral