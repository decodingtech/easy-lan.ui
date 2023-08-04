<template>
    <div>
        <div class="allContainer">
            <div class="container123">
                <div class="container1">
                    <div class="number1 ">
                        <h1>{{ numberCategory }}</h1>
                        <h2>numero de categorias</h2>
                        <h1 @click="modal1" class="add"><img :src="option" alt="" class="option"></h1>
                    </div>
                    <div class="number1 number2">
                        <div class="ciruloafuera">
                            <div class="circulodentro">
                                <h3>0%</h3>
                            </div>
                        </div>
                        <hr>
                        <h2>Uso de categorias</h2>
                    </div>
                </div>

                <div class="container2">
                    <div class="number1">
                        <h1>{{ numberSubCategory }}</h1>
                        <h2>numero de subcategoria</h2>
                        <h1 @click="modal2" class="add"><img :src="option" alt="" class="option"></h1>
                    </div>
                    <div class="number1 number2">
                        <div class="ciruloafuera">
                            <div class="circulodentro">
                                <h3>0%</h3>
                            </div>
                        </div>
                        <hr>
                        <h2>Uso de subcategorias</h2>
                    </div>
                </div>
                <div class="container3">
                    <div class="number1">
                        <h1>{{ numberFrase }}</h1>
                        <h2>numero de frases</h2>
                        <h1 @click="modal3" class="add"><img :src="option" alt="" class="option"></h1>
                    </div>
                    <div class="number1 number2">
                        <div class="ciruloafuera">
                            <div class="circulodentro">
                                <h3>0%</h3>
                            </div>
                        </div>
                        <hr>
                        <h2>Uso de frases</h2>
                    </div>
                </div>
            </div>
            <div class="containerGrafica">
                <h3>contenedor unico</h3>
                <ul>
                    <li v-for="(dataMock, index) in dataMockable" :key="index">
                        <span>indice: </span>{{ dataMock.sentenceID }}
                        <span>Text English </span>{{ dataMock.englishText }}
                        <span>Text Spanish</span>{{ dataMock.spanishText }}
                        <hr>
                    </li>
                </ul>
                <hr>
                <ul>
                    <li v-for="(database, index) in databasearray" :key="index">
                        <span>indice: </span>{{ database.senId }}
                        <span>Text English </span>{{ database.senEnglish }}
                        <span>Text Spanish</span>{{ database.senSpanish }}
                        <span>Status</span>{{ database.status }}
                        <hr>
                    </li>
                </ul>

            </div>
        </div>
        <div>
            <div v-show="modal" class="modal">
                <h1 class="modalclose" @click="modalClose"></h1>
                <modalTSView :nombre="nombre" />
            </div>
            <div v-show="modalF" class="modal">
                <h1 class="modalclose" @click="modalClose2"></h1>
                <modalFView />
            </div>
        </div>
    </div>
</template>

<script >
import { ref, renderSlot } from 'vue';
import modalTSView from './modalTSView.vue';
import modalFView from './modalFView.vue';
import getsentences from '../service/getsentences';
import axios from 'axios';

export default {
    components: {
        modalTSView,
        modalFView
    },
    data() {
        const option = '../../public/ajustes.png';
        const numberFrase = 250;
        const numberCategory = 20;
        const numberSubCategory = 60;
        const nombre = ref('Welcome');
        const modal = ref(false);
        const modalF = ref(false);
        const showModal = () => {
            modal.value = true;
        }
        const modalClose = () => {
            modal.value = false;
        }
        const modalClose2 = () => {
            modalF.value = false;
        }
        const modal1 = () => {
            nombre.value = 'Category';
            modal.value = true;
        }
        const modal2 = () => {
            nombre.value = 'subcategory';
            modal.value = true;
        }
        const modal3 = () => {
            modalF.value = true;
        }
        const databasearray = ref([]);
        return {
            numberFrase,
            numberCategory,
            numberSubCategory,
            nombre,
            modal1,
            modal2,
            modal3,
            showModal,
            modal,
            modalF,
            modalClose,
            modalClose2,
            option,
            databasearray,

        }
    },
    methods: {
        async getdatabase() {
            const responce = await axios.get("http://localhost:8080/api/v1/sentences/allsentences");
            this.databasearray = responce.data;
            console.log("prueba: ", this.databasearray)
        },

    },
    created() {
        this.getdatabase();
    }
}


</script>

<style scoped>
.allContainer {
    display: flex;
}

.option {
    width: 20px;
    height: 20px;
}

.container123 {
    width: 53%;
}

.containerGrafica {
    background-color: rgb(255, 255, 255);
    text-align: center;
    width: 47%;
    height: 666px;
    overflow-y: auto;
}

.ciruloafuera {
    background-color: gray;
    width: 20%;
    height: 35%;
    margin-left: 38%;
    margin-top: 4%;
    padding-top: 1%;
    border-radius: 50%;
}

.circulodentro {
    background-color: white;
    width: 92%;
    height: 97%;
    margin-left: 4%;
    border-radius: 50%;
    margin-top: -27.8%;
}

.container1 {
    background-color: rgba(173, 222, 253, 0.553);
    display: flex;
    padding: 17px;
    width: 90%;
}

.container2 {
    background-color: rgba(145, 215, 250, 0.571);
    display: flex;
    padding: 17px;
    width: 90%;
}

.container3 {
    background-color: rgba(173, 222, 253, 0.548);
    display: flex;
    padding: 17px;
    width: 90%;
}


.modalclose {
    background-color: rgba(147, 147, 148, 0.612);
    width: 100%;
    height: 100%;
    margin-top: 0%;
    position: inherit;
    box-shadow: 0px 0px 30px rgb(0, 0, 0);
    backdrop-filter: blur(2px);
}

.modal {
    position: absolute;
    width: 99.2%;
    height: 99%;
    margin-top: -45%;
}

.add {
    background-color: rgb(141, 141, 141);
    width: 30%;
    margin-left: 35%;
    border-radius: 20px;
}

.add:hover {
    cursor: pointer;
    background-color: rgb(186, 186, 186);
}

.number1 {
    background-color: white;
    text-align: center;
    margin-left: 5%;
    width: 37%;
}

.number2 {
    width: 47%;
}
</style>