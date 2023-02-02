<template>

<div class="main_container" :style="scroll_bar_style">
    <div class="scroll_mark" :style="scroll_mark_style"></div>
</div>
 
</template>

<script setup>

//依赖引入
import {computed} from 'vue'
import useStore from '../store/index.js'
const store = useStore()

    let scroll_bar_style = computed(()=>{
        var scroll_bar_height
        var scroll_bar_right

        switch (store.scroll_event_status) {
            case 0:
                scroll_bar_height = store.page_height +'px'
                scroll_bar_right = 0
            break;
            default:
                scroll_bar_height = store.page_height +'px'
                scroll_bar_right = '-30px'
            break;
        }

        return {
            height:scroll_bar_height,
            right:scroll_bar_right
        }
       
    })

    let scroll_mark_style = computed(()=>{

        var mark_height = store.page_height / store.scroll_page_height * store.page_height

        var mark_move = store.scroll_position / store.scroll_page_height * store.page_height

        return {
            height: mark_height + 'px',
            top: mark_move + 'px'
        }
    })

</script> 

<style scoped>
.main_container{
    width:30px; 
    position:fixed;
    z-index:8;
    bottom:0;

}
.scroll_mark{
    width:4px;
    position:absolute;
    right:10px;
    background:white;
    border-radius: 20px;
    transition:var(--animation-slow);
    cursor: grab;
}
.main_container:hover .scroll_mark{
    width:15px;
    transition:var(--animation-slow)
}
</style>