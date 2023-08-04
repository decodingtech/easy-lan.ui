<template>
    <div class="modalF">
        <div class="content-modal">
            <h1>Created</h1>
            <h3>Agregando frases...</h3>
            <label for="">Category</label>
            <select name="" id="" class="selectOption">
                <option disabled value="">Selecte category</option>
            </select><br><br>
            <label for="">Subcategory</label>
            <select name="" id="" class="selectOption">
                <option disabled value=""> Selecte subcategory</option>
            </select>

            <h4>Frase en Español</h4>
            <input type="text" class="inputText" v-model="textSpan">
            <h4>Frase en Ingles</h4>
            <input type="text" class="inputText" v-model="textEng">
            <br><br>
            <button class="save first" @click="postSentence">Save</button>
        </div>

        <div class="content-modal2">
            <h1>Update</h1>
            <p>Seleccione la frase en inlges que desee modificar </p>
            <!--
                <input type="text" class="inputText">                
            -->
            <select name="" id="" v-model="contentPUT" class="selectOption">
                <option v-for="(data, index) in databasearray">{{ data.senId }} {{ data.senEnglish }}</option>
            </select>
            <button @click="select">select</button>
            <br><br>
            <h3>seleccionaste: {{ contentPUT }}</h3>
            <p>Ingrese la nueva frase </p>
            <span>English </span>
            <input type="text" class="inputText" v-model="textEngUpdate">
            <span>Spanish </span>
            <input type="text" class="inputText" v-model="textSpanUpdate">
            <br>
            <button class="acept" @click="update">Update</button>
        </div>

        <div class="content-modal3">
            <h1>Delete</h1>
            <p>Escriba la frase en Ingles a elimiar </p>
            <!--<input type="text" class="inputText"> -->
            <br>
            <select name="" id="" v-model="indice" class="selectOption">
                <option v-for="(data, index) in databasearray">{{ data.senId }} {{ data.senEnglish }}</option>
            </select>
            <h3>seleccionaste: {{ indice }}</h3>
            <br>
            <button class="save" @click="deletee">Delete</button>
        </div>
    </div>
</template>
<script >
import { ref } from 'vue';
import axios from 'axios';
export default {
    setup() {
        const textEng = ref('');
        const textSpan = ref('');
        const textEngUpdate = ref('');
        const textSpanUpdate = ref('');
        const databasearray = ref([]);
        const indice = ref("");
        const contentPUT = ref("");
        let auxArray = ref({});

        return {
            textEng,
            textSpan,
            databasearray,
            indice,
            contentPUT,
            auxArray,
            textEngUpdate,
            textSpanUpdate,
        }
    },
    methods: {
        async getdatabase() {
            const responce = await axios.get("http://localhost:8080/api/v1/sentences/allsentences");
            this.databasearray = responce.data;
            console.log("prueba: ", this.databasearray)
        },
        async postSentence() {
            const sentence = {
                "senEnglish": this.textEng,
                "senSpanish": this.textSpan,
            }
            const responce = await axios.post("http://localhost:8080/api/v1/sentences/save", sentence);
        },
        async deletee() {
            const espacio = " ";
            this.auxArray = this.indice.split(espacio);
            console.log(this.auxArray[0]);
            let direccion = "http://localhost:8080/api/v1/sentences/delete/" + this.auxArray[0];
            console.log(direccion);
            const responce = await axios.delete(direccion);

        },
        async update() {
            //const espacio = " ";
            this.auxArray = this.contentPUT.split(" ");
            console.log(this.auxArray[0]);
            const sentenceUpdate = {
                "senId": this.auxArray[0],
                "senEnglish": this.textEngUpdate,
                "senSpanish": this.textSpanUpdate,
            }
            console.log(sentenceUpdate);
            const responce = await axios.post("http://localhost:8080/api/v1/sentences/save", sentenceUpdate);

        },
        select() {
            const espacio = " ";
            this.auxArray = this.contentPUT.split(espacio);
            console.log(this.auxArray[0]);
            for (const dat in this.databasearray) {
                if (this.databasearray[dat].senId == this.auxArray[0]) {
                    this.textEngUpdate = this.databasearray[dat].senEnglish;
                    this.textSpanUpdate = this.databasearray[dat].senSpanish;
                }
            }
            console.log("llamdno a la funcion: ", this.getdatabase);

        }
    },
    created() {
        this.getdatabase();
    }
}




</script>

<style scoped>
.selectOption {
    width: 65%;
    font-size: 16px;
    padding: 2%;
}

.inputText {
    margin-top: 4%;
    width: 80%;
    font-size: 16px;
    padding: 2%;
}

.save {
    margin-top: 50%;
    border-style: none;
    background-color: rgb(174, 210, 246);
    border-radius: 20px;
    height: 8%;
    width: 25%;
    color: white;
    font-size: 15px;
}

.acept {
    margin-top: 18%;
    border-style: none;
    background-color: rgb(80, 154, 239);
    border-radius: 20px;
    height: 8%;
    width: 25%;
    color: white;
    font-size: 15px;
}

.first {
    margin-top: -3%;
}

.content-modal {
    background-color: rgb(80, 154, 239);
    width: 45%;
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.685);
}

.content-modal2 {
    background-color: rgb(174, 210, 246);
    width: 45%;
    margin-left: 2%;
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.685);
}

.content-modal3 {
    background-color: rgb(80, 154, 239);
    width: 45%;
    margin-left: 2%;
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.685);
}

label {
    margin-left: 20px;
}

select {
    margin: 5px;
}

.modalF {
    position: absolute;
    background-color: rgb(60, 84, 129);
    width: 80%;
    height: 75%;
    margin-left: 8%;
    margin-top: 3.5%;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgb(0, 0, 0);
    text-align: center;
    color: white;
    display: flex;
    padding: 2% 2% 2% 2%;
}
</style>