
export const getDataCompleja2 = async({ruta, elem1, param1, elem2, param2})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}?${elem1}=${param1}&${elem2}=${param2}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        
    }
}