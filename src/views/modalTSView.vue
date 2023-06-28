<template>
    <div class="modal">
        <div class="content-modal">
            <h1>Created</h1>
            <h3>{{ nombre }}</h3>
            <p>Escriba la {{ nombre }} que desee agregar </p>
            <input type="text" class="inputText">
            <br>
            <button class="save first">Save</button>
        </div>

        <div class="content-modal2">
            <h1>Update</h1>
            <p>Seleccione la {{ nombre }} que se desee modificar </p>
            <input type="text" class="inputText">
            <br><br>
            <p>Ingrese el nuevo nombre de la {{ nombre }}</p>
            <input type="text" class="inputText">
            <br>
            <button class="acept">Update</button>
        </div>

        <div class="content-modal3">
            <h1>Delete</h1>
            <p>Escriba la {{ nombre }} que desee eliminar </p>
            <input type="text" class="inputText">
            <br>
            <button class="save">Delete</button>
        </div>
    </div>
</template>
<script >
import { ref } from 'vue';

export default {
    props: {
        nombre: {
            type: String,
            default: 'Nothing'
        }
    },
    setup(props) {
        return {
        }
    }
}


</script>
<style scoped>
.selectOption {
    margin-top: 5%;
    width: 80%;
    font-size: 15px;
    padding: 2%;
}

.inputText {
    margin-top: 5%;
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

.first {
    margin-top: 40%;
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