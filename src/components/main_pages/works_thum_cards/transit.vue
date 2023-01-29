<template>

    <div class="container" :style="card_size">

    </div>
    
</template>

<script setup>
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()

    let card_size = computed(()=>{
        return {
            width:store.get_thumcard_width,
            height:store.get_thumcard_height
        }
    })

</script>

<style scoped>
.container{
    background:rgb(77, 130, 144);
}
</style>