<template>

<div class="main_container" :style="scroll_bar_style">
    <div 
        class="scroll_mark" 
        :style="scroll_mark_style" 
        @mousedown="handle_drag_start"
    ></div>
</div>
 
</template>

<script setup>

//依赖引入
import {computed,watchEffect} from 'vue'
import useStore from '../store/index.js'
const store = useStore()

    let scroll_bar_height_num

    let mark_move_num

    let mark_height_num

    let scroll_bar_style = computed(()=>{
        var scroll_bar_height
        var scroll_bar_right

        switch (store.scroll_event_status) {
            case 0:
                scroll_bar_height = store.page_height +'px'
                scroll_bar_right = 0
                scroll_bar_height_num = store.page_height
            break;
            default:
                scroll_bar_height = store.page_height +'px'
                scroll_bar_right = '-30px'
                scroll_bar_height_num = store.page_height
            break;
        }

        return {
            height:scroll_bar_height,
            right:scroll_bar_right
        }
       
    })

    let scroll_mark_style = computed(()=>{

        var mark_height = scroll_bar_height_num / store.scroll_page_height * store.page_height

        var mark_move = store.scroll_position / store.scroll_page_height * scroll_bar_height_num 

        mark_move_num = mark_move

        mark_height_num = mark_height

        return {
            height: mark_height + 'px',
            top: mark_move + 'px',
        }
    })


    let watcher //声明监听器

    let handle_drag_start = (e)=>{

        //将文章的高度保存到库
        store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight

        watcher = watchEffect(() => {

            var new_position = (store.mouse_position.y-e.offsetY) / scroll_bar_height_num * store.scroll_page_height

            if( new_position < 0){
                return
            }else if(new_position > store.scroll_page_height - store.page_height){
                return
            }else{
                store.scroll_position = (store.mouse_position.y-e.offsetY) / scroll_bar_height_num * store.scroll_page_height
            }
            
        })

        window.addEventListener('mouseup',()=>{
            watcher()
        },{ once: true })
    }


</script> 

<style scoped>
.main_container{
    width:30px; 
    position:fixed;
    z-index:8;
    bottom:0;
    pointer-events: none;

}
.scroll_mark{
    width:4px;
    position:absolute;
    right:10px;
    background:white;
    border-radius: 20px;
    transition:var(--animation-slow);
    pointer-events:all;
}
.main_container:hover .scroll_mark{
    width:15px;
    transition:var(--animation-slow)
}
</style>