<template>

    <letsgo/> 
    
    <div class="placehoudler"></div>
    
</template>

<script setup>
//组件引入
import letsgo from'../main_pages/works_thum_cards/letsgo.vue'
//hook引入
import {animation_queue_route_in,animation_queue_route_out} from'../../hooks/use_art_page_functions'
//依赖引入
import { onBeforeUnmount, onMounted } from 'vue'
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';
const store = useStore()

    let page_id = 1
    onMounted(()=>{
        animation_queue_route_in(page_id)
    })

    onBeforeRouteLeave((from,to,next)=>{
        animation_queue_route_out()
        setTimeout(()=>{
            next()
        },350)    
    })

</script>

<style scoped>
.placehoudler{
    width:100%;
    height:1000px;
}

</style>