import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6ef89c40e0ee47a29a9a1cb4dd2ac402'
    }
})