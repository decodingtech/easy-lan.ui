<template>
    <div class="background">
        <div class="container">
            <column :nameColumn="'To do / Hacer'" :saveData="toDoSentence" :statusSentence="1" :update="saveData" />
            <column :nameColumn="'In progress / En proceso'" :saveData="inProgressSentence" :statusSentence="2"
                :update="saveData" />
            <column :nameColumn="'Done / Realizado'" :saveData="doneSentence" :statusSentence="3" :update="saveData" />
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
import column from './column.vue';
import { ref } from 'vue';
import axios from 'axios';

export default {
    components: {
        modalView,
        column
    },
    data() {
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
            saveData: [],
        }

    },
    computed: {
        toDoSentence() {
            return this.saveData.filter((item) => item.status == 1);
        },
        inProgressSentence() {
            return this.saveData.filter((item) => item.status == 2);
        },
        doneSentence() {
            return this.saveData.filter((item) => item.status == 3);
        },
    },
    methods: {
        async getDataBase() {
            const responce = await axios.get('http://localhost:8080/api/v1/sentences/allsentences');
            this.saveData = responce.data;
            console.log("Datos obtenidos: ", this.saveData)

        }
    },
    created() {
        this.getDataBase();
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}
</style>