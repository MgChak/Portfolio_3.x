<template>
<mouse_tracker/>
<the_header/>

<router-view></router-view>

</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue';
import the_header from './components/header.vue';
//依赖引入
import {onMounted,watchEffect} from 'vue'
import {useRoute} from 'vue-router'
import useStore from './store/index.js'
const store = useStore()
const route = useRoute()
    

//逻辑


  onMounted(()=>{
    //监听鼠标移动，把鼠标坐标存入库
    window.addEventListener('mousemove', (e)=>{
        store.mouse_position.x = e.clientX
        store.mouse_position.y = e.clientY
    })
    //监听鼠标滚轮滚动
    window.addEventListener('wheel',(e)=>{
      console.log(e.wheelDelta)
    })

  })

  //监听路由变化并存入数据库
  watchEffect(()=>{store.path_now = route.name})



</script>

<style scoped>


</style>
