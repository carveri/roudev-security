import { EquipoContainer } from "../../../shared/infrastructure/EquipoContainer";


interface IParam{
    id:string
}

interface IParams6{
    params:IParam
}


export class NEquipoController {

    async create(req:Request):Promise<void>{
        const {id, nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas} = await req.json()

        console.log(id, nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas);
        
        return await EquipoContainer.equipo.create.run(id, nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas)
    }

    async getAll(){
        
        return EquipoContainer.equipo.getAll.run()
    }

    async getOneById({params}:IParams6){
        const {id} = await params
        return EquipoContainer.equipo.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams6){
        const {id} = await params
        const {nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas} = await req.json()
        return EquipoContainer.equipo.update.run(id, nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas)
    }

    async delete(req:Request, {params}:IParams6){
        const {id} = await params
        return EquipoContainer.equipo.delete.run(id)
    }

}