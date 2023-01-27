<template>
<mouse_tracker/>
<h3 @click="handleclickE('1')">P1</h3>
<h3 @click="handleclickE('2')">P2</h3>
<h3 @click="handleIncrease()">{{theNum}}</h3>
<router-view></router-view>

</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue';
//依赖引入
import {computed,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import useStore from './store/index.js'
const router = useRouter()
const store = useStore()
//逻辑


  onMounted(()=>{
    window.addEventListener('mousemove', (e)=>{
        store.mouse_position.x = e.clientX
        store.mouse_position.y = e.clientY
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
h3{
  cursor: pointer;
}

</style>
