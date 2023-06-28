<template>
    <div class="modal">
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
            <input type="text" class="inputText">
            <h4>Frase en Ingles</h4>
            <input type="text" class="inputText">
            <br><br>
            <button class="save first">Save</button>
        </div>

        <div class="content-modal2">
            <h1>Update</h1>
            <p>Seleccione la frase en inlges que desee modificar </p>
            <input type="text" class="inputText">
            <br><br>
            <p>Ingrese la nueva frase </p>
            <span>English </span>
            <input type="text" class="inputText">
            <span>Spanish </span>
            <input type="text" class="inputText">
            <br>
            <button class="acept">Update</button>
        </div>

        <div class="content-modal3">
            <h1>Delete</h1>
            <p>Escriba la frase en Ingles a elimiar </p>
            <input type="text" class="inputText">
            <br>
            <button class="save">Delete</button>
        </div>
    </div>
</template>
<script setup >
import { ref } from 'vue';



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

.modal {
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