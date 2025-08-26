import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

interface to {
    email: string
    name: string
}

interface ParamsEmail {
    title: string
    to: to[]
    htmlContent: string
}

let apiInstance:any = new TransactionalEmailsApi()

apiInstance.authentications.apiKey.apiKey = process.env.BREVO_API_KEY_USER as string

// generar el objeto de configuracion para ver a quie le envio el correo
const smtpEmail = new SendSmtpEmail()

export const sendEmailAgregarUser = async({title, to, htmlContent}:ParamsEmail)=>{
    try {
        smtpEmail.subject = title
        smtpEmail.to = to

        smtpEmail.htmlContent = `<html>
            <style>
                main{
                    background-color: #d9ffd7;
                    width: 200px;
                    height: 600px;
                    display: grid;
                    place-items: center;
                }
                
                div{
                    display: flex;
                }
               
                h3{
                    color: #5908a5;
                }

                p{
                    color: #d9ffd7;    
                }

                
            </style>
            <body>
                <main>
                    <h3>YYYYYYY te invito a sumarte al proyecto PROYECTO 1</h3>
                    <p>${htmlContent}</p>
                    <div>
                        <button>Aceptar</button>
                        <button>Rechazar</button>
                    </div>
                </main>
            </body>
        </html>`
        smtpEmail.sender = {name: "Roudevxxx", email: "roudev.contactos@gmail.com"}

        await apiInstance.sendTransacEmail(smtpEmail)
        
    } catch (error) {
        console.log('error del email invita user:', error);
        
    }
}