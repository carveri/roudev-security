// ESTE ES EL CONTENEDOR DE LOS 

import { BalanceCreate } from "../../balance/application/useCases/BalanceCreate/BalanceCreate";
import { BalanceDelete } from "../../balance/application/useCases/BalanceDelete/BalanceDelete";
import { BalanceGetAll } from "../../balance/application/useCases/BalanceGetAll/BalanceGetAll";
import { BalanceGetOneById } from "../../balance/application/useCases/BalanceGetOneById/BalanceGetOneById";
import { BalanceUpdate } from "../../balance/application/useCases/BalanceUpdate/BalanceUpdate";
import { InMemoryBalanceRepository } from "../../balance/infrastructure/db/InMemoryBalanceRepository";
import { PrismaBalanceRepository } from "../../balance/infrastructure/db/PrismaBalanceRepository";

// esto es solo para instancair los objetos, es como un archivo de barril

const balanceRepository = new PrismaBalanceRepository()

export const ServiceContainer  = {

    balance: {
        getAll: new BalanceGetAll(balanceRepository),
        getOneById: new BalanceGetOneById(balanceRepository),
        create: new BalanceCreate(balanceRepository),
        update: new BalanceUpdate(balanceRepository),
        delete: new BalanceDelete(balanceRepository)
        
    }
}