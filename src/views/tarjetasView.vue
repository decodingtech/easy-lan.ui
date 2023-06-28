<template>
    <div class="all">

        <div class="card" draggable="true" v-for="(sentenceData, index) in sentencesData" :key="sentenceData.sentenceID">
            <div class="circle"></div>
            <p class="text English"> {{ sentenceData.englishText }}</p>
            <p class="text spanish">{{ sentenceData.spanishText }}</p>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import getsentences from '../service/getsentences';
export default {
    setup() {
        const textEnglish = ref('Could I see the menu, please');
        const textSpanish = ref('¿Podria ver el menú, por favor?');
        const sentencesData = ref([]);
        return {
            textEnglish,
            textSpanish,
            sentencesData,
        }
    },
    methods: {
        async getDataMock() {
            const responce = await getsentences.getDataMock();
            this.sentencesData = responce.data;
            console.log(this.sentencesData);
        }
    },
    created() {
        this.getDataMock();
    }
}

</script>

<style scoped>
.all {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 5%;
}

.text {
    text-align: center;
    font-size: 16px;
}


.card {
    background-color: rgb(248, 248, 164);
    margin: 0 auto;
    height: auto;
    width: 35%;
    border-radius: 20px;
    padding: 2% 3%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.71);
    margin-top: 5%;
}

.card:hover {
    background-color: rgb(253, 253, 194);
    box-shadow: 0px 0px 10px rgb(255, 255, 255);
    /*-webkit-animation: animation 1.9s infinite;*/
}

/*
@-webkit-keyframes animation {
    0% {
        -webkit-transform: rotateZ(-10deg);
    }

    100% {
        -webkit-transform: rotateZ(10deg);
    }
}
*/

.circle {
    background-color: rgb(118, 6, 6);
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.889);
}
</style>