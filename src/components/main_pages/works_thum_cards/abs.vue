<template>
        <div class="container background" :class="class_name" ref="el">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}"> 
                <img  src="../../../assets/thum_cards/abs_2.png" alt="">
                <img  src="../../../assets/thum_cards/abs_1.png" alt="">
            </div>
        </div>
    
</template>

<script setup>
//hooks引入
import{handle_img_position_change,handle_el_container_size,handle_card_class_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,ref} from 'vue'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()

    let name = 'ABS_INTERNSHIP'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //获取class
    let class_name = computed(()=>handle_card_class_change(name))




</script>

<style scoped>
.container{
    background:linear-gradient(270.03deg, #F9193D 0.03%, #322632 35.03%, #1B2731 62.5%, #2F7DA1 99.97%);
    
    overflow: hidden;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:var(--animation-slow);
}
.el_conatiner{
    position:relative;
    /* background-color: green; */
}

/* --------------------------------------------------- */
.container_index{
    width:100vw;
    height:var(--thumcard_index_height);
}
.container_index > .el_conatiner> img:first-child{
    position:absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
    transition:var(--animation-slow);
}
.container_index> .el_conatiner > img:last-child{
    position:absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;
    transition:var(--animation-slow);
}
/* --------------------------------------------------- */
.container_fullscreen{
    height:var(--thumcard_fullscreen_height);
    width:100vw;
}
.container_fullscreen> .el_conatiner> img:first-child{
    position: absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
    transition: all 0.3s ease-in;
}
.container_fullscreen> .el_conatiner> img:last-child{
    position: absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;
    transition: all 0.3s ease-in;
}
/* --------------------------------------------------- */
.container_article{
    height:var(--thumcard_article_height);
    width:100%;
}
.container_article> .el_conatiner> img:first-child{
    position: absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
    transition: var(--animation-slow);
}
.container_article> .el_conatiner> img:last-child{
    position: absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;
    transition: var(--animation-slow);
}
</style>