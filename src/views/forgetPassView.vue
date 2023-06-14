<template>
    <div>
        <input v-model="nombre" type="text">
        <h3>Olvide la contraseña {{ nombre }}</h3>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const nombre = ref('')

console.log(nombre);

</script>