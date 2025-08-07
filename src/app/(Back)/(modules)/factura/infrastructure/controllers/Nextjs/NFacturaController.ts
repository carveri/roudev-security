import { FacturaContainer } from "@/app/(Back)/(modules)/shared/infrastructure/FacturaContainer"
import { IParams } from "@/app/Interfaces/IParametros"


export class NFacturaController {

    async create(req:Request){
        const {id, nombreFactura, mesFacturacion, añoFacturacion, diaFacturacion, userId, manyProyectos} = await req.json()
        return FacturaContainer.factura.create.run(id, nombreFactura, mesFacturacion, añoFacturacion, diaFacturacion, userId, manyProyectos )
    }

    async getAll(){
        return FacturaContainer.factura.getAll.run()
    }

    async getOneById(req:Request, {params}:IParams){
        const {id} = await params
        return FacturaContainer.factura.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams){
        const {id} = await params
        const {nombreFactura, mesFacturacion, añoFacturacion, diaFacturacion, userId, manyProyectos} = await req.json()
        return FacturaContainer.factura.update.run(id, nombreFactura, mesFacturacion, añoFacturacion, diaFacturacion, userId, manyProyectos )
    }

    async delete(req:Request, {params}:IParams){

        const {id} = await params
        return FacturaContainer.factura.delete.run(id)
    }


}