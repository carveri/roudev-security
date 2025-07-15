
import alerta from "./../Assets/Icons/check2.png";
import admin from "./../Assets/Icons/adminAdmin9.png";
import email from "./../Assets/Icons/email.png";
import calendario from "./../Assets/Icons/calendario.png";
import targeta from "./../Assets/Icons/targeta.png";


export const dataRegistro = [
    {
        id:1,
        icono: alerta,
        titulo: 'Rut de empresa valido',
        descripcion: 'El rut de empresa que ingreses sera revisado en los registro del SII y el campo nombre de empresa se completara automaticamente.'
    },
    {
        id:2,
        icono: admin,
        titulo: 'Tienes que ser administrador',
        descripcion: 'Seras considerado como el administrador, vas a tener autorizacion para registrar personas de tú organizacion. '
    },
    {
        id:3,
        icono: email,
        titulo: 'Email de empresa',
        descripcion: 'Es necesario que ingreses tú email corporativo, no se validaran emails personales. '
    },
    {
        id:4,
        icono: calendario,
        titulo: 'La capa gratuita es por el primer mes',
        descripcion: 'La capa gratuita de Apolo Agile es por el primer mes y vas a poder agregar plugins de pago de acuerdo a tus necesidades.'
    },
    {
        id:5,
        icono: targeta,
        titulo: 'No es necesario tarjeta de credito ni ningun otro metodo de pago para tú prueba gratuita.',
        descripcion: ''
    },
    
]