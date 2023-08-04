<template>
  <div class="allContainer" @drop="onDrop($event, statusSentence)" @dragenter.prevent @dragover.prevent>
    <h2>{{ nameColumn }}</h2>
    <div class="container" v-for="(item, index) in saveData">
      <CardView :item="item" />
    </div>
  </div>
</template>

<script>
import CardView from './cardView.vue';
export default {
  components: {
    CardView
  },
  props: {
    nameColumn: String,
    saveData: Array,
    statusSentence: Number,
    update: Array,
  },
  data() {
    return {

    }
  },
  methods: {
    onDrop(event, status) {
      console.log("Estamos aqui",);
      CardView.methods.onDrop(event, status, this.update);
      console.log("Elementos en column: ", this.update)
      //const itemID = event.dataTransfer.getData('itemID'); //Aceder a la identificacion del elemento 
      //const item = this.items.find((item) => item.id == itemID); // busqueda delelemento donde la identificacion coincida 
      //item.status = status; //Cambiamos el estatus al que estamos 

    }
  }
}
</script>

<style scoped>
/*
.container {
  background-color: rgb(248, 236, 209);
  margin-left: 7%;
  width: 80%;
  height: 600px;
  max-height: 601px;
  text-align: center;
  overflow-y: auto;
  box-shadow: 13px 12px 20px rgba(43, 43, 43, 0.559);
  border-radius: 7px;
  margin-top: 0%;
}*/

.allContainer {
  background-color: rgb(248, 236, 209);
  margin-left: 2%;
  width: 30%;
  margin-top: 3%;
  text-align: center;
  height: 600px;
  max-height: 601px;
  text-align: center;
  overflow-y: auto;
  box-shadow: 13px 12px 20px rgba(43, 43, 43, 0.559);
  border-radius: 7px;
}
</style>
