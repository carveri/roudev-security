import { EquipoCreate } from "../../equipo/application/useCases/EquipoCreate/EquipoCreate";
import { EquipoDelete } from "../../equipo/application/useCases/EquipoDelete/EquipoDelete";
import { EquipoGetAll } from "../../equipo/application/useCases/EquipoGetAll/EquipoGetAll";
import { EquipoGetOneById } from "../../equipo/application/useCases/EquipoGetOneById/EquipoGetOneById";
import { EquipoUpdate } from "../../equipo/application/useCases/EquipoUpdate/EquipoUpdate";
import { EquipoPrismaRepository } from "../../equipo/infrastructure/dbs/relational/EquipoPrismaRepository";


const equipoRepository = new EquipoPrismaRepository()

export const EquipoContainer = {
    equipo:{
        create: new EquipoCreate(equipoRepository),
        getAll: new EquipoGetAll(equipoRepository),
        getOneById: new EquipoGetOneById(equipoRepository),
        update: new EquipoUpdate(equipoRepository),
        delete: new EquipoDelete(equipoRepository)
    }
}