<template>

    <div class="container background" :style="[card_size,card_position]" :class="[card_class,card_z_index,jump_animation]" ref="el">

            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">

                <img :style="img_position" src="../../../assets/thum_cards/lp.png" class="largephone" alt="">
                <img :style="img_position" src="../../../assets/thum_cards/letsgo_small_p.png" class="smallphone" alt="">
            </div>
        
            
            
    </div>


</template>

<script setup>
//hooks引入
import{handle_img_position_change,handle_el_container_size} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,ref} from 'vue'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()

    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = store.index_array.findIndex((item)=> item.name == 'LETS_GO' )

    let card_size = computed(()=>store.card_size_status[card_id].card_style)
    let card_class = computed(()=>store.card_size_status[card_id].card_class)
    let card_z_index = computed(()=>store.card_size_status[card_id].card_index)
    let card_position = computed(()=>{
        return {
        transform:`${store.card_size_status[card_id].card_move.t_scale} ${store.card_size_status[card_id].card_move.t_translate}`,
        transition:store.card_size_status[card_id].card_move.t_transition
        }
    })
    let img_position = computed(()=>handle_img_position_change(card_id))
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(card_id,width, height))
    let jump_animation = computed(()=>store.card_size_status[card_id].card_move.jump_animation)


</script>

<style scoped>
.container{
    will-change: z-index, left;
    overflow: hidden;
    position:relative;
}
img{

}
.container_z_index_back{
z-index:0;
}
.container_z_index_front{
z-index:1;
}
.container_expand{
}
.container_default{
}
.container_router{
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
.jump_animation{
    animation: animation 4s infinite;
    animation-delay: 1s;
}
@keyframes animation {
    0%{left:0%}
    5%{left:2.5%}
    10%{left: -2%}
    15%{left: 1.5%}
    20%{left: 0%}
    100%{left: 0%}
}

.container_default> .el_conatiner> .largephone {
    width: 156%;
    position: absolute;
    bottom: -12%;
    left: -39%;
    z-index: 3;
    transition: var(--animation-slow);
}
.container_default> .el_conatiner> .smallphone {
    position: absolute;
    bottom: 10%;
    left: 21%;
    width: 101%;
    z-index: 3;
    transition: var(--animation-slow);
}

.container_expand > .el_conatiner> .largephone {
    width: 156%;
    position: absolute;
    bottom: -12%;
    left: -39%;
    z-index: 3;
    transition: var(--animation-slow);
}

.container_expand >.el_conatiner> .smallphone {
    position: absolute;
    bottom: 10%;
    left: 21%;
    width: 101%;
    z-index: 3;
    transition: var(--animation-slow);
}
.container_router > .el_conatiner> .largephone {
    width: 121%;
    position: absolute;
    bottom: -1%;
    left: -20%;
    z-index: 3;
    transition: var(--animation-slow);
}
.container_router > .el_conatiner> .smallphone {
    position: absolute;
    bottom: 16%;
    left: 26%;
    width: 85%;
    z-index: 3;
    transition: var(--animation-slow);
}

</style>