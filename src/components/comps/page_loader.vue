<template>

<div class="main_container" v-if="store.loader_status">
    <div class="loader" >
        <h1>{{ store.loader_num }}</h1>
        <h2>LOADING</h2>
    </div>
</div>

</template>

<script setup>
import useStore from '../../store/index.js'
const store = useStore()
</script>

<style scoped>
.main_container{
    position:fixed;
    background-color: rgba(251, 251, 251, 0.425);
    height:100vh;
    width:100vw;
    z-index:10;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
.loader{
    background-color: white;
    width:200px;
    height:200px;
    border-radius: 200px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
    font-size: 80px;
    font-weight: 800;
    line-height: 100px;
    color:rgb(45, 45, 45)
}
h2{
    font-size: 20px;
    font-weight: 100;
}

</style>