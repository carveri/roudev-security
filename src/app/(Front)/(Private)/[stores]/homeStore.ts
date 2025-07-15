import { create } from 'zustand'
import { getDataCompleja3 } from '../../React/Fetch/getDataCompleja3'
import { getDataLista } from '../../React/Fetch/getDataLista'
import { getDataCompleja } from '../../React/Fetch/getDataCompleja'
import { getDataCompleja2 } from '../../React/Fetch/getDataCompleja2'
import { getDataCompleja4 } from '../../React/Fetch/getDataCompleja4'
import { getData } from '../../React/Fetch/getData'

export const useStore = create((set) => ({
  bears: '',
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears:string) => set({ bears: newBears }),
}))


export const useIdCeo = create((set)=>({
  idCeo: [],
  updateIdCeo: (newIdCeo:[string]) => set({ idCeo: newIdCeo }),
}))


export const useIdProyectoPro = create((set)=>({
  idProyecto: '',
  updateIdProyecto: (newIdProyecto:string) => set({ idProyecto: newIdProyecto }),
}))

// updated proyecto id
export const useIdProyectoProUpdated = create((set)=>({
  idProyectoUpdated: '',
  updateIdProyectoId: (newIdProyecto:string) => set({ idProyectoUpdated: newIdProyecto }),
}))

// // updated proyecto id
// export const useIdProyectoProUpdated2 = create((set)=>({
//   idProyectoUpdated: '',
//   nombreProyectoUpdated: 0
//   updateIdProyectoId2: (newIdProyecto:string) => set({ idProyectoUpdated: newIdProyecto }),
// }))


export const useNombreProyectoPro = create((set)=>({
  nombreProyecto: '',
  updateNombreProyecto: (newNombreProyecto:string) => set({ nombreProyecto: newNombreProyecto }),
}))


export const useIdTareaSelecccionado = create((set)=>({
  tareaSeleccionadoId: '',
  updateTareaSeleccionadoId: (newIdTareaSeleccionada: string) => set({tareaSeleccionadoId: newIdTareaSeleccionada})
}))


export const useIdResponsableTarea = create((set)=>({
  idResponsableTarea: '',
  updateIdResponsableTarea: (newIdResponsableTarea: string) => set({idResponsableTarea: newIdResponsableTarea})
}))



// traer tareas 
export const useHistoriaAdmin = create((set)=>
({
    tareas: [],
    
    getTareas: async(idTarea)=>{
        const ruta = 'tarea'
        const url = idTarea
        const tareas = await getDataLista({ruta, url})
                        
        set(state => ({
            ...state, 
            tareas
        }))
    }
}))


export const useTareaStatus = create((set)=>
({
    tareasStatus: [],
    
    getTareasStatus: async(proyId, userId, stat)=>{
        const ruta = 'tarea'
        const elem1 = 'proyectoId'
        const param1 = proyId
        const elem2 = 'userId'
        const param2 = userId
        const elem3 = 'status'
        const param3 = stat
        
        
        const tareasStatus = await getDataCompleja({ruta, elem1, param1, elem2, param2, elem3, param3})
                        
        set(state => ({
            ...state, 
            tareasStatus
        }))
    }
}))


// TRAER PROYECTO UNICO
export const useProyectoUpdate = create((set)=>
({
    proyecto: [],
    
    getProyecto: async(idProyectoUpdated)=>{
        const ruta = 'proyecto2'
        const url = idProyectoUpdated
        const proyecto = await getDataLista({ruta, url})
                        
        set(state => ({
            ...state, 
            proyecto
        }))
    }
}))



// traer proyectos por userId
export const useProyectoPorUser = create((set)=>
({
    proyectosUser: [],
    
    getProyectosUser: async(idUser)=>{
        const ruta = 'proyectoUser'
        const url = idUser
        const proyectosUser = await getDataLista({ruta, url})
                        
        set(state => ({
            ...state, 
            proyectosUser
        }))
    }
}))



// traer proyectos por userId
export const useUserOnProyecto = create((set)=>
({
    userOnProyecto: [],
    
    getUserOnProyecto: async(proyectoId)=>{
        const ruta = 'userOnProyecto'
        const elem1 = 'proyectoId'
        const param1 = proyectoId
        const userOnProyecto = await getDataCompleja3({ruta, elem1,  param1})
                        
        set(state => ({
            ...state, 
            userOnProyecto
        }))
    }
}))



// // traer proyectos por userId
// export const useProyectoPorUserId = create((set)=>
// ({
//     proyectoPorUserId: [],
    
//     getUserOnProyecto: async(proyectoId)=>{
//         const ruta = 'proyecto2'
//             const elem1 = 'proyectoId'
//             const param1 = bears ?? '9888686d-de2d-4ec4-8ee2-f4f249827419'
//             const elem2 = 'userId'
//             const param2 = idCeo[0] ?? 'c814075d-b44c-4474-970c-3b62c087d3f3'
//             const getProo = async()=>{
//             const proyectoPorUserId = await getDataCompleja2({ruta, elem1, param1, elem2, param2})  
//             }
                        
//         set(state => ({
//             ...state, 
//             proyectoPorUserId
//         }))
//     }
// }))


// traer finalidades del proyecto
export const useFinalidadProyectos = create((set)=>
({
    finalidadProyecto: [],
    
    getFinalidadesDeProyectos: async()=>{
        const ruta = 'finalidadProyecto'
        //const url = idTarea
        const finalidadProyecto = await getData({ruta})
                        
        set(state => ({
            ...state, 
            finalidadProyecto
        }))
    }
}))


// traer finalidades del proyecto
export const useTipoProyectos = create((set)=>
({
    tipoProyecto: [],
    
    getTiposDeProyectos: async()=>{
        const ruta = 'tipoProyecto'
        //const url = idTarea
        const tipoProyecto = await getData({ruta})
                        
        set(state => ({
            ...state, 
            tipoProyecto
        }))
    }
}))