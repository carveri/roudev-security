'use server'

import { postData } from "@/app/(Front)/React/Fetch/postData"
import { redirect } from "next/navigation"
//import { redirect } from "next/dist/server/api-utils"

export const createUser = async(formData:FormData)=>{
    
    
    const primerNombre = formData.get('primerNombre')
    const apellidoPaterno = formData.get('apellidoPaterno')
    const apellidoMaterno = formData.get('apellidoMaterno')
    const email = formData.get('email')
    const rutPersonal = formData.get('rutPersonal')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const statusEnProyecto = 'Ceo'


    if(!primerNombre || !apellidoPaterno || !email || !rutPersonal || !password){
      console.log('Tienes que completar todos los campos!');
      
      return
    }
    
      
    if(password !==confirmPassword) {
      console.log('Las contraseñas tienen que ser iguales');
      
      return
    }

    const data = {
      primerNombre,
      apellidoPaterno,
      apellidoMaterno,
      rutPersonal,
      password,
      email,
      statusEnProyecto,
      "planId": "993a2857-8be0-4abb-9c7c-69142767352f"

    }

    const ruta = 'user'
    await postData({ruta, data})


    //console.log({data});
    redirect('/api/auth/login')




  }