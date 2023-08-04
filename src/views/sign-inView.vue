<template>
    <div>
        <div class="content">
            <img :src="imagen1" alt="" class="imagen1">
            <h3 class="nameapp">EasyLan</h3>
        </div>
        <div class="container-signin">
            <img :src="imagen2" alt="" class="imagen-user">
            <h3>Iniciar sesión</h3>
            <div class="input-text">
                <!--<label for="" class="text">Nombre de usuario</label><br>-->
                <input class="input" id="user" type="text" placeholder="Nombre de usuario" v-model="user">
                <br>
                <!--<label for="" class="text">Contraseña</label><br>-->
                <input class="input" id="password" type="password" placeholder="Contraseña" v-model="password">
            </div>
            <br>
            <button @click="send" class="Enter">Ingresar</button>
            <br>
            <div class="text-log">
                <h4 for="">
                    <RouterLink to="/forget" class="textl">Olvidé mi contraseña</RouterLink>
                </h4>
                <h4 for="">
                    <RouterLink to="/registre" class="textl">Registrarse</RouterLink>
                </h4>
            </div>
        </div>

    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    data() {
        const imagen1 = '../../public/Logo2.png ';
        const imagen2 = '../../public/user.png';
        const send = () => {
            const username = user.value
            const pass = password.value
            console.log(username);
            console.log(pass);
        }

        return {
            imagen1,
            imagen2,
            send,
        }
    }
}

</script>

<style scoped>
.Enter {
    border-radius: 20px;
}

.imagen-user {
    width: 15%;
    margin-top: 5%;
}

.textl {
    margin-top: 20px;
    margin-bottom: 40px;
    color: rgb(255, 255, 255);
}


.nameapp {
    margin-left: 36%;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
}

.imagen1 {
    width: 20%;
    margin-left: 35%;
    padding: 2%;
    margin-top: 25%;
    border-bottom: .5px solid #1953a3;
    animation: Logo 10s linear infinite;
}

@keyframes Logo {
    0% {
        transform: rotateY(360deg);
    }
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
    box-shadow: -5px 0px 10px rgba(13, 13, 13, 0.634);
}

.input-text {
    width: 70%;
    margin: auto;
    padding: 10px;
}

.input {
    border-radius: 10px;
    border-style: none;
    height: 20px;
    width: 90%;
    padding: 8px;
    margin-top: 5%;
    margin-bottom: 20px;
    background-color: rgba(240, 248, 255, 0.471);
    font-size: 15px;
}

.container-signin {
    width: 30%;
    height: 500px;
    margin-left: 50%;
    background-color: rgb(43, 43, 125);
    border-radius: 20px;
    margin-top: 5%;
    box-shadow: 5px 0px 10px rgba(6, 6, 6, 0.616);
    padding: 10px;
    position: absolute;
    text-align: center;

}
</style>