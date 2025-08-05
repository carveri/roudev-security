import { AreaCreate } from "../../area/application/useCases/AreaCreate/AreaCreate";
import { AreaDelete } from "../../area/application/useCases/AreaDelete/AreaDelete";
import { AreaGetAll } from "../../area/application/useCases/AreaGetAll/AreaGetAll";
import { AreaGetOneById } from "../../area/application/useCases/AreaGetOneById/AreaGetOneById";
import { AreaUpdate } from "../../area/application/useCases/AreaUpdate/AreaUpdate";
import { AreaPrismaRepository } from "../../area/infrastructure/dbs/AreaPrismaRepository";


// dependecia que voy a inyectar el repositorio que corresponda, el de prisma, postgres, mysql,... 
const areaRepository = new AreaPrismaRepository()

// acá lo unico que estoy haciendo es crear los objetos, nada más, es para que sea mas facil de usa en un futuro. 
export const AreaContainer = {
    area:{
        create: new AreaCreate(areaRepository),
        getAll: new AreaGetAll(areaRepository),
        getOneById: new AreaGetOneById(areaRepository),
        update: new AreaUpdate(areaRepository),
        delete: new AreaDelete(areaRepository)

    }
}