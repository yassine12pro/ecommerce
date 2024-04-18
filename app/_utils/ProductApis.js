const { default: axiosClient } = require("./axiosClient");

const getLatestProduct=()=>axiosClient.get("/products?populate=*")
const getproductbyid=(id)=>axiosClient.get(`/products/${id}/?populate=*`)
const getproductbycategory=(category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
export default {
    getLatestProduct,
    getproductbyid,
    getproductbycategory,

}