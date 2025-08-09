import { FormaCreate } from "../../forma/application/useCases/FormaCreate/FormaCreate";
import { FormaDelete } from "../../forma/application/useCases/FormaDelete/FormaDelete";
import { FormaGetAll } from "../../forma/application/useCases/FormaGetAll/FormaGetAll";
import { FormaGetOneById } from "../../forma/application/useCases/FormaGetOneById/FormaGetOneById";
import { FormaUpdate } from "../../forma/application/useCases/FormaUpdate/FormaUpdate";
import { FormaPrismaRepository } from "../../forma/infrastructure/dbs/relational/prisma/FormaPrismaReposirory";


const formaRepository = new FormaPrismaRepository()

export const FormaContainer = {
    forma: {
        create: new FormaCreate(formaRepository),
        getAll: new FormaGetAll(formaRepository),
        getOneById: new FormaGetOneById(formaRepository),
        update: new FormaUpdate(formaRepository),
        delete: new FormaDelete(formaRepository)
    }
}