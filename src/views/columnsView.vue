<template>
    <div class="background">
        <div class="container">
            <column :nameColumn="'To do / Hacer'" :saveData="toDoSentence" :statusSentence="1" :update="saveData" />
            <column :nameColumn="'In progress / En proceso'" :saveData="inProgressSentence" :statusSentence="2"
                :update="saveData" />
            <column :nameColumn="'Done / Realizado'" :saveData="doneSentence" :statusSentence="3" :update="saveData" />
        </div>

    </div>
</template>
<script >
import column from './column.vue';
import { ref } from 'vue';
import getsentences from '../service/getsentences';

export default {
    components: {
        column
    },
    data() {

        return {
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
            const responce = await getsentences.getDataSentences()
            this.saveData = responce.data;

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