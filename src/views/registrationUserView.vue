<template>
    <div>
        <div class="content">
            <div class="input-text">

                <input class="input" type="text" placeholder="Nombre(s)">
                <br>
                <input class="input" type="text" placeholder="Apellido(s)">
                <br>
                <input class="input" type="text" placeholder="Correo" />
                <br>
                <input class="input" type="password" placeholder="Contraseña" />
                <button class="button-Acept">Aceptar</button>
            </div>
        </div>
        <div class="container-signin">
            <div class="acount">
                <img :src="imaGmail" alt="gmail" class="logo">
                <label for="" class="text-acount">Inicia sesión con Google</label>
            </div>
            <div class="acount">
                <img :src="imaFace" alt="facebook" class="logo">
                <label for="" class="text-acount">Inicia sesión con Facebook</label>
            </div>
            <RouterLink to="/" class="atras">atras</RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const imaGmail = '../../public/google.png';
const imaFace = '../../public/facebook.png';
</script>

<style scoped>
.atras {
    text-decoration: none;
    width: 10%;
    padding: 7px 51px 7px;
    border-radius: 20px;
    color: black;
    font-size: 18px;
    background-color: rgb(80, 138, 165);
    display: block;
    margin: 0 auto;
    margin-top: 30%;
}

.atras:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(125, 182, 239);
    box-shadow: 5px 5px 10px rgba(63, 63, 63, 0.545);
}

.text-acount {
    color: rgb(134, 134, 134);
    margin-left: 4%;
    padding: 5px;
    margin-top: -20px;
}

.text-acount:hover {
    color: white;
}

.acount {
    background-color: white;
    border-radius: 20px;
    padding: 5px;
    width: 70%;
    margin: 0 auto;
    margin-top: 30%;
    margin-bottom: -10%;
    box-shadow: 8px 5px 10px rgba(9, 9, 9, 0.695);
}

.acount:hover {
    background-color: rgb(198, 198, 198);
    cursor: pointer;
}

.logo {
    width: 6%;
    height: 6%;
}

.content {
    background-color: white;
    margin-left: 15%;
    width: 37%;
    height: 520px;
    position: absolute;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-top: 5%;
    box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.536);
}

.button-Acept {
    background-color: rgb(90, 143, 222);
    border-style: none;
    padding: 10px;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
    margin-top: 15%;
    font-size: 15px;
}


.button-Acept:hover {
    background-color: rgb(159, 196, 252);
    color: white;
    cursor: pointer;
}

.input-text {
    width: 70%;
    margin: auto;
    padding: 10px;
    margin-top: 5%;
}

.input {
    border-radius: 10px;
    border-style: none;
    height: 20px;
    width: 90%;
    padding: 8px;
    margin-top: 5%;
    margin-bottom: 20px;
    background-color: rgba(70, 129, 181, 0.471);
    font-size: 15px;
}

.container-signin {
    width: 30%;
    height: 500px;
    margin-left: 50%;
    background-color: rgb(43, 43, 125);
    border-radius: 20px;
    margin-top: 5%;
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.577);
    padding: 10px;
    position: absolute;
    text-align: center;

}
</style>