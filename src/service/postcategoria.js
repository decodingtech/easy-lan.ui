import api from "./api";

export default{
    postData(categorias){
        return api().post('/categorias', categorias);
    }
}