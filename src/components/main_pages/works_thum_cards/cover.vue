<template>

    <div class="container" :style="card_size">

    </div>
    
</template>

<script setup>
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()
    
    //从库中提取已经计算好的卡片尺寸
    let card_size = computed(()=>{
        return {
            width:store.get_thumcard_width,
            height:store.get_thumcard_height
        }
    })

</script>

<style scoped>
.container{
    background:rgb(144, 132, 77);
}
</style>