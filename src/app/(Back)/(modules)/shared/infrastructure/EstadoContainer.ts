import { EstadoCreate } from "../../estado/applications/useCases/EstadoCreate/EstadoCreate"
import { EstadoDelete } from "../../estado/applications/useCases/EstadoDelete/EstadoDelete"
import { EstadoGetAll } from "../../estado/applications/useCases/EstadoGetAll/EstadoGetAll"
import { EstadoGetOneById } from "../../estado/applications/useCases/EstadoGetOneById/EstadoGetOneById"
import { EstadoUpdate } from "../../estado/applications/useCases/EstadoUpdate/EstadoUpdate"
import { PrismaEstadoRepository } from "../../estado/infrastructure/dbs/PrismaEstadoRepository"

// gestor
const estadoRepository = new PrismaEstadoRepository()

export const EstadoContainer = {
    estado: {
        create: new EstadoCreate(estadoRepository),
        getAll: new EstadoGetAll(estadoRepository),
        getOneById: new EstadoGetOneById(estadoRepository),
        update: new EstadoUpdate(estadoRepository),
        delete: new EstadoDelete(estadoRepository)
    }
}