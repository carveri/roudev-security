
interface Todo{
    id:string
}

export interface IManyProyectos {
    manyProyectos: Todo[]
}

export class Factura {
    
    id:string
    nombreFactura:string
    mesFacturacion:string
    añoFacturacion:number
    diaFacturacion:number
    userId:string
    manyProyectos: IManyProyectos

    
    constructor(id:string, nombreFactura:string, mesFacturacion:string, añoFacturacion:number, diaFacturacion:number, userId:string, manyProyectos: IManyProyectos){
        this.id = id
        this.nombreFactura = nombreFactura
        this.mesFacturacion = mesFacturacion
        this.añoFacturacion = añoFacturacion
        this.diaFacturacion = diaFacturacion
        this.userId = userId
        this.manyProyectos = manyProyectos
    }
}