import axiosClient from "./axiosClient";

const createorder=(data)=>axiosClient.post("/orders",data)
export default{
    createorder,
    
}