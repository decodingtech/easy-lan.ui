import api from "./api";

export default {
    getDataSentences(){
        return api().get('/allsentences');
    },
    postDataSentences(sentence){
        return api().post('/save', sentence);
    },
    deleteDataSentences(id){
        return api().delete('/delete/'+id)
    },
    updateDataSentences(sentenceUpdate){
        return api().post('/save',sentenceUpdate);
    }

}