import axios from "axios";

export default () =>{
    return axios.create({
        baseURL : 'https://demo1761734.mockable.io',
        headers:{
            'Accept': 'application/json',
            "Content-Type": 'application/json'
        }
    })
}