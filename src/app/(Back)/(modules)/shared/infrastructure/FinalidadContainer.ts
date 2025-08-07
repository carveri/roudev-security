import { FinalidadCreate } from "../../finalidad/application/useCases/FinalidadCreate/FinalidadCreate";
import { FinalidadDelete } from "../../finalidad/application/useCases/FinalidadDelete/FinalidadDelete";
import { FinalidadGetAll } from "../../finalidad/application/useCases/FinalidadGetAll/FinalidadGetAll";
import { FinalidadGetOneById } from "../../finalidad/application/useCases/FinalidadGetOneById/FinalidadGetOneById";
import { FinalidadUpdate } from "../../finalidad/application/useCases/FinalidadUpdate/FinalidadUpdate";
import { FinalidadPrismaRepository } from "../../finalidad/infrastructure/dbs/relational/FinalidadPrismaRepository";

const finalidadRepository = new FinalidadPrismaRepository()

export const FinalidadContainer = {
    finalidad:{
        create: new FinalidadCreate(finalidadRepository),
        getAll:new FinalidadGetAll(finalidadRepository),
        getOneById: new FinalidadGetOneById(finalidadRepository),
        update: new FinalidadUpdate(finalidadRepository),
        delete: new FinalidadDelete(finalidadRepository)
    }
}