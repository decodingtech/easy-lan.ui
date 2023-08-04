<template>
    <div class="all">
        <div class="card" draggable="true" v-for="(item, index) in getList(number)" :key="item.id"
            @dragstart="startDrag($event, item)">
            <div class="circle"></div>
            <p class="text English"> {{ item.title }}</p>
            <p class="text spanish">{{ item.status }}</p>
        </div>

    </div>
</template>

<script>
import { ref, computed } from 'vue';
import getsentences from '../service/getsentences';
export default {
    props: {
        number: {
            default: 1,
        }
    },
    setup(props) {
        const textEnglish = ref('Could I see the menu, please');
        const textSpanish = ref('¿Podria ver el menú, por favor?');
        const sentencesData = ref([]);
        const items = ref([
            { id: 0, title: 'Item A', status: 1 },
            { id: 1, title: 'Item B', status: 2 },
            { id: 2, title: 'Item C', status: 3 },
        ]);
        const getList = (status) => {
            console.log("El status es: ", status)
            console.log("Estoy aqui", items.value.filter(((item) => item.status == status)))
            return items.value.filter((item) => item.status == status);
        }
        const startDrag = (event, item) => {
            console.log(item);
            console.log("Entro");
            event.dataTransfer.dropEffect = 'move'; //Controla la retroalimentacion visual del usuario 
            event.dataTransfer.effectAllowed = 'move'; //para mover, le dice a la api que queremos mover el elemnto original 
            event.dataTransfer.setData('itemID', item.id); // metodo, queremos pasar la identificacion del elemnto el nombre y guardamos la identificacion   

            console.log("Todo", items)
        }

        const onDrop = (event, status) => {
            console.log("Hola desde tarjetas");
            const itemID = event.dataTransfer.getData('itemID'); //Aceder a la identificacion del elemento 
            const item = items.value.find((item) => item.id == itemID); // busqueda delelemento donde la identificacion coincida 
            item.status = status; //Cambiamos el estatus al que estamos 

        }
        const saludo2 = (event, status) => {
            console.log("Saludando numero 2 te estoy viendo desde el setup ");
            console.log("Hola desde tarjetas");
            const itemID = event.dataTransfer.getData('itemID'); //Aceder a la identificacion del elemento 
            const item = items.value.find((item) => item.id == itemID); // busqueda delelemento donde la identificacion coincida 
            item.status = status; //Cambiamos el estatus al que estamos 
            console.log("Nuevo arreglo:", items.value);
        }
        return {
            textEnglish,
            textSpanish,
            sentencesData,
            startDrag,
            onDrop,
            getList,
            items,
            saludo2,
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