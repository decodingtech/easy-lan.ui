<template>
    <div class="draganddrop" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <div class="zone-drop">
            <div v-for="(item, index) in getList(1)" :key="item.id" class="drag" draggable="true"
                @dragstart="startDrag($event, item)">
                {{ item.title }}
            </div>
        </div>
    </div>
    <div class="draganddrop" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <div class="zone-drop">
            <div v-for="(item, index) in getList(2)" :key="item.id" class="drag" draggable="true"
                @dragstart="startDrag($event, item)">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const items = ref([
            { id: 0, title: 'Item A', status: 1 },
            { id: 1, title: 'Item B', status: 1 },
            { id: 2, title: 'Item C', status: 2 },
        ]);
        const getList = (status) => {
            return items.value.filter((item) => item.status == status)
        }

        const startDrag = (event, item) => {
            console.log(item);
            event.dataTransfer.dropEffect = 'move'; //Controla la retroalimentacion visual del usuario 
            event.dataTransfer.effectAllowed = 'move'; //para mover, le dice a la api que queremos mover el elemnto original 
            event.dataTransfer.setData('itemID', item.id); // Este es un metodo, queremos pasar la identificacion del elemnto el nombre y guardamos la identificacion   
        }

        const onDrop = (event, status) => {
            const itemID = event.dataTransfer.getData('itemID'); //Aceder a la identificacion del elemento 
            const item = items.value.find((item) => item.id == itemID); // busqueda delelemento donde la identificacion coincida 
            item.status = status; //Cambiamos el estatus al que estamos 
        }
        return {
            getList,
            startDrag,
            onDrop,
        }
    }
}

</script>

<style scoped>
.draganddrop {
    background-color: brown;
}

.zone-drop {
    margin: 0 auto;
    background-color: rgb(143, 143, 143);
    text-align: center;
    width: 50%;
    margin-top: 5%;
    padding: 1%;
}

.drag {
    background-color: rgb(61, 161, 255);
    padding: 1%;
    margin-top: 7px;
}
</style>