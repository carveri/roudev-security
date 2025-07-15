
export const getDataCompleja3 = async({ruta, elem1, param1})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}?${elem1}=${param1}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        
    }
}