import { ProyectoCreate } from "../../proyecto/application/useCases/ProyectoCreate/ProyectoCreate";
import { ProyectoDelete } from "../../proyecto/application/useCases/ProyectoDelete/ProyectoDelete";
import { ProyectoGetAll } from "../../proyecto/application/useCases/ProyectoGetAll/ProyectoGetAll";
import { ProyectoGetOneById } from "../../proyecto/application/useCases/ProyectoGetOneById/ProyectoGetOneById";
import { ProyectoUpdate } from "../../proyecto/application/useCases/ProyectoUpdate/ProyectoUpdate";
import { ProyectoPrismaRepository } from "../../proyecto/infrastructure/dbs/relational/prisma/ProyectoPrismaRepository";


export const proyectoRepository = new ProyectoPrismaRepository()

export const ProyectoContainer = {
    proyecto:{
        create: new ProyectoCreate(proyectoRepository),
        getAll: new ProyectoGetAll(proyectoRepository),
        getOneById: new ProyectoGetOneById(proyectoRepository),
        update: new ProyectoUpdate(proyectoRepository),
        delete: new ProyectoDelete(proyectoRepository)
    }
}