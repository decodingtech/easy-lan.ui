import api from "./api";

export default {
    getDataMock(){
        return api().get('/frases');
    }
}