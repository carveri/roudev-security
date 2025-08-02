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


// traer nombre del creador de una tarea

export const useGetCreadorTarea = create((set)=>
({
    creadorTarea: [],
    
    getCreadorTarea: async(tareas)=>{
        const ruta = 'user'
        const url = tareas[0]?.creadorTarea
        const creadorTarea = await getDataLista({ruta, url})
              
                        
        set(state => ({
            ...state, 
            creadorTarea
        }))
    }
}))


// traer nombre del responsable de una tarea

export const useGetResponsableTarea = create((set)=>
({
    responsableTarea: [],
    
    getResponsableTarea: async(tareas)=>{
        const ruta = 'user'
        const url = tareas[0]?.responsableTarea
        const responsableTarea = await getDataLista({ruta, url})
              
                        
        set(state => ({
            ...state, 
            responsableTarea
        }))
    }
}))


// traer nombre del equipo responsable de una tarea

export const useGetEquipoResponsableTarea = create((set)=>
({
    equipoResponsableTarea: [],
    
    getEquipoResponsableTarea: async(tareas)=>{
        const ruta = 'equipo'
        const url = tareas[0]?.equipoResponsableTarea
        const equipoResponsableTarea = await getDataLista({ruta, url})
              
                        
        set(state => ({
            ...state, 
            equipoResponsableTarea
        }))
    }
}))


// traer los usuarios de la tabla intermeda, pasandole el proyectid
// traer tareas 
export const useUsersOnProyectos = create((set)=>
({
    usersOnProyectos: [],
    
    getUsersOnProyectos: async(idProyecto)=>{
        const ruta = 'usersOnProyectos'
        const url = idProyecto
        const usersOnProyectos = await getDataLista({ruta, url})
                        
        set(state => ({
            ...state, 
            usersOnProyectos
        }))
    }
}))



// traer todos
export const useGetTareas = create((set)=>
({
    tareas: [],
    
    getTareas: async(proyectoId, idUser)=>{
        const ruta = 'tarea'
        const elem1 = 'proyectoId'
        const param1 = proyectoId
        const elem2 = 'userId'
        const param2 = idUser
        const elem3 = 'status'
        const param3 = 'Activa'
        const tareas = await getDataCompleja({ruta, elem1, param1, elem2, param2, elem3, param3})
                        
        set(state => ({
            ...state, 
            tareas
        }))
    }
}))
