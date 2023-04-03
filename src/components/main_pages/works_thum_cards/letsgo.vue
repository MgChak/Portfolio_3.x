<template>

    <div class="container background" :class="card_size.class_name" :style="{height:card_size.height}" ref="el">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">

                <img src="../../../assets/thum_cards/lp.png" class="largephone" alt="">
                <img src="../../../assets/thum_cards/letsgo_small_p.png" class="smallphone" alt="">
            </div>
        
            
            
    </div>


</template>

<script setup>
//hooks引入
import{handle_img_position_change,handle_el_container_size,handle_card_class_height_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,ref} from 'vue'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()

    let name = 'LETS_GO'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //获取class和高度
    let card_size = computed(()=>handle_card_class_height_change(name))

</script>

<style scoped>
.container{
    
    overflow: hidden;
    position:relative;
    transition:var(--animation-slow);
}

.background{
background: radial-gradient(42.7% 61.19% at 50% 50%, #343D2D 0%, #1A1C18 100%);
display: flex;
justify-content: center;
align-items: center;
}

.el_conatiner{
    position:relative;
    /* background-color: green; */
}

/* --------------------------------------------------- */
.container_index{
    width:100vw;
}

.container_index> .el_conatiner> .largephone {
    width: 156%;
    position: absolute;
    bottom: -12%;
    left: -39%;
    z-index: 3;
    transition: var(--animation-slow);
}
.container_index> .el_conatiner> .smallphone {
    position: absolute;
    bottom: 10%;
    left: 21%;
    width: 101%;
    z-index: 3;
    transition: var(--animation-slow);
}
/* --------------------------------------------------- */
.container_fullscreen{
    width:100vw;
}
.container_fullscreen > .el_conatiner> .largephone {
    width: 132%;
    position: absolute;
    bottom: 0%;
    left: -29%;
    z-index: 3;
    transition: var(--animation-slow);
}

.container_fullscreen >.el_conatiner> .smallphone {
    position: absolute;
    bottom: 16%;
    left: 21%;
    width: 90%;
    z-index: 3;
    transition: var(--animation-slow);
}
/* --------------------------------------------------- */
.container_article{
    width:100%;
}
.container_article > .el_conatiner> .largephone {
    width: 121%;
    position: absolute;
    bottom: -1%;
    left: -20%;
    z-index: 3;
    transition: var(--animation-slow);
}
.container_article > .el_conatiner> .smallphone {
    position: absolute;
    bottom: 16%;
    left: 26%;
    width: 85%;
    z-index: 3;
    transition: var(--animation-slow);
}



</style>