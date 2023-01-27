<template>

<div class="mouse_tracker_container" :style="tracker_position">

</div>
    
</template>

<script setup>
//依赖引入
import {computed} from 'vue'
import useStore from '../store/index.js'
const store = useStore()

    let tracker_position = computed(()=>{
        return {
            left:store.get_mouse_position_x,
            top:store.get_mouse_position_y
        }
    })
        



</script>

<style scoped>
.mouse_tracker_container{
    width:100px;
    height:100px;
    background:rgb(117, 133, 225);

    position:absolute;
}
</style>
    