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
import {computed,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import useStore from './store/index.js'
const router = useRouter()
const store = useStore()
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



  let handleclickE = (id)=>{
    console.log(id)
    router.push({
      name:id
    })
  }

  let handleIncrease = ()=>{
    store.testDate = store.testDate + 2
  }

  let theNum = computed(()=>store.testDate)


</script>

<style scoped>


</style>
