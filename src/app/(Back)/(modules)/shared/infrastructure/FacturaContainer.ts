import { FacturaCreate } from "../../factura/application/useCases/FacturaCreate/FacturaCreate";
import { FacturaDelete } from "../../factura/application/useCases/FacturaDelete/FacturaDelete";
import { FacturaGetAll } from "../../factura/application/useCases/FacturaGetAll/FacturaGetAll";
import { FacturaGetOneById } from "../../factura/application/useCases/FacturaGetOneById/FacturaGetOneById";
import { FacturaUpdate } from "../../factura/application/useCases/FacturaUpdate/FacturaUpdate";
import { FacturaPrismaRepository } from "../../factura/infrastructure/dbs/relational/prisma/FacturaPrismaRepository";


const facturaRepository = new FacturaPrismaRepository()

export const FacturaContainer = {
    factura:{
        create: new FacturaCreate(facturaRepository),
        getAll: new FacturaGetAll(facturaRepository),
        getOneById: new FacturaGetOneById(facturaRepository),
        update: new FacturaUpdate(facturaRepository),
        delete: new FacturaDelete(facturaRepository)
    }
}