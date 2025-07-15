
export const dataListaTareas =[
    {
        id:'1',
        nombreTarea: 'Tarea 1',
        creador: 'Eric Gonzalez',
        responsable: 'Juan Perez',
        equipoResponsable: 'A',
        cargoResponsable: 'Backend',
        colaboradores: [
            // {
            //     nombre: 'Juan Perez',
            //     cargo: 'Backend'
            // },
            // {
            //     nombre: 'Marcos Rivas',
            //     cargo: 'Base de datos'
            // },
            // {
            //     nombre: 'Maria Donoso',
            //     cargo: 'Diseño'
            // }
        ],
        urgencia: 'Media',
        fechaInicio: '12-02-2025',
        fechaTermino: '23-02-2025',
        completada: true
    },
    {
        id:'2',
        nombreTarea: 'Tarea 2',
        creador: 'Eric Gonzalez',
        responsable: 'Juan Perez',
        equipoResponsable: 'A',
        cargoResponsable: 'Backend',
        colaboradores: [
            {
                nombre: 'Juan Perez',
                cargo: 'Backend'
            },
            // {
            //     nombre: 'Marcos Rivas',
            //     cargo: 'Base de datos'
            // },
            {
                nombre: 'Maria Donoso',
                cargo: 'Diseño'
            }
        ],
        urgencia: 'Alta',
        fechaInicio: '01-02-2025',
        fechaTermino: '21-02-2025',
        completada: false
    },
    {
        id:'3',
        nombreTarea: 'Tarea 3',
        creador: 'Eric Gonzalez',
        responsable: 'Marcos Rivas',
        equipoResponsable: 'B',
        colaboradores: [
            {
                nombre: 'Juan Perez',
                cargo: 'Backend'
            },
            {
                nombre: 'Marcos Rivas',
                cargo: 'Base de datos'
            },
            {
                nombre: 'Maria Donoso',
                cargo: 'Diseño'
            }
        ],
        urgencia: 'Media',
        cargoResponsable: 'Base de datos',
        fechaInicio: '10-02-2025',
        fechaTermino: '29-02-2025',
        completada: false
    },
    {
        id:'4',
        nombreTarea: 'Tarea 4',
        creador: 'Eric Gonzalez',
        responsable: 'Juan Perez',
        equipoResponsable: 'C',
        colaboradores: [
            // {
            //     nombre: 'Juan Perez',
            //     cargo: 'Backend'
            // },
            {
                nombre: 'Marcos Rivas',
                cargo: 'Base de datos'
            },
            {
                nombre: 'Maria Donoso',
                cargo: 'Diseño'
            }
        ],
        urgencia: 'Alta',
        cargoResponsable: 'Backend',
        fechaInicio: '12-02-2025',
        fechaTermino: '23-02-2025',
        completada: true
    },
    {
        id:'5',
        nombreTarea: 'Tarea 5',
        creador: 'Eric Gonzalez',
        equipoResponsable: 'B',
        colaboradores: [
            {
                nombre: 'Juan Perez',
                cargo: 'Backend'
            },
            // {
            //     nombre: 'Marcos Rivas',
            //     cargo: 'Base de datos'
            // },
            // {
            //     nombre: 'Maria Donoso',
            //     cargo: 'Diseño'
            // }
        ],
        urgencia: 'Baja',
        responsable: 'Maria Donoso',
        cargoResponsable: 'Diseño',
        fechaInicio: '12-02-2025',
        fechaTermino: '23-02-2025',
        completada: false
    },
    // {
    //     id:'1',
    //     nombreTarea: 'Tarea 1',
    //     responsable: 'Juan Perez',
    //     cargoResponsable: 'Backend',
    //     fechaInicio: '12-02-2025',
    //     fechaTermino: '23-02-2025',
    //     completada: true
    // },
    // {
    //     id:'2',
    //     nombreTarea: 'Tarea 2',
    //     responsable: 'Juan Perez',
    //     cargoResponsable: 'Backend',
    //     fechaInicio: '01-02-2025',
    //     fechaTermino: '21-02-2025',
    //     completada: false
    // },
    // {
    //     id:'3',
    //     nombreTarea: 'Tarea 3',
    //     responsable: 'Marcos Rivas',
    //     cargoResponsable: 'Base de datos',
    //     fechaInicio: '10-02-2025',
    //     fechaTermino: '29-02-2025',
    //     completada: false
    // },
    // {
    //     id:'4',
    //     nombreTarea: 'Tarea 4',
    //     responsable: 'Juan Perez',
    //     cargoResponsable: 'Backend',
    //     fechaInicio: '12-02-2025',
    //     fechaTermino: '23-02-2025',
    //     completada: true
    // },
    // {
    //     id:'5',
    //     nombreTarea: 'Tarea 5',
    //     responsable: 'Maria Donoso',
    //     cargoResponsable: 'Diseño',
    //     fechaInicio: '12-02-2025',
    //     fechaTermino: '23-02-2025',
    //     completada: false
    // },
    // {
    //     id:'1',
    //     nombreTarea: 'Tarea 1',
    //     responsable: 'Juan Perez',
    //     cargoResponsable: 'Backend',
    //     fechaInicio: '12-02-2025',
    //     fechaTermino: '23-02-2025',
    //     completada: true
    // },
    // {
    //     id:'2',
    //     nombreTarea: 'Tarea 2',
    //     responsable: 'Juan Perez',
    //     cargoResponsable: 'Backend',
    //     fechaInicio: '01-02-2025',
    //     fechaTermino: '21-02-2025',
    //     completada: false
    // },
    // {
    //     id:'3',
    //     nombreTarea: 'Tarea 3',
    //     responsable: 'Marcos Rivas',
    //     cargoResponsable: 'Base de datos',
    //     fechaInicio: '10-02-2025',
    //     fechaTermino: '29-02-2025',
    //     completada: false
    // },
    // {
    //     id:'4',
    //     nombreTarea: 'Tarea 4',
    //     responsable: 'Juan Perez',
    //     cargoResponsable: 'Backend',
    //     fechaInicio: '12-02-2025',
    //     fechaTermino: '23-02-2025',
    //     completada: true
    // },
    // {
    //     id:'5',
    //     nombreTarea: 'Tarea 5',
    //     responsable: 'Maria Donoso',
    //     cargoResponsable: 'Diseño',
    //     fechaInicio: '12-02-2025',
    //     fechaTermino: '23-02-2025',
    //     completada: false
    // },
]