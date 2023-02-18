<template>

    <div class="container background" :style="[card_size,card_position]" :class="[card_class,card_z_index]" >
        
            <img :style="img_position" src="../../../assets/thum_cards/letsgo_large_p.webp" class="largephone" alt="">
            <img :style="img_position" src="../../../assets/thum_cards/letsgo_small_p.png" class="smallphone" alt="">
            
    </div>


</template>

<script setup>
//hooks引入
import{handle_img_position_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,defineProps, onMounted} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()
//监听对比需要展开的卡片id于自身id，并改变css
let card_id = 1

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



</script> 

<style scoped>
.container{
    will-change: z-index transform;
    overflow: hidden;
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
position:relative;
}

.container_default> .largephone {
    position: absolute;
    bottom: 0%;
    left:-14%;
    width:100%;
    z-index: 1;
    transition: all 0.3s ease-in;
}
.container_default> .smallphone {
    position: absolute;
    bottom: 0%;
    left:28%;
    width:50%;
    z-index: 1;
    transition: all 0.3s ease-in;
}
.container_expand > .largephone {
position: absolute;
bottom:0;
left:-14%;
width:110%;
z-index:3;
transition:var(--animation-slow);
}
.container_expand > .smallphone {
position: absolute;
bottom:0%;
left:30%;
width:65%;
z-index:3;
transition:var(--animation-slow);
}
.container_router > .largephone {
    position: absolute;
    bottom: 0;
    left: 3%;
    width: 80%;
    z-index: 3;
    transition: var(--animation-slow);
}
.container_router > .smallphone {
    position: absolute;
    bottom: 0%;
    left: 37%;
    width: 43%;
    z-index: 3;
    transition: var(--animation-slow);
}

</style>