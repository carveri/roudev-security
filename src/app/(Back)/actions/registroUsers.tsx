'use server'

import { postData } from "@/app/(Front)/React/Fetch/postData"
import { sendEmail } from "@/lib/brevo"
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

    // acá le mando el correo de bienvenida al usuario
    await sendEmail({
      title: `Bienvenid@ a Roudev`,
      to: [
        {
          email:email as string,
          name:primerNombre as string
        }
      ],
      htmlContent:'Tú cuenta de prueba comienza hoy y durara 30 dias corridos, en cualquier momento puedes darte de baja, 3 dias antes de terminar tú prueba se va a activar tú medio de pago, si no necesitas seguir utilizando Roudev.com, puedes rechazarlo sin problemas. Espero que tú prueba te ayude a mejorar la gestion de tus proyectos. Suerte'
    })


    //console.log({data});
    redirect('/api/auth/login')




  }