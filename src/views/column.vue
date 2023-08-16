<template>
  <div class="allContainer" @drop="onDrop($event, statusSentence)" @dragenter.prevent @dragover.prevent>
    <h2>{{ nameColumn }}</h2>
    <button v-if="statusSentence == 1" @click="popWindowOpen"><img :src="add" alt="" class="addimg"></button>
    <div class="card">
      <div class="container" v-for="(item, index) in saveData">
        <CardView :item="item" />
      </div>
    </div>

    <div v-show="popWindows1" class="popWindow">
      <h3 @click="popWindowsClose" class="close"></h3>
      <modalView />

    </div>
  </div>
</template>

<script>
import popWindowSentence from './popWindowSentence.vue';
import modalView from './modalview.vue';
import CardView from './cardView.vue';
import { ref } from 'vue';
export default {
  components: {
    CardView,
    modalView,
    popWindowSentence,
  },
  props: {
    nameColumn: String,
    saveData: Array,
    statusSentence: Number,
    update: Array,
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

    }
  },
  methods: {
    onDrop(event, status) {
      CardView.methods.onDrop(event, status, this.update);

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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
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

.container {
  width: 50%;
  margin: 0 auto;
}

.card {
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

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
