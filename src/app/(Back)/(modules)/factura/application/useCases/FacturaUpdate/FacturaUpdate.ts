import { Factura, IManyProyectos } from "../../../domain/entities/Factura";
import { FacturaRepository } from "../../../domain/ports/FacturaRepository";


export class FacturaUpdate {
    constructor(private repository:FacturaRepository){}

    async run(id:string, nombreFactura:string, mesFacturacion:string, añoFacturacion:number, diaFacturacion:number, userId:string, manyProyectos: IManyProyectos){

        const factura = new Factura(
                    id,
                    nombreFactura,
                    mesFacturacion,
                    añoFacturacion,
                    diaFacturacion,
                    userId,
                    manyProyectos
                )


        return this.repository.update(factura)
    }
}