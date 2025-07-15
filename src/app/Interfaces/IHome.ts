
interface IProyecto{
    
}



interface IMisPro {
    apellidoMaterno:string, 
    apellidoPaterno: string,
    avatar: string | null,
    añosDeExperiencia: number,
    createdAt: string, 
    dineroDisponible: number | null
    email: string,
    email2: string | null
    emailPersonal: string | null,
    emailVerified: null,
    emailVerified2: null,
    equity: number,
    fechaIngreso: string | null, 
    horaAt:string, 
    id: string,
    isActive: boolean,
    pago: boolean,
    password:string, 
    perfilGitHub: string | null,
    perfilLinkedin: null,
    perteneceAlProyecto:boolean, 
    planId:string,
    primerNombre:string, 
    proyectos:[{}], 
    puntosPersonales: number,
    rangoSalarialMaximo: number, 
    rangoSalarialMinimo: number,
    rutPersonal: string,
    salarioActual: number | null,
    segundoNombre: string |null,
    siguiendo: boolean,
    statusEnProyecto: string,
    telefonoLaboral: null,
    telefonoPersonal: null,
    tipoTrabajoActual: null,
    tipoTrabajoIdeal: null,
    trabajando: boolean,
    updatedAt: string
}



export interface IFiltrosMisProyectos {
    session: string | null
    misPro: IMisPro[],

}