import { TipoContainer } from "@/app/(Back)/(modules)/shared/infrastructure/TipoContainer";
import { IParams } from "@/app/Interfaces/IParametros";


export class NTipoControllers {


    async create(req:Request){
        const {id, nombreTipoProyecto, manyProyectos} = await req.json()
        return TipoContainer.tipo.create.run(id, nombreTipoProyecto, manyProyectos)
    }

    async getAll(){
        return TipoContainer.tipo.getAll.run()
    }

    async getOneById({params}:IParams){
        const {id} = await params
        return TipoContainer.tipo.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams){

        const {id} = await params
        const {nombreTipoProyecto, manyProyectos} = await req.json()
        return TipoContainer.tipo.update.run(id, nombreTipoProyecto, manyProyectos)
    }

    async delete(req:Request, {params}:IParams){
        const {id} = await params
        console.log('param del contenedor:', id);
        return TipoContainer.tipo.delete.run(id)
    }
}