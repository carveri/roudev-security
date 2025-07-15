import React from 'react'

const FormPersonal = () => {
  return (
    <form className='w-full h-[80%]  flex justify-start text-tamañoLetraChica py-10 px-10 gap-x-5'>
        <article className='w-[50%] '>
            <div className='w-full h-[15%]      '>
                <label htmlFor="nombre" className='text-tamañoLetraChica'>Email Personal</label>
                <div className='text-blue-500 mt-5'>karen@gmail.com</div>
            </div>
            <div className='w-full h-[15%]       '>
                <label htmlFor="nombre" className='text-tamañoLetraChica'>Telefono Personal</label>
                <div className='mt-5'>+56954972749</div>
            </div>
            
            
            <div className='w-full h-[15%]      '>
                <label htmlFor="nombre" className='text-tamañoLetraChica'>Email Laboral </label>
                <div className='text-blue-500 mt-5'>karen@hilti.com</div>
            </div>
            <div className='w-full h-[15%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Telefono Laboral</label>
                <div className='mt-5'>+56954972749</div>
            </div>
            <div className='w-full h-[15%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Nombre Responsable del Equipo</label>
                <div className='mt-5'>Jorge Gomez</div>
            </div>
            <div className='w-full h-[15%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Email Responsable del Equipo</label>
                <div className='text-blue-500 mt-5'>jorge@hilti.com</div>
            </div>
        </article>

        <article className='w-[50%]'>
            <div className='w-full h-[20%]       '>
                <label htmlFor="nombre" className='text-tamañoLetraChica'>Area</label>
                <div className='mt-5'>Desarrollo</div>
            </div>
            
            
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Equipo</label>
                <div className='mt-5'>Equipo 1 </div>
            </div>
            <div className='w-full h-[20%]       '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Cargo</label>
                <div className='mt-5'>Desarrollador backend Senior</div>
            </div>
            {/* <div className='w-full h-[20%]    text-gray-600  '>
                <label htmlFor="apellido" className='text-tamañoLetraChica'>Comunicacion</label>
                <div className='flex gap-x-3 mt-1 py-2 cursor-pointer'>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'/>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png'/>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png'/>
                    <img width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'/>                
                </div>
            </div> */}
        </article>
        



    </form>
  )
}

export default FormPersonal