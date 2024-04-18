const { default: axiosClient } = require("./axiosClient");


const addtocart=(paylod)=>axiosClient.post("/carts",paylod)
const getusercartitems=(email)=>axiosClient.get(`carts?populate[products][populate]=banner&filtres[email][$eq]=${email}`)
const deleteitem = (id)=>axiosClient.delete(`/carts/${id}`)

export default{
    addtocart,
    getusercartitems,
    deleteitem


}