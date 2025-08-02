import { PrismaBalanceRepository } from "../../balance/infrastructure/db/PrismaBalanceRepository"
import { EstadoCreate } from "../../estado/application/useCases/EstadoCreate/EstadoCreate"
import { EstadoDelete } from "../../estado/application/useCases/EstadoDelete/EstadoDelete"
import { EstadoGetAll } from "../../estado/application/useCases/EstadoGetAll/EstadoGetAll"
import { EstadoGetOneById } from "../../estado/application/useCases/EstadoGetOneById/EstadoGetOneById"
import { EstadoUpdate } from "../../estado/application/useCases/EstadoUpdate/EstadoUpdate"
import { PrismaEstadoRepository } from "../../estado/infrastructure/dbs/PrismaEstadoRepository"

// ACA VA EL REPOSITORIO QUE VOY A UTILIZAR 
const estadoRepository = new PrismaEstadoRepository()

export const EstadoContainer = {
    estado:{
        create: new EstadoCreate(estadoRepository),
        getAll: new EstadoGetAll(estadoRepository),
        getOneById: new EstadoGetOneById(estadoRepository),
        update: new EstadoUpdate(estadoRepository),
        delete: new EstadoDelete(estadoRepository)
    }
}