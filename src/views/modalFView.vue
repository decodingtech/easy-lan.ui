<template>
    <div class="modal">
        <h1>Pop Windows</h1>
        <h3>Agregando frases...</h3>
        <label for="">Category</label>
        <select name="" id="">
            <option disabled value="">Selecte category</option>
        </select>
        <label for="">Subcategory</label>
        <select name="" id="">
            <option disabled value=""> Selecte subcategory</option>
        </select>

        <h4>Frase en Español</h4>
        <input type="text">
        <h4>Frase en Ingles</h4>
        <input type="text">
        <br><br>
        <button>Save</button>
    </div>
</template>
<script setup >
import { ref } from 'vue';



</script>
<style scoped> label {
     margin-left: 20px;
 }

 select {
     margin: 5px;
 }

 .modal {
     position: absolute;
     background-color: rgb(52, 52, 52);
     width: 50%;
     height: 70%;
     margin-left: 24%;
     margin-top: 5.5%;
     border-radius: 10px;
     box-shadow: 0px 0px 20px rgb(0, 0, 0);
     text-align: center;
 }
</style>