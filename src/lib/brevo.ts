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


// apiInstance.setApiKey(
//     TransactionalEmailsApi.apiKey,
//     process.env.BREVO_API_KEY as string
// )
apiInstance.authentications.apiKey.apiKey = process.env.BREVO_API_KEY as string

// generar el objeto de configuracion para ver a quie le envio el correo
const smtpEmail = new SendSmtpEmail()

export const sendEmail = async({title, to, htmlContent}:ParamsEmail)=>{
    try {
        smtpEmail.subject = title,
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
               
                h3{
                    color: #5908a5;
                }

                p{
                    color: #d9ffd7;    
                }

                button{
                    border: none;
                    width: 100px;
                    height: 30px;
                    font: bold;
                    display: grid;
                    justify-self: center;
                    cursor: pointer;
                    color: white;
                    font-size: 10px;
                }
            </style>
            <body>
                <main>
                    <h3>Bienvenid@ a Roudev</h3>
                    <p>${htmlContent}</p>
                    <button>Aceptar</button>
                </main>
            </body>
        </html>`
        smtpEmail.sender = {name: "Roudev", email: "roudev.contactos@gmail.com"}

        await apiInstance.sendTransacEmail(smtpEmail)
    } catch (error) {
        console.log('error del email:', error);
        
    }
}