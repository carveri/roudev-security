import { TipoCreate } from "../../tipo/application/useCases/TipoCreate/TipoCreate";
import { TipoDelete } from "../../tipo/application/useCases/TipoDelete/TipoDelete";
import { TipoGetAll } from "../../tipo/application/useCases/TipoGetAll/TipoGetAll";
import { TipoGetOneById } from "../../tipo/application/useCases/TipoGetOneById/TipoGetOneById";
import { TipoUpdate } from "../../tipo/application/useCases/TipoUpdate/TipoUpdate";
import { TipoPrismaRepository } from "../../tipo/infrastructure/dbs/relational/TipoPrismaRepository";


export const tipoRepository = new TipoPrismaRepository()


export const TipoContainer ={
    tipo:{
        create: new TipoCreate(tipoRepository),
        getAll: new TipoGetAll(tipoRepository),
        getOneById: new TipoGetOneById(tipoRepository),
        update: new TipoUpdate(tipoRepository),
        delete: new TipoDelete(tipoRepository),
    }
}