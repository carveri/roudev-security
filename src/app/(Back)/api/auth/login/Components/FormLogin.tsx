'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from "next-auth/react";

const FormLogin = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin =(e:React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target.name === 'email'){
          setEmail(e.target.value)
      }
      else if(e.target.name === 'password'){
          setPassword(e.target.value)
      }
      else{
          console.log('sdsd');
      }
  }

  const handleSubmitLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const res = await signIn('credentials', {
          email: email,
          password: password,
          redirect: false
      })
      //console.log(res);
      if(res?.error){
          alert(res.error)
      }
      else{
          router.push('/dashboard/home')
      }
      
  }

  return (
    <div className='w-3/5 h-4/5 grid place-items-center text-(length:--tamañoLetra) text-white'>
          <form onSubmit={handleSubmitLogin} className=' var(--animate-pulse) w-2/6 h-5/6 bg-gradient-to-r from-gray-600 to-gray-800 px-8 rounded-md shadow-2xl'>
              <header className='w-full h-1/5 grid place-content-center text-base  font-semibold'>
                Inicio de Sesion
              </header>
              <main className='h-3/6'>
                <div className='h-2/5 grid'>
                  <label className='w-20 ' htmlFor="">Email</label>
                  <input name='email' onChange={handleChangeLogin} className='h-12 pl-3 bg-gray-100 text-gray-700 rounded' type="email" placeholder='usuario@correo.com'/>
                </div>
                <div className='h-2/5 grid'>
                  <label className='w-20 ' htmlFor="">Password</label>
                  <input name='password' onChange={handleChangeLogin} className='h-12 pl-3 bg-gray-100 text-gray-700 rounded' type="password" placeholder='*******************'/>
                </div>
                <div className='grid justify-end '>
                  <Link href={'/'}>¿Olvidaste tu contraseña?</Link>
                </div>
                <div className='h-1/6 '>
                  <input className='' type="checkbox" /> Recordarme 
                </div>
              </main>
              <button className='h-12 rounded w-full bg-[#35e83b] hover:bg-green-500 cursor-pointer hover:duration-300 text-white font-bold '>
                Ingresar
              </button>
              <div className='h-1/6 pt-6 text-white pl-1 flex justify-between px-2'>
                <div>¿Eres nuevo en Roudev?</div> <Link className='text-[#00ff08]  hover:underline font-semibold pl-2' href={'/api/auth/registro'}>Crear una cuenta</Link>
              </div>
          </form>
        </div>
  )
}

export default FormLogin