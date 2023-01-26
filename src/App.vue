<template>
<h3 @click="handleclickE('1')">P1</h3>
<h3 @click="handleclickE('2')">P2</h3>
<router-view></router-view>

</template>

<script setup>
import {useRouter} from 'vue-router'

  const router = useRouter()

  let handleclickE = (id)=>{
    console.log(id)
    router.push({
      name:id
    })
  }


</script>

<style scoped>
h3{
  cursor: pointer;
}

</style>
