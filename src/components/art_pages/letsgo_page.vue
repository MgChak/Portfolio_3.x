<template>

<div class="main_container" id="article_container_for_scroll" :style="scroll_position">

    <letsgo/> 

    <div class="placehoudler"></div>
    <p>123333</p>

</div>

    
</template>

<script setup>
//组件引入
import letsgo from'../main_pages/works_thum_cards/letsgo.vue'
//hook引入
import {animation_queue_route_in,animation_queue_route_out} from'../../hooks/use_art_page_functions'
//依赖引入
import { computed,onMounted,nextTick } from 'vue'
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
        },600)    
    })

    //依赖于库中的数据平滑滚动文章
    let scroll_position = computed(()=>{
        return {top:store.scroll_position*-1+'px'}
    })


</script>

<style scoped>
.main_container{
    width:100%;
    display:flex;
    flex-direction: column;

    position:absolute;
    left:0;

    transition:var(--animation-slow);
    /* top 1s cubic-bezier(0.36, 0.36, 0.31, 1) */
  
}
.placehoudler{
    width:100%;
    height:2000px;
    background:rgb(0, 0, 0);
}
p{
    color:white;
}


</style>