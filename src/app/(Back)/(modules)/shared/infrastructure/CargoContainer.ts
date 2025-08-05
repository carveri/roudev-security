import { CargoCreate } from "../../cargo/application/useCases/CargoCreate/CargoCreate";
import { CargoDelete } from "../../cargo/application/useCases/CargoDelete/CargoDelete";
import { CargoGetAll } from "../../cargo/application/useCases/CargoGetAll/CargoGetAll";
import { CargoGetOneById } from "../../cargo/application/useCases/CargoGetOneById/CargoGetOneById";
import { CargoUpdate } from "../../cargo/application/useCases/CargoUpdate/CargoUpdate";
import { CargoPrismaRepository } from "../../cargo/infrastructure/dbs/prisma/CargoPrismaRepository";

const cargoRepository = new CargoPrismaRepository()

export const CargoContainer = {

    cargo: {
        create: new CargoCreate(cargoRepository),
        getAll: new CargoGetAll(cargoRepository),
        getOneById: new CargoGetOneById(cargoRepository),
        update: new CargoUpdate(cargoRepository),
        delete: new CargoDelete(cargoRepository)
    }


}