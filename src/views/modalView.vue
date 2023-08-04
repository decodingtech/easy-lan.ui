<template>
    <div class="modal">
        <h1>Pop Window</h1>
        <h4>select a category</h4>
        <select v-model="category">
            <option disabled value="">Selected option</option>
            <option v-for="(dato, index) in datos">{{ dato.tipesentence }}</option>
        </select>
        <p>has seleccionado: {{ category }}</p>

        <h4>select a subcategory</h4>
        <select v-model="subcategory">
            <option disabled value="">Selected option</option>
            <option v-for="(dato, index) in datos">
                <div v-if="dato.tipesentence === category">{{ dato.subTypeSentences }}</div>
            </option>
        </select>

        <br><br>
        <div>
            <label v-for="(dato, index) in datos">
                <div v-if="category === dato.tipesentence && subcategory === dato.subTypeSentences">
                    {{ dato.sentenceTxt }}
                    <input type="checkbox" name="chekbox" id="hola">
                </div>
            </label>
        </div>
        <div>
            <button>Aceptar</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import datos from '../datos.json'
import columnsView from '../views/columnsView.vue'
const category = ref('');
const subcategory = ref('');

</script>
<style scoped> .modal {
     position: absolute;
     background-color: rgb(60, 84, 129);
     width: 50%;
     height: 70%;
     margin-left: 24%;
     margin-top: 5.5%;
     border-radius: 10px;
     box-shadow: 0px 0px 20px rgb(0, 0, 0);
     text-align: center;
     color: white;
 }
</style>