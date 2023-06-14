<template>
    <div class="modal">
        <h1>Pop Window</h1>
        <h4>{{ nombre }}</h4>
        <input type="text">
        <button>Save</button>
    </div>
</template>
<script >
    import {ref} from 'vue';
    
    export default {
        props:{
            nombre:{
                type: String,
                default: 'Nothing'
            }
        },
        setup(props){
            return{
            }
        }
    }
    

</script>
<style scoped> 
    .modal{
        position: absolute;
        background-color: rgb(52, 52, 52);
        width: 50%;
        height: 70%;
        margin-left: 24%;
        margin-top: 5.5%;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgb(0, 0, 0);
        text-align: center;
    }
</style>