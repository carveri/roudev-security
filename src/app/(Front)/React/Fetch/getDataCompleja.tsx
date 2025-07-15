

export const getDataCompleja = async({ruta, elem1, param1, elem2, param2, elem3, param3})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}?${elem1}=${param1}&${elem2}=${param2}&${elem3}=${param3}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        
    }
}