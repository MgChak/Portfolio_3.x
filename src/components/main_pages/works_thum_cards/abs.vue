<template>
    <div class="card_container" :style="card_conatiner_size"> 
        <div class="container" :style="card_size" :class="[card_class,card_z_index]" >

        </div>
    </div>
    
</template>

<script setup>
//hooks引入
import{handle_style_change,handle_class_change,handle_z_index_change,handle_view_window_resize} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()

    
    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 0

    let card_size = computed(()=>handle_style_change(card_id))

    let card_class = computed(()=>handle_class_change(card_id))

    let card_z_index = computed(()=>handle_z_index_change(card_id))

    let card_conatiner_size = computed(()=>handle_view_window_resize(card_id))



    


</script>

<style scoped>
.container{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin:0;
    background:rgb(144, 77, 142);
}
.container_z_index_back{
    z-index: -3;
}
.container_z_index_front{
    z-index:initial;
}
.container_expand{

}
.container_default{

}.card_container{
    position:relative;
    left:0;
    top:0;
}
</style>