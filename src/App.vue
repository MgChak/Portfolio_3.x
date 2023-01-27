<template>
<mouseTracker/>
<h3 @click="handleclickE('1')">P1</h3>
<h3 @click="handleclickE('2')">P2</h3>
<h3 @click="handleIncrease()">{{theNum}}</h3>
<router-view></router-view>

</template>

<script setup>
import mouseTracker from './components/mouseTracker.vue';

import {computed} from 'vue'
import {useRouter} from 'vue-router'
import useStore from './store/index'

  const router = useRouter()
  const store = useStore()

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
