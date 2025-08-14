import { CreateFlujo } from "../../flujo/application/useCases/CreateFlujo/CreateFlujo";
import { DeleteFlujo } from "../../flujo/application/useCases/DeleteFlujo/DeleteFlujo";
import { GetAllFlujo } from "../../flujo/application/useCases/GetAllFlujo/GetAllFlujo";
import { GetOneById } from "../../flujo/application/useCases/GetOneById/GetOneById";
import { UpdateFlujo } from "../../flujo/application/useCases/UpdateFlujo/UpdateFlujo";
import { FlujoPrismaRepository } from "../../flujo/infrastructure/dbs/relational/prisma/FlujoPrismaRepository";

const repository = new FlujoPrismaRepository()

export const FlujoContainer = {
    create: new CreateFlujo(repository),
    getAll: new GetAllFlujo(repository),
    getOneById: new GetOneById(repository),
    update: new UpdateFlujo(repository),
    delete: new DeleteFlujo(repository)
}