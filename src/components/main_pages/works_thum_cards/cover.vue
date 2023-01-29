<template>

    <div class="container" :style="card_size" :class="[card_class,card_z_index]">

    </div>
    
</template>

<script setup>
//hooks引入
import{handle_style_change,handle_class_change,handle_z_index_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()
    
    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 1

    let card_size = computed(()=>handle_style_change(card_id))

    let card_class = computed(()=>handle_class_change(card_id))

    let card_z_index = computed(()=>handle_z_index_change(card_id))

</script>

<style scoped>
.container{
    background:rgb(144, 132, 77);
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin:0;
    transition:all 0.3s ease-in-out;
}
.container_z_index_back{
    z-index: -3;
}
.container_z_index_front{
    z-index:initial;
}
.container_expand{
    z-index:-3;

}
.container_default{

}
</style>