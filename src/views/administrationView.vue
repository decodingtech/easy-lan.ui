<template>
    <div class="allContainer">

        <div class="container1">
            <div class="number1 ">
                <h1>{{ numberCategory }}</h1>
                <h2>numero de categorias</h2>
                <h1 @click="modal1" class="add">+</h1>
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
                <h1 @click="modal2" class="add">+</h1>
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
                <h1 @click="modal3" class="add">+</h1>
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
        <div class="containerGrafica">
            <h3>contenedor unico</h3>
            <ul>
                <li v-for="(post, index) in posts " :key="index">{{ post.tipesentence }}
                    :{{ post.subTypeSentences }}
                    - {{ post.sentenceTxt }}</li>
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
</template>

<script>
import { ref, renderSlot } from 'vue';
import modalTSView from './modalTSView.vue';
import modalFView from './modalFView.vue'

export default {
    components: {
        modalTSView,
        modalFView
    },
    setup() {
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

        }
    },
    created() {
        fetch(' https://demo1761734.mockable.io/frases')
            .then((res) => res.json())
            .then((posts) => {
                this.posts = posts;
            });
    }
}


</script>

<style>
.containerGrafica {
    background-color: white;
    text-align: center;
    width: 47%;
    height: 666px;
    float: right;
    margin-top: -43.85%;
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
    width: 50%;
}

.container2 {
    background-color: rgba(145, 215, 250, 0.571);
    display: flex;
    padding: 17px;
    width: 50%;
}

.container3 {
    background-color: rgba(173, 222, 253, 0.548);
    display: flex;
    padding: 17px;
    width: 50%;
}

.modalclose {
    background-color: rgba(147, 147, 148, 0.612);
    width: 99.5%;
    height: 99.5%;
    margin-top: -0.1%;
    position: absolute;
    box-shadow: 0px 0px 30px rgb(0, 0, 0);
}

.modal {
    width: 99.5%;
    height: 98%;
    margin-top: -44.7%;
    position: absolute;
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