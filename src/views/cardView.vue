<template>
    <div class="all">
        <div class="card" draggable="true" @dragstart="startDrag($event, item)">
            <div class="circle"></div>
            <p class="text English"> {{ item.senEnglish }}</p>
            <p class="text spanish"> {{ item.senSpanish }}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        startDrag(event, item) {
            console.log("Es el item que estoy moviendo", item);
            event.dataTransfer.dropEffect = 'move'; //Controla la retroalimentacion visual del usuario 
            event.dataTransfer.effectAllowed = 'move'; //para mover, le dice a la api que queremos mover el elemnto original 
            event.dataTransfer.setData('itemID', item.senId); // metodo, queremos pasar la identificacion del elemnto el nombre y guardamos la identificacion   
        },
        onDrop(event, statusDrop, dataComplete) {
            console.log("Lo has soltado en: ", statusDrop)
            const itemID = event.dataTransfer.getData('itemID'); //Aceder a la identificacion del elemento 
            const item2 = dataComplete.find((item) => item.senId == itemID); // busqueda delelemento donde la identificacion coincida 
            console.log("Elemento arrastado y soltado es:  ", itemID);
            item2.status = statusDrop;
            //itemData.status = statusDrop; //Cambiamos el estatus al que estamos 

        }
    }
}
</script>

<style scoped>
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
    width: 35%;
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