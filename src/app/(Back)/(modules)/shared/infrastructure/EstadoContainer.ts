import { EstadoCreate } from "../../estado/application/useCases/EstadoCreate/EstadoCreate";
import { EstadoDelete } from "../../estado/application/useCases/EstadoDelete/EstadoDelete";
import { EstadoGetAll } from "../../estado/application/useCases/EstadoGetAll/EstadoGetAll";
import { EstadoGetOneById } from "../../estado/application/useCases/EstadoGetOneById/EstadoGetOneById";
import { EstadoUpdate } from "../../estado/application/useCases/EstadoUpdate/EstadoUpdate";
import { EstadoPrismaRepository } from "../../estado/infrastructure/dbs/relational/EstadoPrismaRepository";

const estadoRepository = new EstadoPrismaRepository()

export const EstadoContainer = {
    estado:{
        create: new EstadoCreate(estadoRepository),
        getAll: new EstadoGetAll(estadoRepository),
        getOneById: new EstadoGetOneById(estadoRepository),
        update: new EstadoUpdate(estadoRepository),
        delete: new EstadoDelete(estadoRepository)
    }
}