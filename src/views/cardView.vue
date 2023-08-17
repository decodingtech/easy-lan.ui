<template>
    <div class="all">
        <div class="card" draggable="true" @dragstart="startDrag($event, item)" @click="changedStatusOn(item.status)">
            <div class="circle"></div>
            <p class="text English"> {{ item.senEnglish }}</p>
            <p class="text spanish"> {{ item.senSpanish }}</p>
        </div>

        <div v-show="pop" class="WindowsOptions">
            <div class="close" @click="changedStatusOff"></div>
            <PopWindowSentence :textEnglish="item.senEnglish" :textSpanish="item.senSpanish" />
        </div>

    </div>
</template>

<script>
import PopWindowSentence from './popWindowSentence.vue';
import { ref } from 'vue';
export default {
    components: {
        PopWindowSentence,
    },
    props: {
        item: Object,
    },
    data() {
        const pop = ref(false);
        const changedStatusOn = (status) => {
            if (status == 2) {
                pop.value = true;
            }
        }
        const changedStatusOff = () => {
            pop.value = false;
        }
        return {
            pop,
            changedStatusOn,
            changedStatusOff,
        }
    },
    methods: {
        startDrag(event, item) {
            event.dataTransfer.dropEffect = 'move'; //Controla la retroalimentacion visual del usuario 
            event.dataTransfer.effectAllowed = 'move'; //para mover, le dice a la api que queremos mover el elemnto original 
            event.dataTransfer.setData('itemID', item.senId); // metodo, queremos pasar la identificacion del elemnto el nombre y guardamos la identificacion   
        },
        onDrop(event, statusDrop, dataComplete) {
            const itemID = event.dataTransfer.getData('itemID'); //Aceder a la identificacion del elemento 
            const item2 = dataComplete.find((item) => item.senId == itemID); // busqueda delelemento donde la identificacion coincida 
            item2.status = statusDrop;
        }
    }
}
</script>

<style scoped>
.WindowsOptions {
    position: absolute;
    background-color: rgba(108, 106, 106, 0.426);
    backdrop-filter: blur(2px);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

}

.sentenceOptions {
    width: 100%;
    height: 100%;
    left: 0;
}

.close {
    position: absolute;
    background-color: rgba(108, 106, 106, 0.426);
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    margin-top: -0.2%;
}

.all {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.text {
    text-align: center;
    font-size: 16px;
}


.card {
    background-color: rgb(248, 248, 164);
    margin: 0 auto;
    height: auto;
    width: 80%;
    border-radius: 20px;
    padding: 2% 3%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.71);
    margin-top: 5%;
}

.card:hover {
    background-color: rgb(253, 253, 194);
    box-shadow: 0px 0px 10px rgb(255, 255, 255);
}

.circle {
    background-color: rgb(118, 6, 6);
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.889);
}
</style>