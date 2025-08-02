import { createUser } from "@/app/(Back)/actions/registroUsers"


const FormRegistro = () => {
  return (
    <form action={createUser}  className='bg-gradient-to-r from-gray-600 to-gray-800 mt-14 w-[75%] h-[90%] text-white  py-7  px-11 border border-1-gray rounded-md text-(length:--tamañoLetraChica)'>
              <header className='w-full h-[7%] grid place-content-center   font-semibold text-base'>
                Registro
              </header>
              <main className='h-[82%] grid grid-rows-7 py-2'>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Primer Nombre *</label>
                  <input name='primerNombre' className=' rounded h-9 pl-3 bg-gray-100 text-gray-800 border border-gray-300' type="text" placeholder='Jorge'/>
                </div>
                
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Apellido Paterno *</label>
                  <input  name='apellidoPaterno' className=' rounded h-9 pl-3 bg-gray-100 text-gray-800 border border-gray-300' type="text" placeholder='Diaz'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Apellido Materno</label>
                  <input  name='apellidoMaterno' className=' rounded h-9 pl-3 bg-gray-100 text-gray-800 border border-gray-300' type="text" placeholder='Lopez'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5'  htmlFor="">Email de empresa *</label>
                  <input  name='email' className='rounded text-gray-800 h-9 pl-3 bg-gray-100' type="email" placeholder='Jorge@gmail.com'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5'  htmlFor="">Rut Personal (Con puntos y guion) * </label>
                  <input  name='rutPersonal' className='rounded text-gray-800 h-9 pl-3 bg-gray-100' type="text" placeholder='20.000.000-0'/>
                </div>
                
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Password *</label>
                  <input  name='password' className='rounded text-gray-800 h-9 pl-3 bg-gray-100' type="password" placeholder='*************'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Repetir Password *</label>
                  <input  name='confirmPassword' className='rounded text-gray-800 h-9 pl-3 bg-gray-100' type="password" placeholder='*************'/>
                </div>
              </main>
              <div className='h-[10%] w-ful grid items-center mt-2'>
                <button   className='h-[68%]  rounded cursor-pointer bg-[#00ff08] hover:bg-[#35e83b]  hover:duration-300 w-full text-white font-bold '>
                  Ingresar
                </button>
              </div>
          </form>
  )
}

export default FormRegistro