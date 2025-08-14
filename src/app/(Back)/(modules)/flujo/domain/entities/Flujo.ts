

export class Flujo {
    id:string
    ingresosPorVentas:number
    valorTicket:number
    crecimientoDelTicket: number

    
    constructor(id:string,ingresosPorVentas:number, valorTicket:number, crecimientoDelTicket:number ){
        this.id = id
        this.ingresosPorVentas = ingresosPorVentas
        this.valorTicket = valorTicket
        this.crecimientoDelTicket = crecimientoDelTicket
    }
}