<template>

<div class="main_container" :class="store.loader_status?'active':'none'">
    <div class="loader" >
        <h1>{{ num }} </h1>
        <h2>LOADING</h2>
    </div>
</div>

</template>

<script setup>
import { watchArray } from '@vueuse/core';
import useStore from '../../store/index.js'
import { ref,watch } from 'vue';
const store = useStore()

let num = ref(0)
let speed = ref(100)
let res = 1

let time_fun = ()=>{
    console.log("qidong")
    let timer11 = setTimeout(()=>{
    
    num.value = num.value+res
    if (num.value<=10){
        res = 10
        speed.value = 50
        time_fun()
    }else if(num.value<=90){
        if(store.loader_num >= 70 &&store.loader_num < 100){
            res = 10
            speed.value = 30
            time_fun()
        }else if (store.loader_num >=100){
            num.value=100
            setTimeout(()=>{
                store.loader_status=false
                speed.value= 100
                setTimeout(()=>{
                    num.value = 0
                },300)
                store.loader_num = 0
                console.log("jieshu")
            },300)
        }else if (store.loader_num<70){
            speed.value = 200
            res = 1
            time_fun()
        }else if (store.loader_num<40){
            speed.value = 600
            res = 1
            time_fun()
        }
    }else if(num.value>90){
        if (store.loader_num >=100){
            num.value=100
            setTimeout(()=>{
                store.loader_status=false
                speed.value= 100
                setTimeout(()=>{
                    num.value = 0
                },300)
                store.loader_num = 0
                console.log("jieshu")
            },300)
        }else if(store.loader_num <= 98){
            console.log("mmmmmmmmm")
            speed.value = 1000
            res = 1
            time_fun()
        }else if (store.loader_num <= 99){
            speed.value =2000
            res = 0
            time_fun()
        }
    }
        

    },speed.value)
}

watch(()=>store.loader_status,(newVal)=>{
    if (newVal){
        time_fun()
    }
})




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
    pointer-events: none;
}

.loader{
    background-color: white;
    width:0px;
    height:0px;
    border-radius: 200px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.active{
    opacity: 1;
    transition: all 0.3s;
}
.active >.loader{
    width:200px;
    height:200px;
    transition: all 0.3s;
}
.none{
    opacity: 0;
    transition: all 0.3s;
    transition-delay: 0.3s;
}
.none >.loader{
    width:0px;
    height:0px;
    transition: all 0.3s;
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