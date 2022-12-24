import axios from "axios"
import toast from 'react-hot-toast';

axios.defaults.baseURL = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

const token = localStorage.getItem("token");

// common -> all http requests
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`


axios.interceptors.response.use(null, (error) => {

    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور رخ داده است");
    }
    
    return Promise.reject(error);
})



export const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}