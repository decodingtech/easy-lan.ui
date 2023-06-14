<template>
    <div class="background">
        <div class="allContainer">
            <div class="container sentences">
                <h2>Sentences / Frases </h2>
                <button @click="popWindowOpen"><img :src="add" alt="" class="addimg"></button>
                <trajetasView />
            </div>

            <div class="container progress">
                <h2>In progress / En proceso</h2>
            </div>

            <div class="container done">
                <h2>Done / Realizado</h2>
            </div>

        </div>
        <div class="pop">
            <div v-show="popWindows1" class="popWindow">
                <h3 @click="popWindowsClose" class="close"></h3>
                <modalView />
            </div>
        </div>
    </div>
</template>
<script >
import modalView from './modalView.vue';
import trajetasView from './tarjetasView.vue'
import { ref } from 'vue';

export default {
    components: {
        modalView,
        trajetasView
    },
    setup() {
        const popWindows1 = ref(false);
        const add = '../../public/add.png';
        const popWindowOpen = () => {
            popWindows1.value = true;
        }
        const popWindowsClose = () => {
            popWindows1.value = false;
        }

        return {
            popWindows1,
            popWindowOpen,
            popWindowsClose,
            add,
        }

    }
}
</script>

<style scoped>
.addimg {
    width: 90%;
    height: 65%;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgb(94, 94, 94);
}

.addimg:hover {
    box-shadow: 0px 0px 10px rgb(255, 255, 255);
    cursor: pointer;
}

button {
    background-color: rgba(240, 248, 255, 0.074);
    border-style: none;
    width: 10%;
    height: 7%;
    float: right;
    margin-top: -13%;
    margin-right: 3%;
}

.popWindow {
    position: absolute;
    width: 99.5%;
    height: 99.6%;
    margin-top: -43.3%;
}

.close {
    position: absolute;
    background-color: rgba(61, 61, 61, 0.426);
    width: 99.5%;
    height: 99.5%;
    margin-top: -1px;

}

.pop {
    text-align: center;
}

.background {
    height: 100%;
    margin: 0%;
}

.container {
    background-color: rgb(248, 236, 209);
    margin-left: 4%;
    width: 28%;
    height: 600px;
    max-height: 601px;
    text-align: center;
    overflow-y: scroll;
    scrollbar-color: red;
    box-shadow: 13px 12px 20px rgba(43, 43, 43, 0.559);
    border-radius: 7px;
}

.allContainer {
    display: flex;
    padding: 40px 0px 0px;
}
</style>