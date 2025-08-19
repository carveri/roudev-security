import { TareaCreate } from "../../tarea/application/useCases/TareaCreate/TareaCreate";
import { TareaDelete } from "../../tarea/application/useCases/TareaDelete/TareaDelete";
import { TareaForUserId } from "../../tarea/application/useCases/TareaForUserId/TareaForUserId";
import { TareaGetAll } from "../../tarea/application/useCases/TareaGetAll/TareaGetAll";
import { TareaGetOneById } from "../../tarea/application/useCases/TareaGetOneById/TareaGetOneById";
import { TareaUpdate } from "../../tarea/application/useCases/TareaUpdate/TareaUpdate";
import { TareaPrismaRepository } from "../../tarea/infrastructure/dbs/relational/prisma/TareaPrismaRepository";

const tareaRepository = new TareaPrismaRepository()

export const TareaContainer = {
    tarea:{
        create: new TareaCreate(tareaRepository),
        getAll: new TareaGetAll(tareaRepository),
        getOneById: new TareaGetOneById(tareaRepository),
        getForUser: new TareaForUserId(tareaRepository),
        getForProyectoId: new TareaForUserId(tareaRepository),
        update: new TareaUpdate(tareaRepository),
        delete: new TareaDelete(tareaRepository)
    }
}